import React, { Component } from "react";
import Search from './Search';
// import Saved from './Saved';

class Main extends Component {
    render() {
        return (
                <div className="row">
                    <Search />
                    {/* <Saved /> */}
                </div> 
        );
    }
}

export default Main;