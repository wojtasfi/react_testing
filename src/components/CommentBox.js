import React from "react";
import {connect} from 'react-redux'
import * as actions from 'actions'


class CommentBox extends React.Component {

    constructor(props) {
        super(props)

        this.state = {comment: ''}

        this.handleTextInput = this.handleTextInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleTextInput(event) {
        this.setState({comment: event.target.value})

    }

    handleSubmit(event) {
        event.preventDefault(); //html form so it can cause reload

        this.props.saveComment(this.state.comment);
        this.setState({comment: ''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea
                        onChange={this.handleTextInput}
                        value={this.state.comment}/>
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button className={"fetch-comments"} onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        )
    }
}

export default connect(null, actions)(CommentBox)