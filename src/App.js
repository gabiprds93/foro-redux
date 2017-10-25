import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {FormGroup, FormControl, Button} from 'react-bootstrap';
import {connect} from 'redux-zero/react'
import {addComment} from './actions'

const Comment = ({index, comment}) =>
{
  return(
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p className="">{comment.name}</p>
      <p className="">{comment.comment}</p>    
      <p className="">DELETE COMMENT</p>
      <p className="">REPORT AS ABUSE COMMENT</p>    
    </div>
  );
}

const App = ({comments, index}) =>
{
  let commentsList = comments.map((comment, index) => {
    console.log("comment", comment);
    return ( <Comment key={comment.id} index={index} comment={comment}/>);
  });
  const onSubmit = e => {
    e.preventDefault();
    console.log("this.refInputName.value", this.refInputName.value)
    addComment(this.refInputName.value, this.refInputComment.value);
  };
  return (
    <div className="">
      <div>
        <p className="">NEW COMMENT</p>
        <form onSubmit = {onSubmit}>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="Name"
              ref={e => (this.refInputName = e)}
            />
            {console.log("this.refInputName", this.refInputName)}            
          </FormGroup>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="Comment"
              ref={e => (this.refInputComment = e)}              
            />
          </FormGroup>
          <Button type="submit">POST COMMENT</Button>
        </form>
      </div>
      <div className="">
        <h3 className="">COMMENTS</h3>
        <p className="">{index} comments</p>        
        {commentsList}
      </div>  
    </div>
  );
}

const mapToProps = ({comments, index}) => ({comments, index})

export default connect(mapToProps)(App);