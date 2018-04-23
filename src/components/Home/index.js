// Dependencies
import React, { Component } from 'react'; 
//LINK sirve para crear enlaces
import { Link } from 'react-router-dom'; 
import PropTypes  from 'prop-types';
import { connect } from 'react-redux';



class Home extends Component {

   constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  static propTypes = {

  };

 
  render() {
      
    return (
        <div className="Home">
            <p>
              Home Component
            </p>          
        </div>
    );
  }
}
export default Home;
