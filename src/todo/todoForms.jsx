import React, { Component } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    onChangevalueNome, onChangevalueLocal,
    onChangevalueValor, onChangevalueStatus,
    onChangevalueDate, add, search
} from '../todo/todoActions/todoActions'



import '../todo/css/todo.css'

class TodoForms extends Component {

    render() {
        const { nome, local, valor, data, status } = this.props
        const todoList = { nome, local, valor, data, status }
        return (
            <Container>
                <div className="form-container">
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="Nome" name="nome" onChange={this.props.onChangevalueNome} type="text"
                                value={this.props.nome} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Local" name="local" onChange={this.props.onChangevalueLocal} type="text"
                                value={this.props.local} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Valor" name="valor" onChange={this.props.onChangevalueValor} type="valor"
                                value={this.props.valor} />
                        </Col>
                        <Col>
                            <Form.Control as="select" name="status" onChange={this.props.onChangevalueStatus}>
                                <option value="">Qual status...</option>
                                <option value={this.props.valueTrue}>Pago</option>
                                <option value={this.props.valueFalse}>Pendente</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Data" name="data" type="date" onChange={this.props.onChangevalueDate} />
                        </Col>
                        <Col>
                            <Button onClick={() => this.props.add(todoList)}>Nova tarefa</Button>
                        </Col>
                    </Form.Row>

                </div>

            </Container>
        )
    }

}

// fazer o mapeamento mapStateToProps e mapDispatchToProps
const mapStateToProps = state => (
    {
        nome: state.field.nome,
        local: state.field.local,
        status: state.field.status,
        valor: state.field.valor,
        data: state.field.data,
        valueTrue: state.field.valueTrue,
        valueFalse: state.field.valueFalse
    }
)


const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            onChangevalueNome,
            onChangevalueLocal,
            onChangevalueValor,
            onChangevalueStatus,
            onChangevalueDate,
            add,
            search,
        }, dispatch)

// fazer a chamada do connect();

export default connect(mapStateToProps, mapDispatchToProps)(TodoForms)