import React from 'react'

export default function Navigation(props) {

  return (
    <nav className={props.className} data-visible={props.data}>
      <ul>
          {props.navlist.map((list, index) => (
          <li key={index}>{list}</li>
        ))} 
    
       
      </ul>
    </nav>
  );
}
