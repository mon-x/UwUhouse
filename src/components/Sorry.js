import React from 'react'
import {Link as LinkUrl,useHistory} from 'react-router-dom';
import colorx from '../style/colorx';
import '../style/index.css';
// import styled content
import {
    ContentContainer,
    ContentInsider,
    TextinsiderContent,
    Hashtag,
    TextMain,
    DivButtonContent,
    DivContentInsider,
    ContentInsiderImg,
    TextHow,
    ContentInsiderHow,
    DivHow,
    DivHowButton,
} from './Contentst';

import {
    FisichContainer,
    TextHead,
    TextSub,
} from './Finishst';
import {
    Buttonxone,
} from './mainComponent';

import friends from '../img/icons/friends.svg';
import home from '../img/icons/home.svg';

import homehouse from '../img/illustate/homehouse.svg';
import homeRoommate from '../img/illustate/homeRoommate.svg';
import sorry from '../img/illustate/sorry.svg';
import comHouse from '../img/illustate/comHouse.svg';
const Sorry = () => {
    return (
        <>
          <FisichContainer >
            <DivContentInsider reverse>
                <ContentInsider >
                    <TextinsiderContent>
                        <TextHead>
                        กำลังอยู่ในระหว่างการพัฒนา
                        </TextHead>
                        <TextSub>
                        ขณะนี้ระบบค้นหา Roommate กำลังอยู่ในช่วงการทดสอบระบบ
                        ขออภัยในความไม่สะดวกค่ะ 
                        </TextSub>

                        <LinkUrl to='/'><Buttonxone colorrr={colorx.blackM}  FontSize='18' FontWeight='300' widthhh='160' Textx='กลับสู่หน้าหลัก'/></LinkUrl>
                    </TextinsiderContent>
                </ContentInsider >
                <ContentInsider>
                    <ContentInsiderImg src={sorry}/>
                </ContentInsider>
                </DivContentInsider>
            </FisichContainer>  
        </>
    )
}

export default Sorry;
