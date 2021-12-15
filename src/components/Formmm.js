import React from 'react';
import {Link as LinkUrl,useHistory} from 'react-router-dom';
import '../style/bootstrap5/css/bootstrap.min.css';
import '../style/bulma/css/bulma.min.css';
import { RangeDatePicker } from 'react-google-flight-datepicker';
import 'react-google-flight-datepicker/dist/main.css';


// import colorx
import colorx from '../style/colorx';

// import CSS
import '../style/index.css';
// import From styled
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


import {
    FormHeader,
    TextFormHeader,
    HashtagForm,
    FormContainer,
    DivHeader,
    DivForm,
    Divpart,
    DivQuestion,
    DivDescripQuestion,
    DivAnswer,
    Labelx,
    TextHeadForm,
    Textverivy,
} from './Formst';
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
    Buttonxone,
    TextLinksNoDot,
} from './mainComponent';



import verify from '../img/illustate/verify.svg';


export const toptoptop=()=>{
    scroll.scrollToTop( {duration:0,smooth:'easeOutQuad'})
}


const Formmmx =()=>{

    
    
    return(

        
        <div style={{background:colorx.grayMsoft}} >
            <FormHeader>
                <DivHeader>
                    <TextFormHeader>
                        <div>บริการค้นหา บ้านเช่า</div> <div>คอนโด หอพัก </div>  <div> ที่พักปล่อยเช่าฯ <span style={{color:colorx.blueM}} > ฟรี</span></div>
                        
                    </TextFormHeader>
                    <HashtagForm>
                            <div># ไม่ต้องเสียเวลาค้นหา </div><div> แค่กรอกรายละเอียดทิ้งไว้ </div><div>เราจะค้นหาให้คุณเอง</div>
                    </HashtagForm>
                </DivHeader>
            </FormHeader>
            {/* fill */}

            <FormContainer style={{background:colorx.grayMsoft}}>
                <TextHeadForm>
                    แบบฟอร์มลายละเอียด
                </TextHeadForm>
            
            
            
            <DivForm>
            <Divpart>
            <DivQuestion>
                บริเวณพื้นที่ ที่ท่านต้องการเช่า
            </DivQuestion>

            <DivAnswer>
            <div className="form-check marginx">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                กรุงเทพมหานคร
            </label>
            </div>
            <div className="form-check marginx" >
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                นนทบุรี
            </label>
            </div>
            <div className="form-check marginx">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                ปทุมธานี
            </label>
            </div>
           
            
            
            <input type="text" class="form-control marginx"  placeholder="อื่นๆ"/>
            </DivAnswer>
            
        </Divpart>

        <Divpart>
            <DivQuestion>
                ประเภทที่อยู่อาศัยที่ท่านต้องการ
            </DivQuestion>

            <DivAnswer>
            <div className="form-check marginx">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                บ้าน
            </label>
            </div>
            <div className="form-check marginx">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                คอนโด
            </label>
            </div>
            <div className="form-check marginx">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                หอพัก
            </label>
            </div>
            
            <input type="text" class="form-control marginx"  placeholder="อื่นๆ"/>
            </DivAnswer>
        </Divpart>

        <Divpart>
            <DivQuestion>
                ค่าเช่าที่ท่านต้องการ
                <DivDescripQuestion>( บาท/เดือน )</DivDescripQuestion>
            </DivQuestion>

            <DivAnswer>
            
            <div className="select marginx">
                <select>
                    <option>---</option>
                    <option>น้อยกว่า 1,000</option>
                    <option>1,000 - 3,000</option>
                    <option>3,000 - 5,000</option>
                    <option>5,000 - 10,000</option>
                    <option>10,000 - 15,000</option>
                    <option>15,000 - 20,000</option>
                    <option>20,000 - 30,000</option>
                    <option>30,000 - 50,000</option>
                    <option>50,000 ขึ้นไป</option>
                </select>
            </div> 
           
            </DivAnswer>
        </Divpart>
        
        <Divpart>
            <DivQuestion>
                ระยะเวลาที่ท่านต้องการเช่า 
                <DivDescripQuestion>( โดยประมาณ )</DivDescripQuestion>

            </DivQuestion>

            <DivAnswer>
            <div className="select marginx">
                <select>
                    <option>---</option>
                    <option>น้อยกว่า 1 ปี</option>
                    <option>1 ปี</option>
                    <option>2 ปี</option>
                    <option>3 ปี</option>
                    <option>4 ปี</option>
                    <option>5 ปี</option>
                    <option>5 ปีขึ้นไป</option>
                </select>
            </div> 
           
            </DivAnswer>
        </Divpart>

        <Divpart>
            <DivQuestion>
            สถานที่ทำงาน หรือ สถานที่ที่ท่านต้องเดินทางเป็นประจำ
                <DivDescripQuestion>( เพื่อที่เราจะได้ค้นหาที่พักปล่อยเช่าให้ท่านสามารถเดินทาง และ ใช้ชีวิตประจำวันได้สะดวกยิ่งขึ้น )</DivDescripQuestion>

            </DivQuestion>

            <DivAnswer>
            <textarea class="textarea" placeholder=" เช่น ที่ทำงาน, โรงเรียน, มหาวิทยาลัย หรือ บริเวณใกล้เคียง  "></textarea>
           
            </DivAnswer>
        </Divpart>

        <Divpart>
        <DivQuestion>
            วันที่ท่านต้องการย้ายเข้า
        </DivQuestion>
        <DivAnswer>         
                <RangeDatePicker
                    startDate={new Date()}
                    endDate={new Date()}
                    minDate={new Date(1900, 0, 1)}
                    maxDate={new Date(2100, 0, 1)}
                    dateFormat="D/MMM/YYYY"
                    monthFormat="MMM-YYYY"
                    startDatePlaceholder="ตั้งแต่"
                    endDatePlaceholder="ถึง"
                    disabled={false}
                    highlightToday
                    className="my-own-class-name"
                    startWeekDay="monday"
                    />
        </DivAnswer>
        </Divpart>
        <Divpart>
            <DivQuestion>
            จำนวนคนที่ท่านต้องการอยู่อาศัย  
                <DivDescripQuestion>( เพื่อเลือกขนาดที่พักให้เหมาะสมกับท่าน ) </DivDescripQuestion>

            </DivQuestion>

            <DivAnswer>
            <div className="select marginx">
                <select>
                    <option>---</option>
                    <option>1 </option>
                    <option>2 </option>
                    <option>3 </option>
                    <option>4 </option>
                    <option>5 </option>
                    <option>6 </option>
                    <option>7 </option>
                    <option>8 </option>
                    <option>9 </option>
                    <option>10 </option>
                    <option>10 คนขึ้นไป</option>
                </select>
            </div> 
           
            </DivAnswer>
        </Divpart>
        <form>
        <Divpart>
            <DivQuestion>
            คุณมียานพาหนะส่วนตัว หรือไม่ ?
                

            </DivQuestion>

            <DivAnswer>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios"  value="option1" checked/>
                <label class="form-check-label" for="exampleRadios1">
                    มี
                </label>
                
            </div>
            <div class="form-check">
           <input class="form-check-input" type="radio" name="exampleRadios"  value="option1" />
                <label class="form-check-label" for="exampleRadios1">
                    ไม่มี
                </label>
                </div>
            </DivAnswer>
        </Divpart>
        </form>
       
        <Divpart>
            <DivQuestion>
            คุณมีสัตว์เลี้ยงไหม ?
            </DivQuestion>

            <DivAnswer>
            <div className="form-check marginx">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                ไม่มี
            </label>
            </div>
            <div className="form-check marginx">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                สุนัข
            </label>
            </div>
            <div className="form-check marginx">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                แมว ( น้องงง )
            </label>
            </div>
            <div className="form-check marginx">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                สัตว์ปีก
            </label>
            </div>
            <div className="form-check marginx">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                อนาคอนด้า
            </label>
            </div>
            <div className="form-check marginx">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                ไดโนเสาร์
            </label>
            </div>
           

            <input type="text" class="form-control marginx"  placeholder="อื่นๆ"/>
            </DivAnswer>
        </Divpart>

        <Divpart>
            <DivQuestion>
            รายละเอียดเพิ่มเติม

            </DivQuestion>

            <DivAnswer>
            
                <textarea class="form-control "  rows="5"></textarea>
            
           
            </DivAnswer>
        </Divpart>
            </DivForm>
            </FormContainer>


            <FormContainer second style={{background:colorx.grayMsoft}}>
<TextHeadForm >
    เลือกวิธีการติดต่อกลับ
</TextHeadForm>
    <DivForm>
        <Divpart>
                <DivQuestion>
                ชื่อผู้ใช้งาน
    
                </DivQuestion>

                <DivAnswer>
                <input type="text" class="form-control marginx"  placeholder="ชื่อ หรือ นามแฝง"/>
            
                </DivAnswer>
            </Divpart>
        

        <Divpart>
                <DivQuestion>
                คุณสะดวกให้เราติดต่อกลับทางใด
    
                </DivQuestion>

                <DivAnswer>
                    <div className="form-check marginx">
                        <input class="form-check-input" type="checkbox" value="" />
                        <label class="form-check-label" for="flexCheckDefault">
                        เบอร์โทรศัพท์
                    </label>
                    <input type="text" class="form-control marginx"  placeholder="เบอร์โทรศัพท์"/>
                    </div>


                    <div className="form-check marginx">
                        <input class="form-check-input" type="checkbox" value="" />
                        <label class="form-check-label" for="flexCheckDefault">
                        Line
                    </label>
                    <input type="text" class="form-control marginx"  placeholder="Line ID"/>
                    </div>

                    <div className="form-check marginx">
                        <input class="form-check-input" type="checkbox" value="" />
                        <label class="form-check-label" for="flexCheckDefault">
                        Facebook
                    </label>
                    <input type="text" class="form-control marginx"  placeholder="ชื่อบัญชี Facebook"/>
                    </div>
                    <div className="form-check marginx">
                        <input class="form-check-input" type="checkbox" value="" />
                        <label class="form-check-label" for="flexCheckDefault">
                        E-mail
                    </label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="your_email@email.com"/>
                    </div>
                    <div className="form-check marginx">
                        <input class="form-check-input" type="checkbox" value="" />
                        <label class="form-check-label" for="flexCheckDefault">
                        อื่นๆ
                    </label>
                    <input type="text" class="form-control marginx"  placeholder=""/>
                    </div>
                </DivAnswer>
            </Divpart>
        
        </DivForm>

</FormContainer>




<ContentContainer  >
    <DivContentInsider reverse>
        <ContentInsider >
            <TextinsiderContent>
                
                <Textverivy dark>
              
                <div>ตรวจสอบรายละเอียดอีกครั้ง</div>
                <div>แล้วกดยืนยัน</div>

                </Textverivy>
                <DivButtonContent>
                        <LinkUrl to='/formInfomation/thankyouandgoodLuckx'><Buttonxone   widthhh='100' FontSize='18' FontWeight='300' colorrr={colorx.blackM} Textx='ยืนยัน' /></LinkUrl>
                        <div onClick={()=>scroll.scrollToTop( {duration:0,smooth:'easeOutQuad'})}>
                            <TextLinksNoDot colorlinkText={colorx.blackM} Text='ตรวจสอบรายละเอียด' FontSize='16' FontWeight='300' />
                        </div>
                </DivButtonContent>
                
            </TextinsiderContent>
        </ContentInsider >
        <ContentInsider>
            <ContentInsiderImg src={verify} />
        </ContentInsider>
        </DivContentInsider>
    </ContentContainer>




    {/* <Link to='form-info' duration='250'  offset={-1000} smooth='easeOutQuad'> */}


            
            
       </div>
    );
}

export default Formmmx ;