import React,{Component}  from 'react';
import 'tachyons';

export default class Searchfield extends Component{

    render(){
        return (<>
           <input 
              className='b--green pa3 ma1'
              onChange={this.props.onchange}
              type="Search" 
              placeholder='Search Robots'
              
           />
</>) 
}}