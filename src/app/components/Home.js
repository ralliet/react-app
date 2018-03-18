import React from 'react';
import PropTypes from 'prop-types';


export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            homeLink: props.initialLinkName,
            age: props.intialAge,
            status: 0
        };
    } 

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    } 

    onChangeName() {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        })
    }

    render() {  
        return(
            <div>
                <p>your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button className="btn btn-primary" onClick={ this.onMakeOlder.bind(this) }>Make me older!</button>
                <hr/>
                <button className="btn btn-primary" onClick={ this.props.greet }>greet</button>
                <hr />
                <input type="text" value={this.state.homeLink} onChange={this.onHandleChange.bind(this)}/>
                <button className="btn btn-primary" onClick={this.onChangeName.bind(this)}>change homelink name</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    intialAge: PropTypes.number,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string
};