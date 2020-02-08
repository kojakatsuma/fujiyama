import React from 'react';
import ReactDOM from 'react-dom';
import Fujiyama from './Fujiyama';
import { Paper } from './Paper';
import { BrowserRouter, Route } from 'react-router-dom';



const App = () => {
    return (
        <BrowserRouter>
            <Route path='/fujiyama'><Fujiyama /></Route>
            <Route path='/paper'><Paper /></Route>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))