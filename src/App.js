import React, {Component} from 'react';
import Header from "./components/Header";
import Search from "./components/Search";
import Movie from "./components/Movie";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Search/>
                <Movie/>
            </div>
        )
    }
}

