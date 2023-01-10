import React,{Component}  from 'react';
import CardArray from './CardArray.js';
import Searchfield from './Searchfield.js';
import 'tachyons'
import {Content} from './Content';
import Scroll from './Scroll';
import './index.css'


export default class App extends Component{
    state={
        content:[],
        searchfield:''
    }
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then((Response)=>{
        return Response.json();
    })
    .then(users=>{
        this.setState({ content:users })
    })
}
    onChange=(e)=>{
       this.setState({searchfield:e.target.value}) 
    }
 render(){
    const filterarry = this.state.content.filter((num)=>{
    return num.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
             })
         return (<>
        <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <Searchfield onchange={this.onChange}/> 
              <Scroll>
                <CardArray filterarry={filterarry}/>
              </Scroll>   
              </div>
        </>) 
}}