/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components
import mobileBackground from '/Users/stevenyang/Projects/candy-machine-mint/src/assets/img/mobile-bg1.gif'
import wideBackground from '/Users/stevenyang/Projects/candy-machine-mint/src/assets/img/wide-background.gif'
import {useMediaQuery} from 'react-responsive';

function IndexHeader() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  let pageHeader = React.createRef();
  var backgroundImagePath = require("/Users/stevenyang/Projects/candy-machine-mint/src/assets/img/mobile-background.gif");
  const imageUrl = isTabletOrMobile ? mobileBackground : wideBackground;
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
            `url(${imageUrl})`,
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="category category-absolute">
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
