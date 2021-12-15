import React ,{ useState }from 'react';

// import colorx
import colorx from '../style/colorx';


import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
// import Headerrr Styled
import {
    Headerx,
    DivHeaderText,
    HeaderText,
    HeaderMenu,
    HeaderMenuText,
    HeaderMenuButton,
} from './Headerst';

// import mainComponent
import {
    ButtonxLogo,
} from './mainComponent';

// import IMG
import home from '../img/icons/home.svg';
import friends from '../img/icons/friends.svg';



const Headerrr = ()=>{
    return(
        <>
            <Headerx>
                <DivHeaderText>
                    <HeaderText colorrr={colorx.whiteM} texttt='#บริการค้นหาฟรี' hashtag='none'/>
                    <HeaderText colorrr={colorx.yellowM} texttt='บ้านเช่า คอนโด หอพัก  ที่พักปล่อยเช่า ฯ' />
                    <HeaderText colorrr={colorx.pinkM} texttt='หารูมเมท เพื่อนร่วมห้อง หารค่าเช่า' />
                </DivHeaderText>
               
               
                <HeaderMenu>
                    <HeaderMenuText>
                        ไม่ต้องเสียเวลา  แค่กรอกรายละเอียดทิ้งไว้  เราจะค้นหาให้คุณเอง 
                    </HeaderMenuText>
                    <HeaderMenuButton>
                    
                        <Link to='find-house' smooth='treaseOutQuadue' offset={-60} duration={0}><ButtonxLogo  ImgName={home} widthhh='200' FontSize='18' FontWeight='300' colorrr={colorx.blackM} Textx='หาที่พักปล่อยเช่า'/></Link>
                        <Link to='find-roommate' smooth='treaseOutQuadue' offset={-100} duration={100}><ButtonxLogo  ImgName={friends} widthhh='200' FontSize='18' FontWeight='300' colorrr={colorx.blackM} Textx='หา Roommate'/></Link>
                    </HeaderMenuButton>
                </HeaderMenu>
            </Headerx>
        </>

    );
}

export default Headerrr;