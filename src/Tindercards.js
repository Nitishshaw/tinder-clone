import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './Tindercards.css';

function Tindercards() {
  const[people,setPeople] =useState([]);
     useEffect(()=> {
         const unsubscribe =database.collection('people').onSnapshot(snapshot =>{
             setPeople( snapshot.docs.map(doc =>doc.data()))
         })
         return ()=>{
             //this is clean up
             unsubscribe();
         };
     },[])

    return (
        <div>
            {/* <h1>Tinder</h1> */}
            <div className="tindercards__container">
            {people.map(person =>(
                <TinderCard 
                className="swipe"
                key={person.name}
                preventSwipe={['up' ,'down']}>
                    <div className="card"
                    style={{
                        backgroundImage :`url( ${person.url})`

                    }}>
                       <h3>{person.name}</h3>
                    </div>
                </TinderCard>
                ))}
                </div>
        </div>
    )
}

export default Tindercards
