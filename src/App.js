import React from 'react';
import './App.css';
import Permissions from "./components/Permissions";

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Permissions />
            </div>
        );
    }
}
