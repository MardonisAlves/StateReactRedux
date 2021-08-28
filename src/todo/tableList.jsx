import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import action search
import { search , add, deleteTodolist } from '../todo/todoActions/todoActions'
import { ClearNome } from './todoActions/todoActionClear'
// fazer a chamanda do component bootstrap
import { Table , Container , Button} from 'react-bootstrap'
import {Ifstatus} from './todoHelp/Ifstatus'

class TableList extends Component {
    
    // chamar o metodo search
    componentDidMount() {
       
        this.props.search()
    }
    // Agora vamos mapear a nosss lista com o list.map
   tableRows = () => {
        const list = this.props.list || []
        return list.map(todo => (
            <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.nome}</td>
                <td>{todo.local}</td>
                {Ifstatus(todo.status)}
                <td>{todo.valor}</td>
                <td>{todo.data}</td>
                <td><Button variant="danger" onClick={() => this.props.deleteTodolist(todo.id)}>Deletar</Button></td>
            </tr>
        ))
    }


    render() {
        return (
            <Container id="margin-top">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Local</th>
                            <th>Status</th>
                            <th>Valor</th>
                            <th>Data</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.tableRows()}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

// maperar o estado com mapStateToProps
const mapStatetoProps = state => ({ list: state.field.list}) 
  
// maperaf o dispach mapStateToDispack
const mapDispatchToProps = dispatch => 
 bindActionCreators({add, search  ,deleteTodolist ,ClearNome}, dispatch)
   

// passar o para o connect os decorators
export default connect(mapStatetoProps, mapDispatchToProps)(TableList)