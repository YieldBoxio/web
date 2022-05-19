import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import selectd from '../../assets/img/navlink.svg'
import noSelectd from '../../assets/img/noSelectd.png'


const SideNavigation = () => {
    // const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    // const handleResize = (e) => {
    //     setWindowWidth(window.innerWidth);
    // };

    // React.useEffect(() => {
    //     window.addEventListener("resize", handleResize);
    // });

    // React.useEffect(() => {
    //     return () => {
    //         window.addEventListener("resize", handleResize);
    //     };
    // });
    // if (windowWidth > 992) {
    return (
        <div className="side__nav">
            <ScrollLink to="slider__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                {/* <img src={noSelectd} width="40px" height="auto" /> */}
            </ScrollLink>
            <ScrollLink to="about__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                {/* <img src={noSelectd} width="40px" height="auto" /> */}
            </ScrollLink>
            <ScrollLink to="staking__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                {/* <img src={noSelectd} width="40px" height="auto" /> */}
            </ScrollLink>
            <ScrollLink to="earning__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                {/* <img src={noSelectd} width="40px" height="auto" /> */}
            </ScrollLink>
            <ScrollLink to="tokenomics__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                {/* <img src={noSelectd} width="40px" height="auto" /> */}
            </ScrollLink>
            <ScrollLink to="advantage__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                {/* <img src={noSelectd} width="40px" height="auto" /> */}
            </ScrollLink>
            <ScrollLink to="rewards__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                {/* <img src={noSelectd} width="40px" height="auto" /> */}
            </ScrollLink>
            <ScrollLink to="todo__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                {/* <img src={noSelectd} width="40px" height="auto" /> */}
            </ScrollLink>
            <ScrollLink to="documents__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                {/* <img src={noSelectd} width="40px" height="auto" /> */}
            </ScrollLink>
            <ScrollLink to="buy__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                {/* <img src={noSelectd} width="40px" height="auto" /> */}
            </ScrollLink>
            <ScrollLink to="mobileapp__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                {/* <img src={noSelectd} width="40px" height="auto" /> */}
            </ScrollLink>
            <ScrollLink to="nft__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                {/* <img src={noSelectd} width="40px" height="auto" /> */}
            </ScrollLink>
            <ScrollLink to="faqs__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                {/* <img src={noSelectd} width="40px" height="auto" /> */}
            </ScrollLink>
        </div>
    )
    // }
    // else {
    //     return (
    //         <></>
    //     )
    // }
}


export default SideNavigation;