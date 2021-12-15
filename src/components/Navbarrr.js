import React ,{ useState }from 'react';

import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {Link as LinkUrl,useHistory} from 'react-router-dom';
// import colorx
import colorx from '../style/colorx';
// import CSS
import '../style/navbar.css';
import '../style/index.css'
import { useLocation } from 'react-router-dom'
// import IMG
import home from '../img/icons/home.svg';
import friends from '../img/icons/friends.svg';
// import styledComponent Navbar Styled
import {
    MenuButtonSticks,
    NavContainer,
    Nav,
    NavbarTopp,
    MenuButton,
    NavMenuSlide,
    NavMenuLinksTop,
    NavMenuLinksBottom,
    BackgroundSlideMenu,
    
} from './Navbarst';

// import MainComponent
import {
    Logox,
    ButtonxLogo,
    TextLinks,
    Buttonxone,
    TextLinksNoDot,
} from './mainComponent';



// Use FUNCTION Space
import gotHomepage from '../History';




const Navbarrr = () => {
    
    let history = useHistory();
    const [open, setOpen] = useState(false)

    
    // functions

    let gotHomepage=()=> {
        history.push("/");
    }

    const location = useLocation();
    let currentpath = location.pathname;



    const LogoxClickUrl =()=>{
        if( currentpath === '/'){
            scroll.scrollToTop({duration:0,smooth:'easeOutQuad',}); 
            
        }
        else{ 
            gotHomepage();
            
        }
    } 
    const LogoxClickUrlSlide =()=>{
        if( currentpath === '/'){
            scroll.scrollToTop({duration:0,smooth:'easeOutQuad',}); 
            setOpen(!open);
        }
        else{ 
            gotHomepage();
            
        }
    } 

    // function space
    const Clickkkkked = ()=>{
        setOpen(!open);
        
    }

    const ClickHowToUse =()=>{
        if( currentpath === '/'){
            scroll.scrollTo(2000,{duration:0,smooth:'easeOutQuad',}); 
            setOpen(!open);
            
        }
        else{ 
            history.push("/");
            scroll.scrollTo(2000,{duration:0,smooth:'easeOutQuad',});
            setOpen(!open);
        }
    }



    const ClickGoToForm=()=>{
        if( currentpath === '/formInfomation'){
            scroll.scrollToTop({duration:0,smooth:'easeOutQuad',}); 
            setOpen(!open);
            
        }
        else { 
            history.push("/formInfomation");
            scroll.scrollToTop({duration:0,smooth:'easeOutQuad',});
        }
    }
    const ClickGoToRoommate=()=>{
        if( currentpath === '/WeAreStillDevelopThifeature'){
            scroll.scrollToTop({duration:0,smooth:'easeOutQuad',}); 
            setOpen(!open);
            
        }
        else { 
            history.push("/WeAreStillDevelopThifeature");
            scroll.scrollToTop({duration:0,smooth:'easeOutQuad',});
        }
    }
    return (
        <>
           
            <NavContainer >

                
                <Nav>
                    <NavbarTopp >
                        <div onClick={LogoxClickUrl}>
                            <Logox FontSize='30' FontWeight='500' colorrr={colorx.blueM} />
                        </div>
                        <MenuButton onClick={Clickkkkked}>
                            <MenuButtonSticks/>
                            <MenuButtonSticks/>
                            <MenuButtonSticks/>
                        </MenuButton>

                    </NavbarTopp>
                </Nav>
                

                <NavMenuSlide statex={open} >
                <NavMenuLinksTop>
                            <MenuButton className='menu-button' onClick={Clickkkkked}>
                                <MenuButtonSticks/>
                                <MenuButtonSticks/>
                                <MenuButtonSticks/>
                            </MenuButton>
                            <div onClick={LogoxClickUrlSlide}>
                                <Logox FontSize='30' FontWeight='500' colorrr={colorx.blueM} />
                            </div>
                        </NavMenuLinksTop>

                        <NavMenuLinksBottom> 
                            <div onClick={ClickGoToForm}>
                                <ButtonxLogo  ImgName={home}  widthhh='225' FontSize='18' FontWeight='300' colorrr={colorx.yellowM} Textx='ค้นหาที่พักปล่อยเช่า'/>
                            </div>
                            <div onClick={ClickGoToRoommate}>
                                <ButtonxLogo ImgName={friends}  widthhh='225' FontSize='18' FontWeight='300' colorrr={colorx.pinkM} Textx='ค้นหา Roommate'/>
                            </div>
                            <div onClick={ClickHowToUse}>
                                <TextLinks FontSize='16' FontWeight='300' colorlinkText={colorx.blackM}/>
                            </div>
                        </NavMenuLinksBottom>
                    
        
                </NavMenuSlide>

                <BackgroundSlideMenu statex={open} onClick={() => setOpen(!open)}/>
               
            </NavContainer>
        </>
    );
}

export default Navbarrr;