import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'
import Search from './components/search'
import Results from './components/results'

class App extends Component{
  render(){
    return (<div>
                <div id="header-div">
                  <Header />
                  <Search />
                </div>
                <Results />
            </div>
    );

  }

}

export default App;
