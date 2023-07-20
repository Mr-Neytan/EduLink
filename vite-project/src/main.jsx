import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header/header.jsx'
import './index.css'
import Box from './components/boxes/box.jsx'

let element = <Header/>
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(element)


let box = Box()
const new_root = ReactDOM.createRoot(document.getElementById('box'))
new_root.render(box)
