import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row } from "reactstrap";
import Faq from "react-faq-component";

// core components

const data = {
  rows: [
      {
          title: "𝙒𝙝𝙖𝙩 𝙞𝙨 𝙒𝙖𝙡𝙡𝙎𝙩𝙧𝙚𝙚𝙩𝙋𝙪𝙣𝙠𝙎?",
          content: `It is 9,000 algorithmically generated collectible avatars based around 6 characters.First drop only 3 character,1500 per character.`,
      },
      {
          title: "𝙒𝙝𝙚𝙣 𝙬𝙞𝙡𝙡 𝙄 𝙜𝙚𝙩 𝙢𝙮 𝙒𝙖𝙡𝙡𝙎𝙩𝙧𝙚𝙚𝙩𝙋𝙪𝙣𝙠𝙎 𝙉𝙁𝙏 𝙖𝙛𝙩𝙚𝙧 𝙩𝙝𝙚 𝙢𝙞𝙣𝙩?",
          content: "Your WallStreetPunkS NFT will be sent to your wallet right after minting which might take a few minutes.",
      },
      {
          title: "𝙒𝙝𝙖𝙩 𝙎𝙤𝙡𝙖𝙣𝙖 𝙒𝙖𝙡𝙡𝙚𝙩𝙨 𝙘𝙖𝙣 𝙄 𝙪𝙨𝙚?",
          content: `We will be using Phantom wallet for the website connection.`,
      },
      {
          title: "𝙒𝙝𝙚𝙣 𝙬𝙞𝙡𝙡 𝙩𝙝𝙚 𝙡𝙖𝙪𝙣𝙘𝙝 𝙗𝙚?",
          content: 'We will be launching in early October, check back soon for the exact date.',
      },
      {
        title: "𝙃𝙤𝙬 𝙢𝙪𝙘𝙝 𝙙𝙤𝙚𝙨 𝙞𝙩 𝙘𝙤𝙨𝙩 𝙩𝙤 𝙢𝙞𝙣𝙩 𝙖 𝙒𝙖𝙡𝙡𝙎𝙩𝙧𝙚𝙚𝙩𝙋𝙪𝙣𝙠𝙎 𝙉𝙁𝙏?",
        content: 'We are aware of how much the value of SOL is fluctuating and are taking this into account to determine what the cost of minting will be. We will have a definite mint cost for you closer to the launch.',
      },
      {
          title: "𝙄𝙨 𝙩𝙝𝙚𝙧𝙚 𝙖 𝙥𝙧𝙚-𝙨𝙖𝙡𝙚?",
          content: 'Yes! To be eligible for presale, we currently have open whitelist spots available. We also have giveaways and raffles for a chance to be eligible for presale.',
      },
      {
        title: "𝘿𝙤 𝙮𝙤𝙪 𝙝𝙖𝙫𝙚 𝙧𝙖𝙧𝙞𝙩𝙮 𝙨𝙮𝙨𝙩𝙚𝙢?",
        content: 'Yes, we do because rarity is important among our NFTs, there will also be a rarity chart on our website. ',
      },
      {
      title: "𝘾𝙖𝙣 𝙄 𝙖𝙥𝙥𝙡𝙮 𝙩𝙤 𝙗𝙚 𝙖𝙣 𝙖𝙧𝙩𝙞𝙨𝙩?",
      content: 'Yes! If you are interested in creating NFTs with us, please send an PM to our official Twitter account.',
      },
  ],
};

const styles = {
  bgColor: 'black',
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: 'white',
  arrowColor: "white",
  //titleTextColor: 'blue',
  // titleTextSize: '48px',
  // rowTitleTextSize: 'medium',
  // rowContentColor: 'grey',
  //rowContentTextSize: '16px',
  // rowContentPaddingTop: '10px',
  //rowContentPaddingBottom: '10px',
  //rowContentPaddingLeft: '50px',
  // rowContentPaddingRight: '150px',
  // arrowColor: "red",
  //transitionDuration: "1s",
  // timingFunc: "ease"
};

const config = {
  animate: true,
  //arrowIcon: "V",
  tabFocus: true
};

function FAQ() {
  return (
    <>
      <div className="section section-faq" data-background-color="black" id="faq-section">
        <div className="space-50"></div>
        <Container>
          <Row>
          <div>
            <h2>Frequently Asked Questions</h2>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FAQ;
