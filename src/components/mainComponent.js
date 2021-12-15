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
            Mawroo<span style={{color:colorx.pinkM}} >.</span>
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
   






