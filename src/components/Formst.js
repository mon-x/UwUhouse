import styled from 'styled-components';

// import colorx
import colorx from '../style/colorx';

// import bulma
import '../style/bulma/css/bulma.min.css';

export const FormHeader = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:650px;
    background:${colorx.yellowM};
    flex-direction:column;
    border-radius:0px 0px 50px 0px;
    @media screen and (max-width:600px){
        align-items:flex-start;
        font-size:20px;
    }
`
export const DivHeader = styled.div`
    margin-top:100px;
    @media screen and (max-width:600px){
        flex-direction:column;
        align-items:flex-start;
        margin-left:auto;
        margin-right:auto;
    }

`
export const TextFormHeader = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:50px;
    color:${colorx.whiteM};
    font-family:'Mitr',sans-serif;
    font-weight:500;
    line-height:120%;

    padding:0px 3vw 10px 3vw;
   
    @media screen and (max-width:1200px){
        font-size:40px;
    }
    @media screen and (max-width:1000px){
        font-size:35px;
    }
    @media screen and (max-width:830px){
        flex-direction:column;
        align-items:flex-start;
    }
    @media screen and (max-width:350px){
        font-size:30px;
    }

`
export const TextHeadForm = styled.div`
    display:flex;
    align-items:flex-end;
    justify-content:center;
    width:100%;
    height:100px;
    
    font-size:30px;
    font-family:'Mitr',sans-serif;
    font-weight:300;
    color:${colorx.blackM};
    margin:0px 0px 50px 0px;

    @media screen and (max-width:320px){
        font-size:25px;
    }
`
export const HashtagForm = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:20px;
    color:${colorx.blueM};
    font-family:'Mitr',sans-serif;
    font-weight:400;
    line-height:120%;
    letter-spacing:1.5px;
    
    margin:20px 0px 0px 0px ;
    padding:0px 3vw 0px 3vw;

   
    @media screen and (max-width:600px){
        flex-direction:column;
        align-items:flex-start;
        font-size:20px;
    }
`

// main fill part



export const FormContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    margin:${props => props.second ? '0px 0px 75px 0px':'150px 0px 75px 0px'};
    background:${colorx.whiteM};
    
`

export  const DivForm = styled.div`
    display:flex;
    width:750px;
    background: #FFFFFF;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    flex-direction:column;
    padding:0px 0px 50px 0px;
    @media screen and (max-width:800px){
        width:100%;
    }
`

export  const Divpart = styled.div`
    display:flex;
    flex-direction:column;
    padding:25px 5vw 0px 5vw;
    width:100%;

    

`

export  const DivQuestion = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    margin:20px 0px 0px 0px;


    font-family:'Mitr',sans-serif;
    font-size:20px;
    font-weight:400;
    color:${colorx.blueM};


`
export  const DivDescripQuestion = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    margin:10px 5vw 0px 5vw;

    font-family:'Mitr',sans-serif;
    font-size:16px;
    font-weight:300;
    color:${colorx.grayM};
`

// answer


export  const DivAnswer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width:100%;
    margin:20px 0px 20px 0px;

    font-family:'Mitr',sans-serif;
    font-size:18px;
    font-weight:300;
    color:${colorx.grayM};

    

`

export const Labelx = styled.label`
    display:flex;
    align-items:center;
    
`


// verify
export const Textverivy = styled.div`
    display:block;
    align-items:center;
    justify-content:center;
    font-size:30px;
    font-family:'Mitr',sans-serif;
    line-height:150%;
    padding:20px 0px 20px 0px;
    color:${props => props.dark ? colorx.blueM : colorx.whiteM };


    transition: all 300ms ease-in-out;
    @media screen and (max-width:1250px){
        font-size:25px;
    }
    @media screen and (max-width:350px){
        font-size:20px;
    }
`