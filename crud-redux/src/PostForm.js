import React, { Component } from 'react'

export default class PostForm extends Component {
    render() {
        return (
            <div>
                <form action="">
                <h1>Create Post</h1>
                <input type ="text" palceholder="Enter post title" required />
            <br></br>
            <textarea cols="30" rows="5" placeholder="Enter Post" required/>
            <br></br>
            <button>Post</button>
            </form>

            </div>
        )
    }
}
