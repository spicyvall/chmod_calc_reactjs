import React from 'react';
import './App.css';
import '@atlaskit/css-reset';
import Permissions from "./components/Permissions/Permissions";

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
