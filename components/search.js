import React,{Component} from 'react'
import ReactDOM from 'react-dom'

class Search extends Component{

  render(){
    return(
        <div>
        <form id="search-box">
          <input type="text" id="search" placeholder="Search for..." required />
          <input type="submit" value="search" id="submit" />
        </form>
        </div>
    );
  }

}
export default Search;
