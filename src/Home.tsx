import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton, WalletDisconnectButton } from "@solana/wallet-adapter-material-ui";

import Amplify, {API,graphqlOperation} from 'aws-amplify';
import { withAuthenticator} from 'aws-amplify-react'; 
import aws_exports from './aws-exports'; // specify the location of aws-exports.js file on your project
import GraphQLAPI, { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
import {useMediaQuery} from 'react-responsive';

// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.5.0";
import "./assets/demo/demo.css?v=1.5.0";
import "./assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

// core components
import IndexNavbar from "./components/Navbars/IndexNavbar.js";
import IndexHeader from "./components/Headers/IndexHeader.js";
import DarkFooter from "./components/Footers/DarkFooter.js";

// sections for this page
import Images from "./views/index-sections/Images.js";
import BasicElements from "./views/index-sections/BasicElements.js";
import Navbars from "./views/index-sections/Navbars.js";
import Tabs from "./views/index-sections/Tabs.js";
import FAQ from "./views/index-sections/FAQ.js";
import Roadmap from "./views/index-sections/Roadmap.js";
import Mint from "./views/index-sections/Mint.js";

import {Container, Row } from "reactstrap";
import mobileBackground from './assets/img/mobile-bg1.gif'
import wideBackground from './assets/img/mint_page_bg.jpg'

import { DataStore } from '@aws-amplify/datastore';
import { WhitelistAddress } from './models';

//export * from './API';
//export * from './graphql/mutations';
//export * from './graphql/queries';
//export * from './graphql/subscriptions';
import {ListWhitelistAddressesQuery, MintCount} from './API';

import {listWhitelistAddresses, syncMintCounts, getMintCount} from './graphql/queries';
import {createMintCount, updateMintCount, updateWhitelistAddress} from './graphql/mutations'


import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress
} from "./candy-machine";
import { isEnumMember } from "typescript";

const ConnectButton = styled(WalletDialogButton)``;

const DisconnectButton = styled(WalletDisconnectButton)``;

const CounterText = styled.span``; // add your styles here

const MintContainer = styled.div``; // add your styles here

const MintButton = styled(Button)``; // add your styles here

Amplify.configure(aws_exports);

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
  whitelistPublicKeys: string[];
}

const Home = (props: HomeProps) => {
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT
  const [isWhitelist, setIsWhitelist] = useState(false); // true when user got to press MINT
  const whitelistMintLimit = 3;
  const [whitelistItem, setWhitelistItem] = useState<WhitelistAddress>();
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const [startDate, setStartDate] = useState(new Date(props.startDate));
  const [whitelistStartDate, setWhitelistStartDate] = useState(new Date());
  const wallet = useWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();
  const [itemsRemaining, setItemsRemaining] = useState(0);
  const [itemsAvailable, setItemsAvailable] = useState(0);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const imageUrl = isTabletOrMobile ? mobileBackground : wideBackground;

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
          if(whitelistItem){
            await DataStore.save(WhitelistAddress.copyOf(whitelistItem, item => {
              // Update the values on {item} variable to update DataStore entry
              item.count = item.count + 1;
              if(item.count >= whitelistMintLimit){
                setIsWhitelist(false);
              }
            }));
          }
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet?.publicKey) {
        const balance = await props.connection.getBalance(wallet?.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
    }
  };

  useEffect(() => {
    (async () => {
      const models = await DataStore.query(WhitelistAddress);
      if (wallet?.publicKey) {
        const walletAddress = wallet?.publicKey;
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
        const item = models.filter(e => e?.wallet===walletAddress.toString());
        if(item && item.length > 0){
          setWhitelistItem(item[0]);
          /* Models in DataStore are immutable. To update a record you must use the copyOf function
          to apply updates to the item’s fields rather than mutating the instance directly */
          if(whitelistItem && whitelistItem.count < whitelistMintLimit){
            setIsWhitelist(true);
          }else{
            console.log(item[0]);
            if(item[0].count < whitelistMintLimit){
              setIsWhitelist(true);
            }
          }
        }
      }
      const anchorWallets = {
        publicKey: wallet.publicKey,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction,
      } as anchor.Wallet;
      const {goLiveDate, itemsRemaining, itemsAvailable} =
        await getCandyMachineState(
          anchorWallets,
          props.candyMachineId,
          props.connection
        );
        setItemsRemaining(itemsRemaining);
        setItemsAvailable(itemsAvailable);
        setStartDate(goLiveDate);
        var temp = new Date();
        temp.setDate(goLiveDate.getDate()-1);
        setWhitelistStartDate(temp);
    })();
  }, [wallet, props.connection]);

  useEffect(() => {
    (async () => {
      if (
        !wallet ||
        !wallet.publicKey ||
        !wallet.signAllTransactions ||
        !wallet.signTransaction
      ) {
        return;
      }

      const anchorWallet = {
        publicKey: wallet.publicKey,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction,
      } as anchor.Wallet;

      const { candyMachine, goLiveDate, itemsRemaining, itemsAvailable } =
        await getCandyMachineState(
          anchorWallet,
          props.candyMachineId,
          props.connection
        );

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      var temp = new Date();
      temp.setDate(goLiveDate.getDate()-1);
      setWhitelistStartDate(temp);
      setCandyMachine(candyMachine);
      setItemsRemaining(itemsRemaining);
      setItemsAvailable(itemsAvailable);
    })();
  }, [wallet, props.candyMachineId, props.connection]);

  return (
    <>
    <IndexNavbar />
    <div className="wrapper">
    <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
            `url(${imageUrl})`,
          }}
        ></div>
        <Container>
          <div className="container-content">
          {
            <div>
            {(
              <p>Items Remain : {(itemsRemaining).toLocaleString()}/{(itemsAvailable).toLocaleString()}</p>
            )}
            {(
              <p>Pre-sale Date : {(new Date(props.startDate * 1000)).toLocaleDateString()} 9PM UTC(PM EST)</p>
            )}
            {(
              <p>Public Sale Date : {(new Date(props.startDate * 1000)).toLocaleDateString()} 10PM UTC(6PM EST)</p>
            )}
            <MintContainer>
              {!wallet.connected ? (
                <ConnectButton>Connect Wallet</ConnectButton>
              ) : (
                <MintButton
                  disabled={isSoldOut || isMinting || !isActive ||!isWhitelist}
                  onClick={onMint}
                  variant="outlined"
                  className="mint-button"
                >
                  {isSoldOut ? (
                    "SOLD OUT"
                  ) : isActive ? (
                    isMinting && isWhitelist ? (
                      <CircularProgress />
                    ) : (
                      <img className="minting-button" src={require("./assets/img/mint_button.png").default}></img>
                    )
                  ) : (
                    <Countdown
                      date={startDate}
                      onMount={({ completed }) => completed && setIsActive(true)}
                      onComplete={() => setIsActive(true)}
                      renderer={renderCounter}
                    />
                  )}
                </MintButton>
                
              )}
            </MintContainer>
            <DisconnectButton disabled={!wallet.connected}>Disconnect</DisconnectButton>
            <Snackbar
              open={alertState.open}
              autoHideDuration={6000}
              onClose={() => setAlertState({ ...alertState, open: false })}
            >
              <Alert
                onClose={() => setAlertState({ ...alertState, open: false })}
                severity={alertState.severity}
              >
                {alertState.message}
              </Alert>
            </Snackbar>
          </div>
          }
          </div>
        </Container>
      </div>
      </div>
      </>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      {hours} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};

export default Home;
