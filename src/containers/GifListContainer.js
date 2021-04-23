import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state={
        gif:[]

    }


componentDidMount() {
    fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=aLxhuEXj7veqwfF03XCXHaf5QPvetPcF&rating=g')
    .then(response =>response.json())
    .then(info => {
        console.log(info)
        this.setState({
            gif:info.data.slice(0,3)
        })

    })
}


handleSubmit = (value) =>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${value}&api_key=aLxhuEXj7veqwfF03XCXHaf5QPvetPcF&rating=g`)
    .then(response =>response.json())
    .then(info => {
        console.log(info)
        this.setState({
            gif:info.data.slice(0,3)
        })

    })
}


    render() {
        return (
            <div>
                <GifList data={this.state.gif}/>
                <GifSearch onSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
