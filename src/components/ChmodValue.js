import React, {Component} from 'react';

export default class ChmodValue extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"chmod"}>
                <h1>{this.props.chmod}</h1>
                <h1>{this.props.chmodString}</h1>
            </div>
        );
    }
}
