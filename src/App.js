import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Main, Header, mAdd, update } from './screens';

class App extends React.Component {
    render() {
        return (
            <div className="main">
                <Router>
                    <div className="header">
                        <Route path="/" component={Header}>
                            <Link to="/add">메뉴추가</Link>
                        </Route>
                    </div>
                    <div className="content">
                        <Route exact path="/update/:id" component={update} />
                        <Route exact path="/add" component={mAdd} />
                        <Route exact path="/" component={Main} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
