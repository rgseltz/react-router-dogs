import React from "react";
import {Link} from 'react-router-dom'
import {v4 as uuid} from 'uuid'

function DogList({dogs}) {
    return (
    <ul>
    {dogs.map(({name}) => <li key={uuid()} ><Link to={`/dogs/${name}`}>{name}</Link></li>)}
    </ul>
    )
  }
export default DogList;