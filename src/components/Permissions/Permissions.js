import React, {Component} from 'react';
import {Checkbox} from '@atlaskit/checkbox';
import "./Permissions.css"
import ChmodValue from "../ChmodValue/ChmodValue";

const options = ["Read", "Write", "Execute"];
const extra = ["Sticky", "SGID", "SUID"];

export default class Permissions extends Component {

    state = {
        value: {
            userRead: false,
            userWrite: false,
            userExecute: false,
            groupRead: false,
            groupWrite: false,
            groupExecute: false,
            otherRead: false,
            otherWrite: false,
            otherExecute: false,
            extraSUID: false,
            extraSGID: false,
            extraSticky: false
        }
    }
    
    render() {

        function calculateChmod(value) {
            let ex = calculateOctal(value, "extra");
            let usr = calculateOctal(value, "user");
            let gr = calculateOctal(value, "group");
            let oth = calculateOctal(value, "other");
            let str = "";
            return str.concat(ex, usr, gr, oth);

        }
        function calculateChmodString(value) {
            //console.log(value)
            let usr = calculateString(value, "user");
            let gr = calculateString(value, "group");
            let oth = calculateString(value, "other");
            let str = "";
            return str.concat(usr, gr, oth);
        }

        return (
            <div>
                <div className="row">
                        <div>
                            <h3>User</h3>
                            {options.map((opt) =>
                            <Checkbox key={"user"+opt} value={"user"+opt} label={opt} onChange={this.onChange}/>)}
                        </div>
                        <div>
                            <h3>Group</h3>
                            {options.map((opt) =>
                            <Checkbox key={"group"+opt} value={"group"+opt} label={opt} onChange={this.onChange}/>)}
                        </div>
                        <div>
                            <h3>Others</h3>
                            {options.map((opt) =>
                            <Checkbox key={"other"+opt} value={"other"+opt} label={opt} onChange={this.onChange}/>)}
                        </div>
                        <div>
                            <h3>Extra</h3>
                            {extra.map((opt) =>
                            <Checkbox key={"extra"+opt} value={"extra"+opt} label={opt} onChange={this.onChange}/>)}
                        </div>
                </div>
                <div className="row">
                    <ChmodValue
                        chmod={calculateChmod(this.state.value)}
                        chmodString={calculateChmodString(this.state.value)}
                    />
                </div>
            </div>
        );
    }

    onChange = (event) => {
        let val = Object.assign({}, this.state.value);

        if(val[event.target.value] === true){
            val[event.target.value] = false;
        } else {
            val[event.target.value] = true;
        }
        this.setState({
            value: val
        })

    }
}

function calculateOctal(obj, refer){
    let count = 0;
    if(obj[refer + "Read"] === true) { count += 1; }
    if(obj[refer + "Write"] === true) { count += 2; }
    if(obj[refer + "Execute"] === true) { count += 4; }
    if(obj[refer + "Sticky"] === true) { count += 1; }
    if(obj[refer + "SGID"] === true) { count += 2; }
    if(obj[refer + "SUID"] === true) { count += 4; }
    return count;
}

function calculateString(obj, refer){
    let string;
    string = "---".split("");
    if(obj[refer + "Read"] === true) { string[0] = "r"; }
    if(obj[refer + "Write"] === true) { string[1] = "w"; }
    if(obj[refer + "Execute"] === true) { string[2] = "x"; }
    return string.join("");
}
