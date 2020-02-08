import React from 'react';
import ReactDOM from 'react-dom';
import Fujiyama from './Fujiyama';
import { Paper } from './Paper';
import { PaperBox } from './PaperBox';
import { BrowserRouter, Route } from 'react-router-dom';



const App = () => {
    return (
        <BrowserRouter>
            <Route path='/fujiyama'><Fujiyama /></Route>
            <Route path='/paper'><Paper /></Route>
            <Route path='/boxpaper'><PaperBox /></Route>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))