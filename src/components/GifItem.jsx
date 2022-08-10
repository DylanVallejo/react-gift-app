import React from 'react'

export const GifItem = ({title,url,id}) => {
    return (
        <div className='card'>
            <li key={id}>
                <img src={url} alt={title} />  
                <p>{title}</p>
            </li>
        </div>
    )
}
