// Dependencies
import React, { Component } from 'react'; 
//LINK sirve para crear enlaces
import { Link } from 'react-router-dom'; 
import PropTypes  from 'prop-types';
import { connect } from 'react-redux';
import Hijo from '../Hijo'
import * as actions from './actions';

class Home extends Component {

   constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      apellido: "",
      dni: "",
      datos:{}
    };
  }

  static propTypes = {

  };

  componentWillMount(){
    
  }
  componentDidMount(){
    this.props.getData();
  }

  handleChange = (event) => {
    
    switch(event.target.id){
      case 'nombre':
        this.setState({
          nombre: event.target.value
        });
        break;
      case 'apellido':
        this.setState({
          apellido: event.target.value
        });
        break;
      case 'dni':
        this.setState({
          dni: event.target.value
        })
    }
  }
   componentWillReceiveProps(nextProps){
    if (nextProps.data) {
      this.setState({
        datos: nextProps.data
      })
    }
  }

  procesar = () => {
  
    
    let data = {
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      dni: this.state.dni
    }
    this.props.addDataToSave(data);
  }
 
  render() {

      const { nombre, datos } = this.state;
      
    return (
        <div className="Home">
            <form>
            <label htmlFor="nombre"> Nombre:</label>
            <input type="text" id="nombre" onChange={this.handleChange}/><br/>
            <label htmlFor="nombre"> Apellidp:</label>
            <input type="text" id="apellido" onChange={this.handleChange}/><br/>
            <label htmlFor="dni"> dni:</label>
            <input type="text" id="dni" onChange={this.handleChange}/><br/>
            <button type="button" className="btn btn-success" onClick={this.procesar}>Procesar</button>
            </form>
            <hr/>
            <Hijo dataToChild= {datos} />
        </div>
    );
  }
}
export default connect(state => ({
  data: state.reducerTest.data
}),actions)(Home);
