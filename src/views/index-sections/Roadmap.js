import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row } from "reactstrap";
import { Chrono } from "react-chrono";
// core components

const items = [
              {
                title: "August 2021",
                cardTitle: "𝕀ℕ𝕋ℝ𝕆",
                cardSubtitle:"WallStreetPunkS Introduction",
                cardDetailedText: "WallStreetPunkS started in August 2021. Our project consists of 9,000 algorithmically generated collectible avatars based around 6 characters. We a team based in New York. Our goal is to help artists start their NFT journey and build their reputation. This is our first feature artist project. Our project artist, JOEIAN, is an illustrator based in Tokyo, Japan. The characters of WallStreetPunkS live in a futuristic cyberpunk world. In 2077, we follow our 6 characters, Crypto Maxi, Entrepreneur Doge, Social Arbitrager, The Suit, The Android (Ai), and The Financial Regulator. ",
              },
              {
                title: "October 2021",
                cardTitle: "𝔼𝔸ℝ𝕃𝕐 𝕆ℂ𝕋𝕆𝔹𝔼ℝ",
                cardSubtitle:"WallStreetPunkS First Drop: PUNK DROP VOL. 1",
                cardDetailedText: "First 3 Characters: Crypto Maxi, Entrepreneur Doge, and Social Arbitrager",
              },
              {
                title: "November 2021",
                cardTitle: "𝔼𝔸ℝ𝕃𝕐 ℕ𝕆𝕍𝔼𝕄𝔹𝔼ℝ",
                cardSubtitle:"WallStreetPunkS Second Drop: PUNK DROP VOL. 2",
                cardDetailedText: ["Following 3 Characters: The Suit, The Android (Ai), and The Financial Regulator",
                "10% Sold - Random airdrop for randomly selected community members (raffle event)" ,
                "25% Sold - Earlier sketch of selected character will be airdropped to randomly selected community members (raffle event)" ,
                "50% Sold - A chance to win 1 of 10 physically printed featured artists, JOEIAN, artbook (giveaway)" ,
                "100% Sold - MYSTERY CHARACTER airdrop to the wallets that hold all six WallStreetPunkS characters"]
              },
            ];
            const year2022Items = [
              {
                title: "2022",
                cardTitle: "Ongoing development of WallStreetPunkS world and storyline",
                cardSubtitle:"Support Team and other Artists",
                cardDetailedText: "10% for our team to support other artists and 20% to support featured artist, JOEIAN, in collaboration with WallStreetPunkS",
              },
            ]

function Roadmap() {
  return (
    <>
      <div className="section section-roadmap" data-background-color="black" id="roadmap-section">
        <div className="space-50"></div>
        <Container className="text-center">
        <h1>𝕎𝕒𝕝𝕝𝕊𝕥𝕣𝕖𝕖𝕥ℙ𝕦𝕟𝕜𝕊 ℝ𝕆𝔸𝔻𝕄𝔸ℙ 𝟚𝟘𝟚𝟙</h1>
          <Row>
            
          <div>
          <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            theme={{ 
              primary: "red",
              secondary: "grey",
              cardBgColor: "black",
              cardForeColor: "violet",
              titleColor: "white"
            }}
          />
          </div>
          </Row>
          <h1>𝕎𝕒𝕝𝕝𝕊𝕥𝕣𝕖𝕖𝕥ℙ𝕦𝕟𝕜𝕊 ℝ𝕆𝔸𝔻𝕄𝔸ℙ 𝟚𝟘𝟚𝟚</h1>
          {/*}
          <Row>
            
          <div>
          {/*}
          <Chrono
            items={year2022Items}
            mode="VERTICAL"
            theme={{ 
              primary: "red",
              secondary: "grey",
              cardBgColor: "black",
              cardForeColor: "violet",
              titleColor: "white"
            }}
          />
          </div>
          </Row>
          {*/}
          <div>
            <h2>Treasury Fund: </h2>
            <p>
            10% for our team to support other artists
            </p>
            <p>
            20% to support featured artist, JOEIAN, in collaboration with WallStreetPunkS 
            </p>
            <p>20% ᴏғ ᴛʜᴇ ᴛʀᴇᴀsᴜʀʏ ғʀᴏᴍ ᴛʜᴇ ᴍɪɴᴛɪɴɢ ᴏғ ᴛʜᴇ sᴇᴄᴏɴᴅ ᴘʜᴀsᴇ ᴡɪʟʟ ʙᴇ ʀᴇᴅɪsᴛʀɪʙᴜᴛᴇᴅ ᴛᴏ ᴀʟʟ ᴛʜᴏsᴇ ᴛʜᴀᴛ ᴍɪɴᴛᴇᴅ ғʀᴏᴍ ᴛʜᴇ ғɪʀsᴛ ᴄᴏʟʟᴇᴄᴛɪᴏɴ.</p>

            <p>ᴇᴠᴇʀʏ ᴍᴏɴᴛʜ, 20% ғʀᴏᴍ ʀᴇsᴇʟʟ ʀᴏʏᴀʟᴛɪᴇs ᴡɪʟʟ ʙᴇ ᴅɪsᴛʀɪʙᴜᴛᴇᴅ ᴛᴏ ᴛʜᴏsᴇ ᴡʜᴏ ʜᴏʟᴅ ᴀɴ ɴғᴛ ғʀᴏᴍ ᴏᴜʀ ᴄᴏʟʟᴇᴄᴛɪᴏɴ ғᴏʀ ᴍᴏʀᴇ ᴛʜᴀɴ 30 ᴅᴀʏs.</p>
            </div>
        </Container>
      </div>
    </>
  );
}

export default Roadmap;
