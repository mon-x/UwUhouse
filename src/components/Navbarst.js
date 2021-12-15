import styled from 'styled-components';

// import colorx
import colorx from '../style/colorx';

// import CSS

import '../style/navbar.css';

// main styled-components
export let NavContainer = styled.div`

`
export let Nav = styled.div`
    position:fixed;
    display:flex;
    width:100%;
    height:90px;
    background:${colorx.whiteMT};
    align-items:center;
    padding:0px 15vw 0px 15vw;
    justify-content:center;
    z-index:899;

    transition: all 300ms ease-in-out;
    @media screen and (max-width:500px){
        height:70px;
    }
    @media screen and (max-width:320px){
        height:60px;
    }
    
`
export let NavbarTopp = styled.div`
    display:flex;
    align-items:center;
    width:100%;
    justify-content:space-between;  
    z-index:890;
    

`


export let MenuButton= styled.div`
    cursor: pointer;
    display:flex;
    flex-direction:column;
    height:21px;
    justify-content:space-evenly;
    z-index:999;
    
    transition: all 300ms ease-in-out;
    @media screen and (max-width:400px){
        margin-left:-200px;

    }
    
    
`
export let MenuButtonSticks= styled.div`
    width:22px;
    height:3px;
    background:${colorx.blueM};
    border-radius:10px;
`
// NavMenuSlide
export const NavMenuSlide = styled.div`
    display:block;
    width:360px;
    height:380px;
    z-index:999;
    border-radius: 0px 0px 0px 50px;
    background:${colorx.whiteM};
    position:fixed;
    right: 0px;
    left: auto;
    transition: all 250ms ease-in-out;
    transform:${props => props.statex ? "translateX(0%)" : "translateX(100%)"};

    @media screen and (max-width:400px){
        width:100%;

    }
    

`



// `
// Inside NavMenuSlide
export const NavMenuLinksTop = styled.div`
    margin-top:24px;
    display:flex;
    align-items:center;
    justify-content:center;
    align-items:center;
  
`
export const NavMenuLinksBottom = styled.div`
    
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    padding-top:35px;


`

// background slide

export const BackgroundSlideMenu = styled.div`
    display:flex;
    position:fixed;
    z-index:901;
    background:${props => props.statex ? colorx.blueMT : "none"};
    width:1000%;
    height:1000%;
    transition: all 50ms ease-in-out;
    transform:${props => props.statex ? "translateX(-50%)" : "translateX(110%)"};
    
`
