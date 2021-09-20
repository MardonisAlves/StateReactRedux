import React from 'react'

function tableListRelatorio(props) {
return(
    <div>
        {
            props.relatorio.map(
            item =>
                <div key={item.id}>
                   {item.name}
                </div>
            )
        }
    </div>
)
}

export default tableListRelatorio