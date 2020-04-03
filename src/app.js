import React from 'react'
import { render } from 'react-dom'
import AppRouter from './routers/AppRouter'
import './styles/main.scss'

render(<AppRouter />, document.getElementById('app'))
