import React, { useState } from 'react';
import {Link as LinkUrl,useHistory} from 'react-router-dom';
import '../style/bootstrap5/css/bootstrap.min.css';
import '../style/bulma/css/bulma.min.css';
import { RangeDatePicker } from 'react-google-flight-datepicker';
import 'react-google-flight-datepicker/dist/main.css';


// google spread-sheet


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
    Xenter,
    DropdownStyle,
    DatePicker,
    RadioButton,
    TextInputStyle,
    AreaTextInputStyle,
    CheckboxStyle,
} from './mainComponent';

import {GoogleSpreadsheet} from 'google-spreadsheet';

import verify from '../img/illustate/verify.svg';


export const toptoptop=()=>{
    scroll.scrollToTop( {duration:0,smooth:'easeOutQuad'})
}


const {promisify} = require('util');

const Formmmx =()=>{
    let history = useHistory();
    // function area
    let [LineOpen,SetLineOpen] = useState(true);
    let [FacebookOpen,SetFacebookOpen] = useState(true);
    let [EmailOpen,SetEmailOpen] = useState(true);
    


    // ------------->
    // prepair data
    const SendData=()=>{
        // async function test (){
        //     const creds = require('../uwuhouse-666e5ef074de.json'); // the file saved above
        //     const doc = new GoogleSpreadsheet('1YqWFJinXZOOhsoDos3fm_8IH7X8btfqeKw9rKKyLcT8');
        //     await doc.useServiceAccountAuth(creds);
        //     await doc.useServiceAccountAuth(creds, 'uwuhouse@uwuhouse.iam.gserviceaccount.com');
        //     await doc.loadInfo(); // loads document properties and worksheets
        //     const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]

        //     // const row={
        //     //     status:'---',
        //     //     name:'mon',
        //     //     contact:'1234',
        //     //     area:'baangkok',
        //     //     type:'condo',
        //     //     rental:'1',
        //     //     duration:'1',
        //     //     detailArea:'',
        //     //     dayToGetIn:'',
        //     //     people:'',
        //     //     vehicle:false,
        //     //     pet:false,
        //     //     otherDetail:''                
        //     // }
        //     const row =[1,3,2,4,5,7,8,9,0];
        //     // example using impersonation - NOTE: your service account must have "domain-wide delegation" enabled
        //     // see https://developers.google.com/identity/protocols/oauth2/service-account#delegatingauthority
           
        //     await sheet.addRow(row);
        // }
        // test();
        // async function addCustomerData(){
        //     const doc = new GoogleSpreadsheet('1YqWFJinXZOOhsoDos3fm_8IH7X8btfqeKw9rKKyLcT8');
        //     await promisify(doc.useServiceAccountAuth)(creds);
        //     const info = await promisify(doc.getInfo)();
        //     const sheet = info.worksheets[0];
            
        //     const row ={
        //         name:'monx',
        //         contact:'0840926156'
        //     }
        //     await promisify(sheet.addRow)(row);
        //     console.log(row);
        // }
        // addCustomerData();
        
        // let BangkokCheckbox = document.getElementById('BangkokCheckboxID').value;
        // let NonthaburiCheckbox =document.getElementById('NonthaburiCheckboxID').value;
        // let PathumthaniCheckbox =document.getElementById('PathumthaniCheckboxID').value;
        // let UdonthaniCheckbox =document.getElementById('UdonthaniCheckboxID').value;
        // let OtherArea = document.getElementById('OtherAreaID').value;
        // let HouseTypeCheckbox = document.getElementById('HouseTypeCheckboxID').value;
        // let CondoTypeCheckbox = document.getElementById('CondoTypeCheckboxID').value;
        // let ApartmentTypeCheckbox=document.getElementById('ApartmentTypeCheckboxID').value;
        // let OtherType = document.getElementById('OtherTypeID').value;
        // let RentalFeePerMonth = document.getElementById('RentalFeePerMonthID').value;
        // let Duration = document.getElementById('Duration').value;
        // let DetailAreax = document.getElementById('DetailAreaxID').value;
        // let datepicker =document.getElementById('datepickerID').value;
        // let HowManyPeopleInHouse = document.getElementById('HowManyPeopleInHouseID').value;
        // let HaveVehcle = document.getElementById('HaveVehcleID').value;
        // let DontHaveVehcle = document.getElementById('DontHaveVehcleID').value;
        // let DontHavePet = document.getElementById('DontHavePetID').value;
        // let DogPet =document.getElementById('DogPetID').value;
        // let CatPet =document.getElementById('CatPetID').value;
        // let WingPet =document.getElementById('WingPetID').value;
        // let AnacondaPet =document.getElementById('AnacondaPetID').value;
        // let DinosourPet = document.getElementById('DinosourPetID').value;
        // let OtherPet = document.getElementById('OtherPetID').value;
        // let OtherDetail = document.getElementById('OtherDetailID').value;
        // let CustomerName = document.getElementById('CustomerNameID').value;
        // let PhoneNumber = document.getElementById('PhoneNumberID').value;
        // let Linex = document.getElementById('LineIDx').value;
        // let facebookx = document.getElementById('facebookIDx').value;
        // let Emailx = document.getElementById('EmailIDx').value;
        // let OtherContact = document.getElementById('OtherContactID').value;



        // let BangkokCheckbox = document.getElementById('BangkokCheckboxID').value,
        //  NonthaburiCheckbox =document.getElementById('NonthaburiCheckboxID').value,
        //  PathumthaniCheckbox =document.getElementById('PathumthaniCheckboxID').value,
        //  UdonthaniCheckbox =document.getElementById('UdonthaniCheckboxID').value,
        //  OtherArea = document.getElementById('OtherAreaID').value,
        //  HouseTypeCheckbox = document.getElementById('HouseTypeCheckboxID').value,
        //  CondoTypeCheckbox = document.getElementById('CondoTypeCheckboxID').value,
        //  ApartmentTypeCheckbox=document.getElementById('ApartmentTypeCheckboxID').value,
        //  OtherType = document.getElementById('OtherTypeID').value,
        //  RentalFeePerMonth = document.getElementById('RentalFeePerMonthID').value,
        //  Duration = document.getElementById('Duration').value,
        //  DetailAreax = document.getElementById('DetailAreaxID').value,
        //  datepicker =document.getElementById('datepickerID').value,
        //  HowManyPeopleInHouse = document.getElementById('HowManyPeopleInHouseID').value,
        //  HaveVehcle = document.getElementById('HaveVehcleID').value,
        //  DontHaveVehcle = document.getElementById('DontHaveVehcleID').value,
        //  DontHavePet = document.getElementById('DontHavePetID').value,
        //  DogPet =document.getElementById('DogPetID').value,
        //  CatPet =document.getElementById('CatPetID').value,
        //  WingPet =document.getElementById('WingPetID').value,
        //  AnacondaPet =document.getElementById('AnacondaPetID').value,
        //  DinosourPet = document.getElementById('DinosourPetID').value,
        //  OtherPet = document.getElementById('OtherPetID').value,
        //  OtherDetail = document.getElementById('OtherDetailID').value,
        //  CustomerName = document.getElementById('CustomerNameID').value,
        //  PhoneNumber = document.getElementById('PhoneNumberID').value,
        //  Linex = document.getElementById('LineIDx').value,
        //  facebookx = document.getElementById('facebookIDx').value,
        //  Emailx = document.getElementById('EmailIDx').value,
        //  OtherContact = document.getElementById('OtherContactID').value;
        // }


        // let BangkokCheckbox = document.getElementById('BangkokCheckboxID').checked,
        //  NonthaburiCheckbox =document.getElementById('NonthaburiCheckboxID').checked,
        //  PathumthaniCheckbox =document.getElementById('PathumthaniCheckboxID').checked,
        //  UdonthaniCheckbox =document.getElementById('UdonthaniCheckboxID').checked,
        //  OtherArea = document.getElementById('OtherAreaID').value,
        //  HouseTypeCheckbox = document.getElementById('HouseTypeCheckboxID').checked,
        //  CondoTypeCheckbox = document.getElementById('CondoTypeCheckboxID').checked,
        //  ApartmentTypeCheckbox=document.getElementById('ApartmentTypeCheckboxID').checked,
        //  OtherType = document.getElementById('OtherTypeID').value,
        //  RentalFeePerMonth = document.getElementById('RentalFeePerMonthID').value,
        //  Duration = document.getElementById('Duration').value,
        //  DetailAreax = document.getElementById('DetailAreaxID').value,
        //  datepicker =document.getElementById('datepickerID').value,
        //  HowManyPeopleInHouse = document.getElementById('HowManyPeopleInHouseID').value,
        //  HaveVehcle = document.getElementById('HaveVehcleID').value,
        //  DontHaveVehcle = document.getElementById('DontHaveVehcleID').value,
        //  DontHavePet = document.getElementById('DontHavePetID').checked,
        //  DogPet =document.getElementById('DogPetID').checked,
        //  CatPet =document.getElementById('CatPetID').checked,
        //  WingPet =document.getElementById('WingPetID').checked,
        //  AnacondaPet =document.getElementById('AnacondaPetID').checked,
        //  DinosourPet = document.getElementById('DinosourPetID').checked,
        //  OtherPet = document.getElementById('OtherPetID').value,
        //  OtherDetail = document.getElementById('OtherDetailID').value,
        //  CustomerName = document.getElementById('CustomerNameID').value,
        //  PhoneNumber = document.getElementById('PhoneNumberID').value,
        //  Linex = document.getElementById('LineIDx').value,
        //  facebookx = document.getElementById('facebookIDx').value,
        //  Emailx = document.getElementById('EmailIDx').value,
        //  OtherContact = document.getElementById('OtherContactID').value;

        // console.log(Duration);
        // let infomationGet ={
        //     BangkokCheckbox:null,
        //     NonthaburiCheckbox:null,
        //     PathumthaniCheckbox:null,
        //     UdonthaniCheckbox:null,
        //     OtherArea:null,
        //     HouseTypeCheckbox:null,
        //     CondoTypeCheckbox:null,
        //     ApartmentTypeCheckbox:null,
        //     OtherType:null,
        //     RentalFeePerMonth:null,
        //     Duration:null,
        //     DetailAreax: null,
        //     datepicker:null,
        //     HowManyPeopleInHouse:null,
        //     HaveVehcle:null,
        //     DontHaveVehcle:null,
        //     DontHavePet:null,
        //     DogPet:null,
        //     CatPet:null,
        //     WingPet:null,
        //     AnacondaPet:null,
        //     DinosourPet:null,
        //     OtherPet:null,
        //     OtherDetail:null,
        //     CustomerName:null,
        //     PhoneNumber:null,
        //     Linex:null,
        //     facebookx:null,
        //     Emailx:null,
        //     OtherContact:null,
        // }
            let db_googoleSheet_UwUHouseCustomerData ={
                name:null,
                contact:null,
                area:null,
                typeOfHouse:null,
                budget:null,
                duration:null,
                detailAreaq:null,
                dayToGetIn:null,
                people:null,
                vehicle:null,
                pet:null,
                otherDetail:null,
                timestamp:null
            }
            let infomationGet ={
                BangkokCheckbox:document.getElementById('BangkokCheckboxID').checked,
                NonthaburiCheckbox:document.getElementById('NonthaburiCheckboxID').checked,
                PathumthaniCheckbox:document.getElementById('PathumthaniCheckboxID').checked,
                UdonthaniCheckbox:document.getElementById('UdonthaniCheckboxID').checked,
                OtherArea:document.getElementById('OtherAreaID').value,
                
                HouseTypeCheckbox:document.getElementById('HouseTypeCheckboxID').checked,
                CondoTypeCheckbox:document.getElementById('CondoTypeCheckboxID').checked,
                ApartmentTypeCheckbox:document.getElementById('ApartmentTypeCheckboxID').checked,
                OtherType:document.getElementById('OtherTypeID').value,
                
                RentalFeePerMonth:document.getElementById('RentalFeePerMonthID').value,
                
                Duration:document.getElementById('DurationID').value,
                
                DetailAreax: document.getElementById('DetailAreaxID').value,
                
                datepicker:document.getElementById('datepickerID').value,
                
                HowManyPeopleInHouse: document.getElementById('HowManyPeopleInHouseID').value,
                
                HaveVehcle: document.getElementById('HaveVehcleID').checked,
                DontHaveVehcle: document.getElementById('DontHaveVehcleID').checked,
                
                DontHavePet: document.getElementById('DontHavePetID').checked,
                DogPet:document.getElementById('DogPetID').checked,
                CatPet:document.getElementById('CatPetID').checked,
                WingPet:document.getElementById('WingPetID').checked,
                AnacondaPet:document.getElementById('AnacondaPetID').checked,
                DinosourPet:document.getElementById('DinosourPetID').checked,
                OtherPet:document.getElementById('OtherPetID').value,
                
                OtherDetail:document.getElementById('OtherDetailID').value,
                
                CustomerName:document.getElementById('CustomerNameID').value,
                
                PhoneNumber:document.getElementById('PhoneNumberID').value,
                Linex:document.getElementById('LineIDx').value,
                facebookx:document.getElementById('facebookIDx').value,
                Emailx:document.getElementById('EmailIDx').value,
                OtherContact:document.getElementById('OtherContactID').value
            }
                    
            // prepair data
            
            
            // condition check infomation
            // let conditionValidation ={
            //     NameCheck:(infomationGet.CustomerName != ''),
            //     ContactCheck:(infomationGet.PhoneNumber !=''),
            //     AreaCheck:( infomationGet.BangkokCheckbox || 
            //                 infomationGet.NonthaburiCheckbox ||
            //                 infomationGet.PathumthaniCheckbox ||
            //                 infomationGet.UdonthaniCheckbox ||
            //                 infomationGet.OtherArea != ''
            //     ),
            //     TypeOfHouseCheck:(  infomationGet.HouseTypeCheckbox ||
            //                         infomationGet.CondoTypeCheckbox ||
            //                         infomationGet.ApartmentTypeCheckbox ||
            //                         infomationGet.OtherType != ''
            //         ),
            //     RentalCheck:(infomationGet.RentalFeePerMonth != ''),
            //     DurationCheck:(infomationGet.Duration != '---'),
            //     DetailAreaCheck:(infomationGet.DetailAreax != ''),
            //     DayToGetInCheck:(infomationGet.datepicker != ''),
            //     PeopleCheck:(infomationGet.HowManyPeopleInHouse != '---'),
            //     VehicleCheck:(infomationGet.HaveVehcle || infomationGet.DontHaveVehcle),
            //     PetCheck:(
            //         infomationGet.DontHavePet ||
            //         infomationGet.DogPet ||
            //         infomationGet.CatPet ||
            //         infomationGet.WingPet ||
            //         infomationGet.AnacondaPet ||
            //         infomationGet.DinosourPet ||
            //         infomationGet.OtherPet != ''
            //     ),
            // }
            let conditionValidation ={
                AreaCheck:( infomationGet.BangkokCheckbox || 
                            infomationGet.NonthaburiCheckbox ||
                            infomationGet.PathumthaniCheckbox ||
                            infomationGet.UdonthaniCheckbox ||
                            infomationGet.OtherArea != ''
                ),
                TypeOfHouseCheck:(  infomationGet.HouseTypeCheckbox ||
                                    infomationGet.CondoTypeCheckbox ||
                                    infomationGet.ApartmentTypeCheckbox ||
                                    infomationGet.OtherType != ''
                    ),
                RentalCheck:(infomationGet.RentalFeePerMonth != ''),
                DurationCheck:(infomationGet.Duration != '---'),
                DetailAreaCheck:(infomationGet.DetailAreax != ''),
                DayToGetInCheck:(infomationGet.datepicker != ''),
                PeopleCheck:(infomationGet.HowManyPeopleInHouse != '---'),
                VehicleCheck:(infomationGet.HaveVehcle || infomationGet.DontHaveVehcle),
                PetCheck:(
                    infomationGet.DontHavePet ||
                    infomationGet.DogPet ||
                    infomationGet.CatPet ||
                    infomationGet.WingPet ||
                    infomationGet.AnacondaPet ||
                    infomationGet.DinosourPet ||
                    infomationGet.OtherPet != ''
                ),
                NameCheck:(infomationGet.CustomerName != ''),
                ContactCheck:(infomationGet.PhoneNumber !=''),
            }
            let numxxdxdc =[750,1080,1400,1630,1860,2150,2350,2550,2830,3700,4100];
            let getalertTextInvalid =[];
            let asdasdasdqwedgsertjer =[];

            let alertTextInvalid =[
                ' บริเวณพื้นที่ ที่ท่านต้องการเช่า ',
                ' ประเภทที่อยู่อาศัยที่ท่านต้องการ ',
                ' ค่าเช่าที่ท่านต้องการ ',
                ' ระยะเวลาที่ท่านต้องการเช่า ',
                ' สถานที่ทำงาน หรือ สถานที่ที่ท่านต้องเดินทางเป็นประจำ ',
                ' วันที่ท่านต้องการย้ายเข้า ',
                ' จำนวนคนที่ท่านต้องการอยู่อาศัย ',
                ' คุณมียานพาหนะส่วนตัว หรือไม่ ? ',
                ' คุณมีสัตว์เลี้ยงไหม ? ',
                ' ชื่อผู้ใช้งาน ',
                ' เบอร์โทรศัพท์ ',
            ];

            if(
                (
                    conditionValidation.NameCheck &&
                    conditionValidation.ContactCheck &&
                    conditionValidation.AreaCheck &&
                    conditionValidation.TypeOfHouseCheck &&
                    conditionValidation.RentalCheck &&
                    conditionValidation.DurationCheck &&
                    conditionValidation.DetailAreaCheck &&
                    conditionValidation.DayToGetInCheck &&
                    conditionValidation.PeopleCheck &&
                    conditionValidation.VehicleCheck &&
                    conditionValidation.PeopleCheck 
                )==false
            ){
                for(const [key,value] of Object.entries(conditionValidation)){
                    if(!value){
                        getalertTextInvalid.push(alertTextInvalid[0])
                        asdasdasdqwedgsertjer.push(numxxdxdc[0])
                    }
                    alertTextInvalid.shift();
                    numxxdxdc.shift();
                }
            alert(`ลืมกรอกข้อมูลอะไรหรือเปล่านะ...\n ${getalertTextInvalid}`);

                scroll.scrollTo(asdasdasdqwedgsertjer[0],{
                
                delay:300,
                duration:0,
                smooth:'treaseOutQuadue',
                });
            }
            else if(
                conditionValidation.NameCheck &&
                conditionValidation.ContactCheck &&
                conditionValidation.AreaCheck &&
                conditionValidation.TypeOfHouseCheck &&
                conditionValidation.RentalCheck &&
                conditionValidation.DurationCheck &&
                conditionValidation.DetailAreaCheck &&
                conditionValidation.DayToGetInCheck &&
                conditionValidation.PeopleCheck &&
                conditionValidation.VehicleCheck &&
                conditionValidation.PeopleCheck 
            ){
                const prepairContact=()=>{
                    let contact = `Phone number: ${infomationGet.PhoneNumber},`;
                    if (infomationGet.Linex != ''){
                        contact = contact+`LinID: ${infomationGet.Linex},`
                    }
                    if(infomationGet.facebookx !=''){
                        contact = contact+`Facebook: ${infomationGet.facebookx},`
                    }
                    if(infomationGet.Emailx !=''){
                        contact = contact+`Email: ${infomationGet.Emailx},`
                    }
                    if(infomationGet.OtherContact !=''){
                        contact = contact+`Other: ${infomationGet.OtherContact},`
                    }
                    return(contact);
    
    
                }
                const prepairArea=()=>{
                    let Area ='';
                    if(infomationGet.BangkokCheckbox == true){
                        Area = Area + `Bangkok,`
                    }
                    if(infomationGet.NonthaburiCheckbox == true){
                        Area = Area +`Nonthaburi,`
                    }
                    if(infomationGet.PathumthaniCheckbox == true){
                        Area = Area +`Pathumthani,`
                    }
                    if(infomationGet.UdonthaniCheckbox == true){
                        Area = Area +`Udonthani,`
                    }
                    if(infomationGet.OtherArea !=''){
                        Area = Area +`Other: ${infomationGet.OtherArea}`
                    }
                    return(Area);
                }
                const prepairHouseType=()=>{
                    let houseType ='';
                    if(infomationGet.HouseTypeCheckbox == true){
                        houseType = houseType + `House,`
                    }
                    if(infomationGet.CondoTypeCheckbox == true){
                        houseType = houseType + `Condo,`
                    }
                    if(infomationGet.ApartmentTypeCheckbox == true){
                        houseType = houseType + `Apartment,`
                    }
                    if(infomationGet.OtherType !=''){
                        houseType = houseType +`Other: ${infomationGet.OtherType}`
                    }
    
                    return(houseType);
                }
                
                const prepairVehicle=()=>{
                    if(infomationGet.HaveVehcle == true){
                        return(infomationGet.HaveVehcle);
                    }
                    else if(infomationGet.DontHaveVehcle == true){
                        return(infomationGet.HaveVehcle);
                    }
                }
    
                const prepairPet=()=>{
                    let pet ='';
                    if(infomationGet.DontHavePet){
                        pet = pet + `No pet,`
                    }
                    if(infomationGet.DogPet){
                        pet = pet + `No pet,`
                    }
                    if(infomationGet.CatPet){
                        pet = pet + `No pet,`
                    }
                    if(infomationGet.WingPet){
                        pet = pet + `No pet,`
                    }
                    if(infomationGet.AnacondaPet){
                        pet = pet + `No pet,`
                    }
                    if(infomationGet.DinosourPet){
                        pet = pet + `No pet,`
                    }
                    if(infomationGet.OtherPet !=''){
                        pet = pet +`Other: ${infomationGet.OtherPet}`
                    }
    
                    return(pet);
    
                }
    
                
                
                        let getday = new Date().getDay();
                        let getmonth = new Date().getMonth();
                        let getdate = new Date().getDate();
                        let getyear = new Date().getFullYear();
                        
                        let gethour = new Date().getHours();
                        let getminute = new Date().getMinutes();
                        let getsecond = new Date().getSeconds();
                        
                        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                       
                        db_googoleSheet_UwUHouseCustomerData.timestamp=`${days[getday]}, ${months[getmonth]}/${getdate}/${getyear}, ${gethour}h ${getminute}m ${getsecond}s`;
                        db_googoleSheet_UwUHouseCustomerData.name = infomationGet.CustomerName;
                        db_googoleSheet_UwUHouseCustomerData.contact = prepairContact();
                        db_googoleSheet_UwUHouseCustomerData.area = prepairArea();
                        db_googoleSheet_UwUHouseCustomerData.typeOfHouse =prepairHouseType();
                        db_googoleSheet_UwUHouseCustomerData.budget = infomationGet.RentalFeePerMonth;
                        db_googoleSheet_UwUHouseCustomerData.duration = infomationGet.Duration;
                        db_googoleSheet_UwUHouseCustomerData.detailAreaq = infomationGet.DetailAreax;
                        db_googoleSheet_UwUHouseCustomerData.dayToGetIn = infomationGet.datepicker;
                        db_googoleSheet_UwUHouseCustomerData.people = infomationGet.HowManyPeopleInHouse;
                        db_googoleSheet_UwUHouseCustomerData.vehicle = prepairVehicle();
                        db_googoleSheet_UwUHouseCustomerData.pet = prepairPet();
                        db_googoleSheet_UwUHouseCustomerData.otherDetail = infomationGet.OtherDetail;
    
                async function savedata (){
                    const creds = require('../uwuhouse-666e5ef074de.json'); // the file saved above
                    const doc = new GoogleSpreadsheet('1YqWFJinXZOOhsoDos3fm_8IH7X8btfqeKw9rKKyLcT8');
                    await doc.useServiceAccountAuth(creds);
                    await doc.useServiceAccountAuth(creds, 'uwuhouse@uwuhouse.iam.gserviceaccount.com');
                    await doc.loadInfo(); // loads document properties and worksheets
                    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
    
                    // const row={
                    //     status:'---',
                    //     name:'mon',
                    //     contact:'1234',
                    //     area:'baangkok',
                    //     type:'condo',
                    //     rental:'1',
                    //     duration:'1',
                    //     detailArea:'',
                    //     dayToGetIn:'',
                    //     people:'',
                    //     vehicle:false,
                    //     pet:false,
                    //     otherDetail:''                
                    // }
                    const row =[
                        'Finding',
                        db_googoleSheet_UwUHouseCustomerData.name,
                        db_googoleSheet_UwUHouseCustomerData.contact,
                        db_googoleSheet_UwUHouseCustomerData.area,
                        db_googoleSheet_UwUHouseCustomerData.typeOfHouse,
                        db_googoleSheet_UwUHouseCustomerData.budget,
                        db_googoleSheet_UwUHouseCustomerData.duration,
                        db_googoleSheet_UwUHouseCustomerData.detailAreaq,
                        db_googoleSheet_UwUHouseCustomerData.dayToGetIn,
                        db_googoleSheet_UwUHouseCustomerData.people,
                        db_googoleSheet_UwUHouseCustomerData.vehicle,
                        db_googoleSheet_UwUHouseCustomerData.pet,
                        db_googoleSheet_UwUHouseCustomerData.otherDetail,
                        db_googoleSheet_UwUHouseCustomerData.timestamp
    
                    ];
                    // example using impersonation - NOTE: your service account must have "domain-wide delegation" enabled
                    // see https://developers.google.com/identity/protocols/oauth2/service-account#delegatingauthority
                
                    await sheet.addRow(row);
                }
                savedata();
                history.push("/formInfomation/thankyouandgoodLuckx");
                scroll.scrollToTop({duration:0,smooth:'easeOutQuad',}); 
            }
        }

        

    // ------------->
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
                <div>
                    บริเวณพื้นที่ ที่ท่านต้องการเช่า <span style={{color:"red"}}>*</span>
                </div>
            </DivQuestion>

            <DivAnswer>
            <Xenter >
                <CheckboxStyle type='checkbox' id='BangkokCheckboxID' />
                <label>&nbsp;กรุงเทพมหานคร</label>
            </Xenter>
            <Xenter >
                <CheckboxStyle type='checkbox' id='NonthaburiCheckboxID' />
                <label>&nbsp;นนทบุรี</label>
            </Xenter>
            <Xenter >
                <CheckboxStyle type='checkbox' id='PathumthaniCheckboxID' />
                <label>&nbsp;ปทุมธานี</label>
            </Xenter>
            <Xenter >
                <CheckboxStyle type='checkbox' id='UdonthaniCheckboxID' />
                <label>&nbsp;อุดรธานี</label>
            </Xenter>
            <br/>
            <Xenter >
                <TextInputStyle type='text' placeholder='อื่นๆ' id='OtherAreaID' />
            </Xenter>
            </DivAnswer>
            
        </Divpart>

        <Divpart>
            <DivQuestion>
                
                <div>
                    ประเภทที่อยู่อาศัยที่ท่านต้องการ <span style={{color:"red"}}>*</span>
                </div>
            </DivQuestion>

            <DivAnswer>
            <Xenter >
                <CheckboxStyle type='checkbox' id='HouseTypeCheckboxID' />
                <label>&nbsp;บ้าน</label>
            </Xenter>
            <Xenter >
                <CheckboxStyle type='checkbox' id='CondoTypeCheckboxID'/>
                <label>&nbsp;คอนโด</label>
            </Xenter>
            <Xenter >
                <CheckboxStyle type='checkbox' id='ApartmentTypeCheckboxID'/>
                <label>&nbsp;หอพัก</label>
            </Xenter>
            
            <br/>
            <Xenter >
                <TextInputStyle type='text' placeholder='อื่นๆ' id='OtherTypeID'/>
            </Xenter>
            </DivAnswer>
        </Divpart>

        <Divpart>
            <DivQuestion>
                
                <div>
                    ค่าเช่าที่ท่านต้องการ <span style={{color:"red"}}>*</span>
                </div>
                <DivDescripQuestion>( บาท/เดือน )</DivDescripQuestion>
            </DivQuestion>

            <DivAnswer>
            <Xenter >
                <TextInputStyle type='number' placeholder='บาท/เดือน' id='RentalFeePerMonthID'/>
            {/* {InputFormx.TextInput('บาท/เดือน')} */}
            </Xenter>
            
           
            </DivAnswer>
        </Divpart>
        
        <Divpart>
            <DivQuestion>
                 
                <div>
                ระยะเวลาที่ท่านต้องการเช่า <span style={{color:"red"}}>*</span>
                </div>
                <DivDescripQuestion>( โดยประมาณ )</DivDescripQuestion>

            </DivQuestion>

            <DivAnswer>
            <Xenter>
                <DropdownStyle id='DurationID' >
                    <option>---</option>
                    <option>น้อยกว่า 1 ปี</option>
                    <option>1 ปี</option>
                    <option>2 ปี</option>
                    <option>3 ปี</option>
                    <option>4 ปี</option>
                    <option>5 ปี</option>
                    <option>5 ปีขึ้นไป</option>
                </DropdownStyle>
            </Xenter> 
           
            </DivAnswer>
        </Divpart>

        <Divpart>
            <DivQuestion>
            
                <div>
                    สถานที่ทำงาน หรือ สถานที่ที่ท่านต้องเดินทางเป็นประจำ <span style={{color:"red"}}>*</span>
                </div>
                <DivDescripQuestion>( เพื่อที่เราจะได้ค้นหาที่พักปล่อยเช่าให้ท่านสามารถเดินทาง และ ใช้ชีวิตประจำวันได้สะดวกยิ่งขึ้น )</DivDescripQuestion>

            </DivQuestion>

            <DivAnswer>
                {/* {InputFormx.AreaTextInput(' เช่น ชื่อที่ทำงาน, ชื่อโรงเรียน, ชื่อมหาวิทยาลัย หรือ ชื่อบริเวณใกล้เคียง  ')} */}
                <AreaTextInputStyle rows='5' placeholder=' เช่น ชื่อที่ทำงาน, ชื่อโรงเรียน, ชื่อมหาวิทยาลัย หรือ ชื่อบริเวณใกล้เคียง  ' id='DetailAreaxID'/>
            </DivAnswer>
        </Divpart>

        <Divpart>
        <DivQuestion>
            
            <div>
                วันที่ท่านต้องการย้ายเข้า <span style={{color:"red"}}>*</span>
            </div>
        </DivQuestion>
        <DivAnswer>         
               <DatePicker type="date" id='datepickerID' />
        </DivAnswer>
        </Divpart>
        <Divpart>
            <DivQuestion>
            <div>
            จำนวนคนที่ท่านต้องการอยู่อาศัย <span style={{color:"red"}}>*</span>
            </div>
              
                <DivDescripQuestion>( เพื่อเลือกขนาดที่พักให้เหมาะสมกับท่าน ) </DivDescripQuestion>

            </DivQuestion>

            <DivAnswer>
            <Xenter>
                <DropdownStyle id='HowManyPeopleInHouseID'>
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
                </DropdownStyle>
            </Xenter> 
           
            </DivAnswer>
        </Divpart>
        <form>
        <Divpart>
            <DivQuestion>
            
            <div>
            คุณมียานพาหนะส่วนตัว หรือไม่ ? <span style={{color:"red"}}>*</span>
            </div>

            </DivQuestion>

            <DivAnswer>
            {/* <div class="form-check">
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
                </div> */}
                <Xenter>
                    <RadioButton type='radio' name="exampleRadios" id='HaveVehcleID'/>
                    &nbsp;
                    <label class="form-check-label" for="Radios1">มี</label>
                </Xenter>
                <Xenter>
                    <RadioButton type='radio' name="exampleRadios" id='DontHaveVehcleID'/>
                    &nbsp;
                    <label class="form-check-label" for="Radios1">ไม่มี</label>
                </Xenter>
            </DivAnswer>
        </Divpart>
        </form>
       
        <Divpart>
            <DivQuestion>
            
            <div>
            คุณมีสัตว์เลี้ยงไหม ? <span style={{color:"red"}}>*</span>
            </div>
            </DivQuestion>

            <DivAnswer>
            {/* <div className="form-check marginx">
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
           

            <input type="text" class="form-control marginx"  placeholder="อื่นๆ"/> */}

            <Xenter >
                <CheckboxStyle type='checkbox' id='DontHavePetID'/>
                <label>&nbsp;ไม่มี</label>
            </Xenter>
            <Xenter >
                <CheckboxStyle type='checkbox' id='DogPetID'/>
                <label>&nbsp;สุนัข</label>
            </Xenter>
            <Xenter >
                <CheckboxStyle type='checkbox' id='CatPetID'/>
                <label>&nbsp;แมว ( น้องงง )</label>
            </Xenter>
            <Xenter >
                <CheckboxStyle type='checkbox' id='WingPetID'/>
                <label>&nbsp;สัตว์ปีก</label>
            </Xenter>
            <Xenter >
                <CheckboxStyle type='checkbox' id='AnacondaPetID'/>
                <label>&nbsp;อนาคอนด้า</label>
            </Xenter>
            <Xenter >
                <CheckboxStyle type='checkbox' id='DinosourPetID'/>
                <label>&nbsp;ไดโนเสาร์</label>
            </Xenter>
            
            <br/>
            <Xenter >
                
                <TextInputStyle type='text' placeholder='อื่นๆ' id='OtherPetID'/>
                {/* {InputFormx.TextInput("อื่นๆ")} */}
            </Xenter>
            </DivAnswer>
        </Divpart>

        <Divpart>
            <DivQuestion>
            รายละเอียดเพิ่มเติม

            </DivQuestion>

            <DivAnswer>
            
                
                    {/* {InputFormx.AreaTextInput()} */}
                    <AreaTextInputStyle rows='5' id='OtherDetailID'/>
           
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
                
                
               <label>ชื่อผู้ใช้งาน <span style={{color:"red"}}>*</span></label> 
            
    
                </DivQuestion>

                <DivAnswer>
                    <Xenter >
                        <TextInputStyle type='text' placeholder='ชื่อหรือนามแฝง' id='CustomerNameID'/>
                        {/* {InputFormx.TextInput("ชื่อหรือนามแฝง")} */}
                    </Xenter>
            
                </DivAnswer>
            </Divpart>
        

        <Divpart>
                <DivQuestion>
                คุณสะดวกให้เราติดต่อกลับทางใด

                </DivQuestion>

                <DivAnswer>
                    {/* <div className="form-check marginx">
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
                    </div> */}

                    <Xenter >
                        <label>เบอร์โทรศัพท์&nbsp;</label><span style={{color:"red"}}>*</span>
                       
                    </Xenter>
                    <Xenter >
                        <TextInputStyle type='text' placeholder='เบอร์โทรศัพท์' id='PhoneNumberID'/>
                        {/* {InputFormx.TextInput('เบอร์โทรศัพท์')} */}
                    </Xenter>
                    <br/>

                    <Xenter >
                        <CheckboxStyle type='checkbox' onChange={()=>{
                            SetLineOpen(!LineOpen);
                            document.getElementById('LineIDx').value = '';
                            
                            }}/>&nbsp;
                        <label>Line</label>
                    </Xenter>
                    <Xenter >
                        <TextInputStyle type='text' placeholder='Line ID' id='LineIDx' lock={LineOpen} disabled={LineOpen} />
                        {/* {InputFormx.TextInput('Line ID')} */}
                    </Xenter>
                    <br/>

                    <Xenter >
                        <CheckboxStyle type='checkbox' onChange={()=>{
                            SetFacebookOpen(!FacebookOpen);
                            document.getElementById('facebookIDx').value = '';
                            }}/>&nbsp;
                        <label>Facebook</label>
                    </Xenter>
                    <Xenter >
                        <TextInputStyle type='text' placeholder='ชื่อบัญชี Facebook' id='facebookIDx' lock={FacebookOpen} disabled={FacebookOpen}/>
                        {/* {InputFormx.TextInput('Facebook account')} */}
                    </Xenter>
                    <br/>

                    <Xenter >
                        <CheckboxStyle type='checkbox' onChange={()=>{
                            SetEmailOpen(!EmailOpen);
                            document.getElementById('EmailIDx').value = '';
                            }}/>&nbsp;
                        <label>E-mail</label>
                    </Xenter>
                    <Xenter >
                        <TextInputStyle type='email' placeholder='your_email@email.com' id='EmailIDx' lock={EmailOpen} disabled={EmailOpen}/>
                        {/* {InputFormx.TextInput('Email address')} */}
                    </Xenter>
                    <br/>


                    <Xenter >
                        <label>อื่นๆ</label>
                    </Xenter>
                    <Xenter >
                        <TextInputStyle type='text' id='OtherContactID'/>
                        {/* {InputFormx.TextInput()} */}
                    </Xenter>
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
                        <div onClick={SendData}><Buttonxone   widthhh='100' FontSize='18' FontWeight='300' colorrr={colorx.blackM} Textx='ยืนยัน' /></div>
                        <div onClick={()=>scroll.scrollTo(750, {duration:0,smooth:'easeOutQuad'})}>
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