import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Transition, TransitionGroup } from 'react-transition-group'
import { play, exit } from '../timelines'
import Home from '../views/Home'
import Author from '../views/Author'
import About from '../views/About'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav/>
        <Route render={({ location }) => {
          const { pathname, key } = location;

          return (
            <TransitionGroup component={null}>
              <Transition
                key={key}
                appear={true}
                onEnter={(node, appears) => play(pathname, node, appears)}
                onExit={(node, appears) => exit(node, appears)}
                timeout={{enter: 1000, exit: 1000}}
              >
                <Switch location={location}>
                  <Route exact path="/" component={Home}/>
                  <Route path="/author" component={Author} />
                  <Route path="/about" component={About} />
                </Switch>
              </Transition>
            </TransitionGroup>
          )
        }}/>
      </BrowserRouter>
    )
  }
}

export default App;
