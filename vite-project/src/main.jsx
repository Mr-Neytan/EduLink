import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header/header.jsx'
import './index.css'
import Box from './components/boxes/box.jsx'
import web_details from './sub_details.jsx'

let element = <Header/>
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(element)

let webs = web_details()

let box = Box(webs)
const new_root = ReactDOM.createRoot(document.getElementById('box'))
new_root.render(box)
