import React from 'react';

const About=(props)=>{
  console.log(props)
  setTimeout(() => {
    props.history.push('/home');
    
  }, 3000);
  return (<>
    <h1>i am about page</h1>
    <button onClick={()=>{props.history.push('/home')}}>Navigate</button>
  </>)
}

export default About;