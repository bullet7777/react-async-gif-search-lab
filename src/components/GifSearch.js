import React, { Component } from 'react'

export default class GifSearch extends Component {



    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
       console.log(event)
       this.props.onSubmit(this.state.value)
        
      }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Enter a Search Term:
                    <input value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Find Gifs" />
      </form>
        )
    }
}
