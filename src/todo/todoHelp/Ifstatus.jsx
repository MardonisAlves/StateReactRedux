import React from 'react'

export const Ifstatus = props => {
    console.log(props)
    if(props === 0){
        return <td>Pendente</td>
    }else{
        return <td>Pago</td>
    }
}

