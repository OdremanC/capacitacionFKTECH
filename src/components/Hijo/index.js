import React, { Component } from 'react'; 
//LINK sirve para crear enlaces
import { Link } from 'react-router-dom'; 
import PropTypes  from 'prop-types';
import { connect } from 'react-redux';



class Hijo extends Component {

   constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  static propTypes = {

  };

  componentWillMount(){
    
  }
  componentDidMount(){
    
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    if (nextProps.dataToChild) {
      this.setState({
        data: nextProps.dataToChild
      })
    }
  }


 
 
  render() {
      
    return (
        <div className="Home">
            <p>Hijo</p>
        </div>
    );
  }
}
export default (Hijo);
