import React, { Component } from "react";
import Search from './Search';
// import Saved from './Saved';

class Main extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <Search />
                </div>
                {/* <div className="row">
                    <Saved />
                </div> */}
            </div>
        );
    }
}

export default Main;