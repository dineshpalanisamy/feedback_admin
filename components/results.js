import React,{Component} from 'react'
import ReactDOM from 'react-dom'

class Results extends Component{
  const array ;
  constructor(){
    super();
   array = ["S","AS"];
  }
  render() {
    return(

        <div>
          <ul>
            {array.map((item)=> {
              <li>"item"</li>
            })
          }
          </ul>
        </div>
    )
  }
}
export default Results;
