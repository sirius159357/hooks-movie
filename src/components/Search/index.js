import React, {Component} from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
import "./index.css"


export default class Search extends Component {

    handleSearchValue =()=>{
        const keyword=this.keyWordElement.value
        PubSub.publish('movies',{isLoading:true})
        axios.get(`https://www.omdbapi.com/?s=${keyword}&apikey=4a3b711b`).then(
            response =>{
                PubSub.publish('movies',{isLoading: false,users: response.data.Search})

            },
            error =>{
                PubSub.publish('movies',{err: error.message})
            }
        )
    }

    render() {

        return (
            <div>
                <section className={'search'}>
                    <div>
                        <input className={'SearchInput'} ref={c =>this.keyWordElement= c} type={'text'} placeholder={'Search your movie!'}/>
                        <button className={'SearchButton'} onClick={this.handleSearchValue}>搜索</button>
                    </div>
                </section>
            </div>
        )
    }
}

