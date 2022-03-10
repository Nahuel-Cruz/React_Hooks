import React from "react";
import ReactDOM from "react-dom";
import { Button, List, Form, FormGroup, Label, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const varia = "Bien";

class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                Hola {this.props.name}
                <br />
                Me siento {this.props.estadoAnimo}
                {varia}
            </div>
        );
    }
}

export default HelloMessage;
