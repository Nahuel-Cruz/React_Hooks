import React from "react";
import ReactDOM from "react-dom";
import { Button, List, Form, FormGroup, Label, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

/*Comment*/
function Comment(props) {
    return (
        <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">{props.date}</div>
        </div>
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">{props.user.name}</div>
        </div>
    );
}

function Avatar(props) {
    return (
        <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
    );
}


export default Comment;