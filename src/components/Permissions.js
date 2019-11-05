import React, {Component} from 'react';
import {Checkbox} from '@atlaskit/checkbox';
import "../css/Permissions.css"
import ChmodValue from "./ChmodValue";

class Permissions extends Component {

    state = {
        value: {
            user_read: false,
            user_write: false,
            user_execute: false,
            group_read: false,
            group_write: false,
            group_execute: false,
            other_read: false,
            other_write: false,
            other_execute: false,
            extra_suid: false,
            extra_sgid: false,
            extra_sticky: false
        }
    }
    
    render() {

        function calculateChmod(value) {
            //console.log(value)
            let ex = calculateExtra(value)
            let usr = calculateUser(value)
            let gr = calculateGroup(value)
            let oth = calculateOther(value)
            let str = ""
            return str.concat(ex, usr, gr, oth)

        }
        function calculateChmodString(value) {
            //console.log(value)
            let usr = calculateUserString(value)
            let gr = calculateGroupString(value)
            let oth = calculateOtherString(value)
            let str = ""
            return str.concat(usr, gr, oth)
        }

        return (

            <div>

                <div className={"row"}>

                        <div className="user">

                            <h3>User</h3>
                            <Checkbox
                                value="user_read"
                                //value="1"
                                label="read"
                                onChange={this.onChange}
                            />
                            <Checkbox
                                value="user_write"
                                //value="2"
                                label="write"
                                onChange={this.onChange}
                            />
                            <Checkbox
                                value="user_execute"
                                //value="4"
                                label="execute"
                                onChange={this.onChange}
                            />
                        </div>

                        <div className="group">

                            <h3>Group</h3>
                            <Checkbox
                                value="group_read"
                                //value="1"
                                label="read"
                                onChange={this.onChange}
                            />
                            <Checkbox
                                value="group_write"
                                //value="2"
                                label="write"
                                onChange={this.onChange}
                            />
                            <Checkbox
                                value="group_execute"
                                //value="4"
                                label="execute"
                                onChange={this.onChange}
                            />
                        </div>

                        <div className="other">

                            <h3>Others</h3>
                            <Checkbox
                                value="other_read"
                                //value="1"
                                label="read"
                                onChange={this.onChange}
                            />
                            <Checkbox
                                value="other_write"
                                //value="2"
                                label="write"
                                onChange={this.onChange}
                            />
                            <Checkbox
                                value="other_execute"
                                //value="4"
                                label="execute"
                                onChange={this.onChange}
                            />
                        </div>

                        <div className="extra">

                            <h3>Extra</h3>
                            <Checkbox
                                value="extra_sticky"
                                //value="1"
                                label="Sticky"
                                onChange={this.onChange}
                                className="special"
                            />
                            <Checkbox
                                value="extra_sgid"
                                //value="2"
                                label="SGID"
                                onChange={this.onChange}
                                className="special"
                            />
                            <Checkbox
                                value="extra_suid"
                                //value="4"
                                label="SUID"
                                onChange={this.onChange}
                                className="special"
                            />

                        </div>

                </div>

                <div className={"row"}>

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

function calculateUser(obj){
    let count = 0;
    if(obj.user_read === true) {
        count += 1;
    }
    if(obj.user_write === true) {
        count += 2;
    }
    if(obj.user_execute === true) {
        count += 4;
    }
    return count;
}

function calculateGroup(obj) {
    let count = 0;
    if(obj.group_read === true) {
        count += 1;
    }
    if(obj.group_write === true) {
        count += 2;
    }
    if(obj.group_execute === true) {
        count += 4;
    }
    return count;
}

function calculateOther(obj) {
    let count = 0;
    if(obj.other_read === true) {
        count += 1;
    }
    if(obj.other_write === true) {
        count += 2;
    }
    if(obj.other_execute === true) {
        count += 4;
    }
    return count;
}

function calculateExtra(obj) {
    let count = 0;
    if(obj.extra_sticky === true) {
        count += 1;
    }
    if(obj.extra_sgid === true) {
        count += 2;
    }
    if(obj.extra_suid === true) {
        count += 4;
    }
    return count;
}

function calculateUserString(obj){
    let string;
    string = "---".split("");
    if(obj.user_read === true) {
        string[0] = "r";
    }
    if(obj.user_write === true) {
        string[1] = "w";
    }
    if(obj.user_execute === true) {
        string[2] = "x";
    }
    return string.join("");
}

function calculateGroupString(obj) {
    let string = "---".split("");
    if(obj.group_read === true) {
        string[0] = "r";
    }
    if(obj.group_write === true) {
        string[1] = "w";
    }
    if(obj.group_execute === true) {
        string[2] = "x";
    }
    return string.join("");
}

function calculateOtherString(obj) {
    let string = "---".split("");
    if(obj.other_read === true) {
        string[0] = "r";
    }
    if(obj.other_write === true) {
        string[1] = "w";
    }
    if(obj.other_execute === true) {
        string[2] = "x";
    }
    return string.join("");
}

export default Permissions;