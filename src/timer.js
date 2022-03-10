import React from "react";
import ReactDOM from "react-dom";
import { Button, List, Form, FormGroup, Label, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

/*Timer*/
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.setState((state) => ({ seconds: state.seconds + 1 }));
    }

    render() {
        return <div>Segundos: {this.state.seconds}</div>;
    }
}

export default Timer;
