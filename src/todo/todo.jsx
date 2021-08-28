import { React, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeValue } from './todoActions/todoActions';
import {Container} from 'react-bootstrap';
import '../main/main.css'
class Field extends Component {

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