import React from 'react';
import PropTypes from 'prop-types';


export class Home extends React.Component {
    
    render() {
        
        return(
            <div>
                <p>In a new component!</p>
                { this.props.children }
                <div>
                    <h4>hobbies</h4>
                    <ul>
                        {this.props.hobbies.map((hobby,i) => <li key={i}>{ hobby }</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    hobbies: PropTypes.array,
    children: PropTypes.element.isRequired
};