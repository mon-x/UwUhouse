import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colorx from '../style/colorx';
import '../style/index.css';

// console log
export default function Consolex(){
    console.clear();
    console.log("%cGET OUT! #This is a WARNING !  ⚠️ ", "color: red; font-family: sans-serif; font-size: 40px; font-weight: bolder; text-shadow: rgb(50,50,50) 2px 1px;");
    console.log('');
    console.log('');
    console.log("%c~$ What's Up ,What are you doing? █", "color:green;font-size:20px;font-weight:bold");
    console.log('%c─────█─▄▀█──█▀▄─█─────', "color:green;");
    console.log('%c────▐▌──────────▐▌────', "color:green;");
    console.log('%c────█▌▀▄──▄▄──▄▀▐█────', "color:green;");
    console.log('%c───▐██──▀▀──▀▀──██▌───', "color:green;");
    console.log('%c──▄████▄──▐▌──▄████▄──', "color:green;");
} 


export const Logox = (props)=>{
    const Logoxx = styled.h1`
    font-size:${props.FontSize}px;
    color:${props.colorrr};
    font-family:'Poppins', sans-serif;
    font-weight: ${props.FontWeight};
    cursor:pointer;
   
    z-index:899;

    -webkit-user-select: none;
        -webkit-touch-callout: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    
`
    return(
        
        <Logoxx >
            UwU<span style={{color:colorx.pinkM}} >House</span>
        </Logoxx>
        
    );
}
export const ButtonMains = styled.div`
        display:flex;
        justify-content:space-evenly;
        margin: 8px;
        border-radius:50px;
        padding: 10px 25px 8px 25px ;
        color:white;
        cursor:pointer;

    `
export const ButtonLogo = styled.div`
    max-height:20px;

`


export const ButtonxLogo = (props) => {

    const ButtonMainsLogo = styled(ButtonMains)`
        background:${props.colorrr};
        font-family:'Mitr',sans-serif;
        font-size:${props.FontSize}px;
        font-weight:${props.FontWeight};
        max-width:${props.widthhh}px;
        z-index:799;

        transition: all 130ms ease-in-out;
        -webkit-user-select: none;
        -webkit-touch-callout: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        @media screen and (max-width:370px){
            font-size:16px;
        }
        &:hover {
            // transform:rotate(-10deg);
           transform:scale(1.03)

        }
        &:hover img{
            transform:rotate(-5deg);
            transform-origin: bottom;
           

        }
    `
   
       

    return(
        <ButtonMainsLogo>
            <img src={props.ImgName} className='img-button-logo'/>   
            {props.Textx}     
        </ButtonMainsLogo>
    );
}
export const Buttonxone = (props) => {

    const ButtonMainsLogo = styled(ButtonMains)`
        background:${props.colorrr};
        font-family:'Mitr',sans-serif;
        font-size:${props.FontSize}px;
        font-weight:${props.FontWeight};
        max-width:${props.widthhh}px;
        z-index:799;

        -webkit-user-select: none;
        -webkit-touch-callout: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        @media screen and (max-width:370px){
            font-size:16px;
        }
        transition: all 130ms ease-in-out;
        }
        &:hover {
            // transform:rotate(-10deg);
        transform:scale(1.03)

        }

        
        
    `
   
       

    return(
        <ButtonMainsLogo> 
            {props.Textx}     
        </ButtonMainsLogo>
    );
}
export const TextLinks = (props)=>{
 const TextLink = styled.div`
        margin:20px;
        color:${props.colorlinkText};
        font-family:'Mitr',sans-serif;
        font-size:${props.FontSize}px;
        font-weight:${props.FontWeight};
        cursor:pointer;

        -webkit-user-select: none;
        -webkit-touch-callout: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    `
    return(
        <TextLink >
            เรียนรู้เพิ่มเติม
        </TextLink>
    );
}
export const TextLinksNoDot = (props)=>{
    const TextLink = styled.div`
           margin:20px;
           color:${props.colorlinkText};
           font-family:'Mitr',sans-serif;
           font-size:${props.FontSize}px;
           font-weight:${props.FontWeight};
           cursor:pointer;

           -webkit-user-select: none;
        -webkit-touch-callout: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
       `
       return(
           <TextLink>
               {props.Text} 
           </TextLink>
       );
   }
   

export const Xenter =styled.div`
   display:flex;
   align-items:center;
   width:100%;
   height:40px;
   font-weight:300;
`;
export const DropdownStyle =styled.select`
    border-radius:5px;
    padding:10px;
    background-color:transparent;
    color:${colorx.blackM};
    border:solid 1px ${colorx.gray2};
    font-family:'Mitr',sans-serif;
    font-weight:300;
    &:focus{
        border:solid 2px ${colorx.blackM};
    }           
`
export const DatePicker = styled.input`
    border-radius:5px;
    padding:10px;
    font-weight:300;
    font-family:'Mitr',sans-serif;
    background-color:transparent;
    border:solid 1px ${colorx.gray2};
    &:focus{
        border:solid 2px ${colorx.blackM};
    }       
`
export const RadioButton = styled.input`
    border:solid 1px ${colorx.gray2};
    font-family:'Mitr',sans-serif;
    font-weight:300;
    &:focus{
        border:solid 2px ${colorx.blackM};
    }       
`
export const TextInputStyle =styled.input`
            min-width:100%;
            height:40px;
            border-radius:5px;
            padding:10px;
            font-weight:300;
            font-family:'Mitr',sans-serif;
            color:${colorx.blackM};
            background-color:${props => props.lock ? colorx.gray2 : "transparent"};
            border:solid 1px ${props => props.errorx ? 'red' : colorx.gray2};
            &:focus{
                border:solid 2px ${colorx.blackM};
            }       
        `

        export  const AreaTextInputStyle =styled.textarea`
            min-width:100%;
            border-radius:5px;
            font-weight:300;
            padding:10px;
            font-family:'Mitr',sans-serif;
            color:${colorx.blackM};
            border:solid 1px ${colorx.gray2};
            &:focus{
                border:solid 2px ${colorx.blackM};
            }       
        `
       
    
    
        export  const CheckboxStyle =styled.input`
            margin-top:10px;
            margin-bottom:12px;
            width:18px;
            font-weight:300;
            height:18px;
            font-family:'Mitr',sans-serif;
            border:solid 1px ${colorx.gray2};
            &:focus{
                border:solid 2px ${colorx.blackM};
            }       
        `

       

    







