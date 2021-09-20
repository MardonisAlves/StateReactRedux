import React, { useEffect, useState } from 'react'
import axios from 'axios';
import header from '../../config/headers/headerToken';
import TableListRelatorio from '../listaBeneficiarios/tableListRelatorio';

function ListaBeneficiarios(props) {

    const [relatorio, setRelatorio] = useState([])
    const [id , setId] = useState(props.match.params)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/getuser/${id.id}`, header()
        ).then(function (response) {
            setRelatorio([response.data.user])
            console.log(response)
        }).catch((error) => {
            console.log(error)
        });

    }, []);

    return (
        <div>
         
            <TableListRelatorio relatorio={relatorio}/>
        </div>
    )
}


export default ListaBeneficiarios
