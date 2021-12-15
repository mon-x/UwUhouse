import styled from 'styled-components';

// import colorx
import colorx from '../style/colorx';

export const Headerx = styled.div`

    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    padding-top:250px;
    width:100%;
    border-radius: 0px 0px 50px 0px;
    background:${colorx.blueM};
    // background:${colorx.whiteM};
    

    transition: all 300ms ease-in-out;
    @media screen and (max-width:770px){
        border-radius:0px;
    }
    @media screen and (max-width:370px){
        padding-top:150px;
    }
`

export const DivHeaderText = styled.div`


    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    height:65%;

    transition: all 300ms ease-in-out;
    margin:0px 0px 0px 15vw;
   
    @media screen and (max-width:1400px){
        margin:0px 0px 0px 10vw;
    }
    @media screen and (max-width:770px){
        margin:0px 0px 0px 5vw;
    }


`


export const HeaderText =(props)=>{

    const HeaderTextst = styled.div`
    color:${props.colorrr};
    font-size:${props => props.hashtag == 'none'? '20':'60'}px;
    font-family:'Mitr',sans-serif;
    font-weight:500;
    
    margin:0px 5vw 0px 0px ;
    line-height: 100%;
    margin-top:20px;

    transition: all 300ms ease-in-out;
    @media screen and (max-width:1500px){
        font-size:${props => props.hashtag == 'none' ? '20':'50'}px;
    }
    @media screen and (max-width:770px){
        font-size:${props => props.hashtag == 'none' ? '20':'40'}px;
        line-height:110%;
    }
    @media screen and (max-width:370px){
        font-size:${props => props.hashtag == 'none' ? '20':'30'}px;
        line-height:110%;
    }
    `
    return(
        <>
            <HeaderTextst hashtag={props.hashtag}>
                {props.texttt}
            </HeaderTextst>
        </>
    );
}


export const HeaderMenu = styled.div`

    display:block;

    margin:100px 0px 0px 15vw;
    padding:30px 0px 0px 0px ;
    width: 550px;
    height: 150px;
    background: rgba(255, 255, 255, 0.75);
    border-radius: 10px 10px 0px 0px;

    transition: all 300ms ease-in-out;
    @media screen and (max-width:770px){
        margin-left:auto;
        margin-right:auto;   
    }
    @media screen and (max-width:560px){
        
        margin-left:auto;
        margin-right:auto;  
        width:100%;
        height:auto;
        padding:30px 2vw 10vw 0px ;

    }
`

export const HeaderMenuText  = styled.div`
    display:flex;
    justify-content:center;
    font-family:'Mitr',sans-serif;
    font-size:18px;
    font-weight:300;
    color:${colorx.blackM};

    transition: all 300ms ease-in-out;
    @media screen and (max-width:560px){
        display:flex;
        justify-content:space-around;
        margin-left:10vw; 
        line-height:120%;
        margin-bottom:5vw;
    }
`
export const HeaderMenuButton = styled.div`
    display:flex;
    justify-content:center;
    margin:10px 0px 0px 0px;

    transition: all 300ms ease-in-out;
    @media screen and (max-width:560px){
        flex-direction:column;
        margin-left:10vw; 
        

    }
`