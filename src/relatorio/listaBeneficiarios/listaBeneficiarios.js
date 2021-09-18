import React, { useEffect, useState } from 'react'
import axios from 'axios';
import header from '../../config/headers/headerToken';
function ListaBeneficiarios() {
    const [relatorio, setRelatorio] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/userlogado`, header()
        ).then(function (response) {
            setRelatorio([response.data.relatorio])
            console.log(response)
        }).catch((error) => {
            console.log(error)
        });

    }, []);

    return (
        <div>
            {
                relatorio.map(
                item =>
                    <div key={item.id}>
                        {item.email}
                    </div>
                )
            }
        </div>
    )
}


export default ListaBeneficiarios
