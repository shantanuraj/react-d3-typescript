import App from './App'

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import data from './data'

ReactDOM.render(<App width={400} height={330} data={data} />, document.getElementById('app'))
