import React, {Component} from 'react';
import "./index.css"

export default class Header extends Component {
    reload =()=>{
        window.location.reload()
    }
    render() {
        return (
            <div>
                <h2 className={"HeaderStyle"} onClick={this.reload} >hooks</h2>
            </div>
        )
    }
}

