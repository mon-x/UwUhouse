import React from 'react';
import styled from 'styled-components';
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import colorx from '../style/colorx';

import thaiflag from '../img/icons/thaiflag .svg';
import {
    Logox,
} from './mainComponent';

const Footerstyled = styled.div`
    display:flex;
    margin-top:75px;    
    
    width:100%;
    background:${colorx.blueM};
    justify-content:space-between;
    align-items:center;
    font-size:12px;
    color:white;
    font-family:'Mitr',sans-serif;
    font-weight:300;
    padding:50px 10vw 30px 10vw;


    @media screen and (max-width:500px){
        flex-direction:column;
        align-items:flex-start;
    }

`



const Footerrr = () => {
    var getyearx = new Date().getFullYear();
    return (
        <>
            <Footerstyled >
                <div className='allrrs' >
                    <div onClick={()=>scroll.scrollToTop( {duration:0,smooth:'easeOutQuad'})}>
                        <Logox FontSize='25' FontWeight='500' colorrr={colorx.whiteM} />
                    </div>
                    © {getyearx} All rights reserved
                </div>
                <div className='footerrr'><img src={thaiflag} className='flag'/>Thailand</div>
            </Footerstyled>
            
        </>
    )
}

export default Footerrr
