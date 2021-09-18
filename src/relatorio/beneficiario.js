import react, { useState, useEffect } from 'react'
import header from '../config/headers/headerToken'
import axios from 'axios'
export default function Relatorio(){

    const  [relatorio, setRelatorio] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/userlogado`, header()
        ).then(function (response) {
            setRelatorio(response.data.relatorio);
        }).catch((error) => {
            console.log(error)
        });

    }, [])

   
    
        return (
          <ul>
            {relatorio.id}

          </ul>
        )
      
      

    
}

