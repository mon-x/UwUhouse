import React from 'react';
import {
    BrowserRouter as Routerx,
    Switch,
    Route,
    useHistory,
}  from 'react-router-dom';


import HomePagex from './HomePage';
import Formx from './Formx';
import Finishx from './Finishx';
import Sorryx from './SorryPage';

const Appxr = props => {
    return (
        
        <Routerx>
            <>
                <Switch>
                    <Route path='/' exact component={HomePagex}/>
                    <Route path='/formInfomation' exact  component={Formx}/>
                    <Route path='/formInfomation/thankyouandgoodLuckx'  component={Finishx}/>
                    <Route path='/WeAreStillDevelopThifeature' exact component={Sorryx}/>
                </Switch>
            </>
        </Routerx>
        
    );
}

export default Appxr;
