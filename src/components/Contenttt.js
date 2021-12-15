import React from 'react';
import * as Scroll from 'react-scroll';
import {Link as LinkUrl} from 'react-router-dom';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
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
    ButtonxLogo,
} from './mainComponent';
import  toptoptop from  './Formmm';
import friends from '../img/icons/friends.svg';
import home from '../img/icons/home.svg';

import homehouse from '../img/illustate/homehouse.svg';
import homeRoommate from '../img/illustate/homeRoommate.svg';
import homeHow from '../img/illustate/homeHow.svg';


// bulma-react



const Contenttt = () => {
    return (
        <>
            <ContentContainer id='find-house'>
            <DivContentInsider >
                <ContentInsider >
                    <TextinsiderContent>
                        <Hashtag yellow>
                            #หาที่พักปล่อยเช่า
                        </Hashtag>
                        <TextMain dark>
                        <div className='contentText'>
                            <div className='blank-space'>หาที่พักปล่อยเช่าที่ถูกใจ</div><div className='blank-space'>ทำไมมันยากจัง</div>
                        </div>
                        <div>ลองใช้ Mawroo<span style={{color:colorx.pinkM}} >.</span> ดูสิ</div>

                        </TextMain>
                        <DivButtonContent>
                            <LinkUrl to='/formInfomation' ><ButtonxLogo  ImgName={home} widthhh='180' FontSize='18' FontWeight='300' colorrr={colorx.yellowM} Textx='เริ่มต้นใช้งาน'/></LinkUrl>
                            {/* <TextLinksNoDot FontSize='18' FontWeight='300'/> */}
                        </DivButtonContent>
                    </TextinsiderContent>
                </ContentInsider >
                <ContentInsider>
                    <ContentInsiderImg src={homehouse}/>
                </ContentInsider>
                </DivContentInsider>
            </ContentContainer>


            {/* second */}
            <ContentContainer  id='find-roommate'>
                <DivContentInsider reverse dark>
                <ContentInsider  >
                    <TextinsiderContent reverse>
                        <Hashtag >
                            #หาRoomateคู่ใจ
                        </Hashtag>
                        <TextMain >
                        <div className='contentText'>
                            <div className='blank-space'>ค้นหา Roommate</div><div className='blank-space'>แชร์ค่าเช่าที่พัก</div>
                        </div>
                        
                        
                        <div>ง่ายๆแค่ใช้ Mawroo<span style={{color:colorx.pinkM}} >.</span></div>


                        </TextMain>
                        <DivButtonContent >
                        <LinkUrl to='/WeAreStillDevelopThifeature' ><ButtonxLogo  ImgName={friends} widthhh='180' FontSize='18' FontWeight='300' colorrr={colorx.pinkM} Textx='เริ่มต้นใช้งาน'/></LinkUrl>
                            {/* <TextLinksNoDot FontSize='18' FontWeight='300' colorlinkText={colorx.whiteM}/> */}
                        </DivButtonContent>
                    </TextinsiderContent>
                </ContentInsider>
                <ContentInsider >
                    <ContentInsiderImg src={homeRoommate}/>
                       
                </ContentInsider>
                </DivContentInsider>
            </ContentContainer>

            <ContentContainer>

                <DivContentInsider>
                    <ContentInsider>
                        <ContentInsiderHow>
                        <TextHow dark>
                            วิธีการใช้งาน Mawroo.
                            
                        </TextHow>
                        <ContentInsiderImg src={homeHow}/>
                        </ContentInsiderHow>
                    </ContentInsider>

                    
                    <ContentInsider>
                        <ContentInsiderHow>
                        <DivHow>
                            1. กดไปที่ปุ่มเริ่มต้น
                            <DivHowButton>
                            <Link to='find-house' smooth='treaseOutQuadue' offset={-60} duration={0}><ButtonxLogo  ImgName={home} widthhh='180' FontSize='18' FontWeight='300' colorrr={colorx.yellowM} Textx='เริ่มต้นใช้งาน'/></Link>
                                หรือ
                                <Link to='find-roommate' smooth='treaseOutQuadue' offset={-100} duration={100}><ButtonxLogo  ImgName={friends} widthhh='180' FontSize='18' FontWeight='300' colorrr={colorx.pinkM} Textx='เริ่มต้นใช้งาน'/></Link>
                            </DivHowButton>
                        </DivHow>
                        <DivHow>
                            2.กรอกรายละเอียดตามแบบฟอร์ม
                        </DivHow>
                        <DivHow>
                            3.รอทีมงาน Mawroo ติดต่อกลับ
                        </DivHow>
                        </ContentInsiderHow>
                    </ContentInsider>


                </DivContentInsider>
            </ContentContainer>

           
            
        </>
    )
}

export default Contenttt;
