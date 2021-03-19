import React, { Component } from 'react'

export default class PostForm extends Component {

    handleSubmit = (e) =>{
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
                title,
                message
        }
        console.log(data);
    }



    render() {
        return (
            <div>
               
                <h1>Create Post</h1>
                <form onSubmit={this.handleSubmit}>
                <input type ="text" ref={input => this.getTitle = input} placeholder="Enter post title" required />
            <br></br>
            <textarea cols="30" ref={input => this.getMessage = input} rows="5" placeholder="Enter Post" required/>
            <br></br>
            <button>Post</button>
            </form>

            </div>
        )
    }
}
