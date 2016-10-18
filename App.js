import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'
import Search from './components/search'

class App extends Component{
  render(){
    return (<div>
        <Header />
        <Search />
      </div>
    );

  }

}

export default App;
