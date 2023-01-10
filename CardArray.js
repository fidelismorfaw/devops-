import React from 'react';
import Card from './Card.js';

const CardArray=({filterarry})=>{
   const arr= filterarry.map((user,i)=>{
      return  <Card key={i} id={user.id} name={user.name} email={user.email}/>
    ;})
    return arr;
};
export default CardArray;

