import React from "react";
import {useParams, Redirect} from 'react-router-dom';
import {v4 as uuid} from 'uuid';
 const Dog = ({dogData}) => {
    const {name} = useParams();
    let currentDog = dogData.find(dog => dog.name.toLowerCase() === name.toLowerCase());
    if (currentDog) {
    console.log(currentDog)
    console.log(dogData)
    return (
            <div>
            <p>Hi There {name}</p>
            <img 
                src={currentDog.src}
                alt={name}
            />
            <p>Age: {currentDog.age}</p>
            {currentDog.facts.map(fact => <p key={uuid()}>{fact}</p>)}
            </div>
    )
    }
    return <Redirect to="/dogs"/>;
}
export default Dog;