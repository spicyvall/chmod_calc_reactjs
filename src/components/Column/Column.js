import React, {Component} from 'react';
import {Checkbox} from "@atlaskit/checkbox";

class Column extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.column}</h3>
                {this.props.options.map((opt) =>
                    <Checkbox key={this.props.column + opt} value={this.props.column + opt}
                              label={opt} onChange={this.onChange}/>)}
            </div>
        );
    }
}

export default Column;