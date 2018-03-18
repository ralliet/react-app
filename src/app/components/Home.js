import React from 'react';
import PropTypes from 'prop-types';


export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.intialAge,
            status: 0
        };
        setTimeout(() => {
            this.setState({
                status:1
            });
        },6000)
    } 

    onMakeOlder() {
        //hey something changed => triggers rerender page
        this.setState({
            age: this.state.age + 3
        });
    } 

    render() {  
        console.log(this.props.age);
        return(
            <div>
                <p>your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button className="btn btn-primary" onClick={ this.onMakeOlder.bind(this) }>Make me older!</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    intialAge: PropTypes.number
};