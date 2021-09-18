import { React, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeValue } from './todoActions/todoActions';
import {Container} from 'react-bootstrap';
import axios from 'axios';
import header from '../config/headers/headerToken'
import '../main/main.css'
class Field extends Component {

   componentDidMount(){
    axios.get(`${process.env.REACT_APP_URL}/userlogado`,header()
    ).then(function(response){
       //console.log(response.data.users);
    }).catch((error) =>{
    console.log(error)
    }); 
   } 

    render() {
        return (
            <Container id="margin-top">
                <input onChange={this.props.changeValue} value={this.props.value} />
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        value: state.field.value
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeValue }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Field)