import React from 'react'

const Section = ({title, children}) => (
    <div style={{backgroundColor: 'transparent', padding:10, margin:5}}>
        <h2 style={{color: 'black'}}>{title}</h2>
        <div style = {{
            padding: 20,
        }}>
        {children}
        </div>
    </div>
)

export default Section