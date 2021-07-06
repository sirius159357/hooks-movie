import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import  Pic from "../assets/ajax-loader.gif"
import "./index.css"



export default class Movie extends Component {
    state={
        users: [],
        isLoading: false,
    }
    componentDidMount(){
        this.token=PubSub.subscribe('movies',(_, stateObj)=>{
            this.setState(stateObj)
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }


    render() {
        const {users,isLoading}=this.state
        return (
            <div>
                {
                    isLoading ?  (<img className="Pic" src={Pic} alt="Loading spinner" />):
                    users.map((userObj)=>{
                        return (
                            <div key={userObj.imdbID} className={'showMovies'}>
                                <img alt={'movie'} src={userObj.Poster} style={{width:'100px'}}/>
                                <p id={userObj.imdbID}>{userObj.Title}</p>
                                <p className={'movie_years'}>({userObj.Year})</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

