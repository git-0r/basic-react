import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import List from './components/List';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

  
function showTime() 
{ 
  const myElement = ( 
    <> 
         <Heading></Heading>
        <Paragraph></Paragraph>
    <h2>
      "We love the dev community of React & Flutter"
	    </h2>
	    <h3>
      "You can join below team:"
	    </h3>
	    <List/>
			 <h2>{new Date().toLocaleTimeString()}</h2> 

   </> 
   ); 

   root.render(
      myElement
  );
                       
} 
  
setInterval(showTime, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
