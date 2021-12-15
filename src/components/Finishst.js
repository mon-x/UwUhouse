import styled from 'styled-components';
import colorx from '../style/colorx';

export const FisichContainer = styled.div`
    display:flex;
    height:100vh;
    @media screen and (max-height:800px){
        height:auto;
    }
`

export const TextHead = styled.div`
    display:flex;
    font-size:40px;
    color:${colorx.blackM};
    font-family:'Mitr',sans-serif;
    font-weight:300;
    margin:40px 0px 40px 0px;
    align-items:center;
    justify-content:center;
    line-height:120%;
    
    @media screen and (max-width:500px){
 
        font-size:30px;
        padding-left:20px;
        justify-content:flex-start;
    }
    
` 
export const TextSub = styled.div`
    display:flex;
    flex-direction:column;
    font-size:16px;
    color:${colorx.blueM};
    font-family:'Mitr',sans-serif;
    font-weight:300;
    line-height:180%;
    
    margin-bottom:50px;
    max-width: 600px;
    @media screen and (max-width:500px){
        line-height:150%;
        font-size:18px;
        margin:0px 3vw 50px 3vw;
        
    }
`