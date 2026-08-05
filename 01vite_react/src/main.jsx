import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function Myapp(){
    return(
        <div>
            <h1>creating my own function in main file</h1>
        </div>
    )
}

// const ReactElement= {                            for react's own render there is differnt format/syntax of writing element. 
//     type: 'a',                                   but we can create our own reactelements if we create our own render
//     props:{
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }

const anotherElement= (
    <a href="https://google.com" target='_blank'>click me to go onto google</a>
)

const ReactElement= React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google'
)

createRoot(document.getElementById('root')).render(
    ReactElement
)
