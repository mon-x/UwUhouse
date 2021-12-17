import styled from 'styled-components';
import colorx from '../style/colorx';

export const ContentContainer = styled.div`
    display:flex;
`

export const DivContentInsider = styled.div`
    display:flex;
    // padding:75px 0px 75px 0px;
    width:100%;
    align-items:center;
    justify-content:space-evenly;
    flex-direction:${props => props.reverse ? 'row-reverse':'row'};
    background:${props => props.dark ? colorx.blueM:colorx.whiteM};

    transition: all 300ms ease-in-out;
    @media screen and (max-width:1080px){
        flex-direction:column;
    }


   
    
`
export const ContentInsider = styled.div`
    display:flex;
    height:100%;
  
    
    align-items:center;
    justify-content:center;
   
   

    
`



// element styled
export const TextinsiderContent = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    justify-content:center;
    margin:75px 0px 75px 0px;
    padding:${props => props.reverse ? '0px 3vw 0px 0px' : '0px 0px 0px 3vw'};

    transition: all 300ms ease-in-out;
    @media screen and (max-width:1050px){
        padding:0px 3vw 0px 3vw;
    }
    
    

`

export const Hashtag = styled.div`
    font-size:18px;
    font-family:'Mitr',sans-serif;
    color:${props => props.yellow ? colorx.yellowM : colorx.pinkM };
`
export const TextMain = styled.div`
    display:block;
    align-items:center;
    justify-content:center;
    font-size:40px;
    font-family:'Mitr',sans-serif;
    line-height:120%;
    padding:20px 0px 20px 0px;
    color:${props => props.dark ? colorx.blueM : colorx.whiteM };


    transition: all 300ms ease-in-out;
    @media screen and (max-width:1250px){
        font-size:30px;
    }
    @media screen and (max-width:350px){
        font-size:28px;
    }
`
export const TextHow = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:30px;
    font-family:'Mitr',sans-serif;
    line-height:120%;
    padding:20px 0px 20px 0px;
    color:${props => props.dark ? colorx.blueM : colorx.whiteM };
    @media screen and (max-width:1080px){
        padding:50px 0px 20px 0px;
    }
    @media screen and (max-width:400px){
        font-size:20px;
    }
   
`

export const DivButtonContent = styled.div`
    display: flex;
    align-items:center;
    justify-content:flex-start;
    
    
   
`
export const ContentInsiderImg = styled.img`
    display:flex;
    align-items:center;
    justify-content:center;
    max-height:90%;
    margin:75px 0px 75px 0px;

    transition: all 300ms ease-in-out;
    @media screen and (max-width:1700px){
        max-width:75%;
        max-height:75%;
    }
    
    @media screen and (max-width:1050px){
        margin:0px 0px 75px 0px;
    }
`

export const ContentInsiderHow = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:75px 0px 75px 0px;

    @media screen and (max-width:1080px){
        margin:0px 0px 0px 0px;
    }

   
`
export const DivHow = styled.div`
    display:flex;
    font-size:20px;
    color:${colorx.blackM};
    font-family:'Mitr',sans-serif;
    font-weight:300;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    backdround:${colorx.whiteM};
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    
    margin:20px 0px 0px 0px ;
    width:120%;
    padding:20px 0px 20px 0px ;
    @media screen and (max-width:550px){
        width:120%;
    }
    @media screen and (max-width:330px){
        font-size:16px;
    }
    transition: all 130ms ease-in-out;
    &:hover {
        transform:scale(1.05)
    }

   
`

export const DivHowButton = styled.div`
    
    display:flex;
    align-items:center;
    justify-content:center;

    font-size:16px;
    
    margin:25px 0px 0px 0px;
    @media screen and (max-width:550px){
        flex-direction:column;
    }
`

