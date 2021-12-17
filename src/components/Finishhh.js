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
import homeHow from '../img/illustate/homeHow.svg';
import comHouse from '../img/illustate/comHouse.svg';
const Finishhh = () => {
    return (
        <>
          <FisichContainer >
            <DivContentInsider reverse>
                <ContentInsider >
                    <TextinsiderContent>
                        <TextHead>
                        ดำเนินการเสร็จสิ้น
                        </TextHead>
                        <TextSub>
                        
                        {/* <div className='blank-space-form'>ขณะนี้ทางทีมงาน Mawroo. ได้รับข้อมูลของท่านเรียบร้อยแล้ว</div> 
                        <div>หลังจากนี้ทางเราจะค้นหาที่พักปล่อยเช่าที่ใกล้เคียงกับที่คุณต้องการ </div>
                        <div>หากเราพบตัวเลือกที่ใกล้เคียง ทาง Mawroo. จะรีบติดต่อกลับให้ท่านทราบ</div>
                        <div>ขอบคุณที่ไว้วางใจ ขอบคุณที่ใช้บริการค่ะ ^^ </div> */}
                        ขณะนี้ทางทีมงาน Mawroo. ได้รับข้อมูลของท่านเรียบร้อยแล้ว
                        หลังจากนี้ทางเราจะรีบค้นหาที่พักปล่อยเช่าที่ใกล้เคียงกับที่คุณต้องการ 
                        หากเราพบตัวเลือกที่ใกล้เคียง ทาง Mawroo. จะรีบติดต่อกลับให้ท่านทราบ
                        ขอบคุณที่ไว้วางใจ ขอบคุณที่ใช้บริการค่ะ ^^ 
                        </TextSub>

                        <LinkUrl to='/'><Buttonxone colorrr={colorx.blackM}  FontSize='18' FontWeight='300' widthhh='160' Textx='กลับสู่หน้าหลัก'/></LinkUrl>
                    </TextinsiderContent>
                </ContentInsider >
                <ContentInsider>
                    <ContentInsiderImg src={comHouse}/>
                </ContentInsider>
                </DivContentInsider>
            </FisichContainer>  
        </>
    )
}

export default Finishhh;
