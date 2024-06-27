import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import './App.css'

const App = () => (
  <div className="app-container">
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
)

export default App
