/* eslint-disable no-undef */
import React from 'react';
import styles from './Terminal.css'
import Terminal from 'terminal-in-react';

function ReactTerm() {
  return(
    <div id="termContainer">
     <Terminal
		  watchConsoleLogging
			prompt="a clue for you bG9naW4gbmFtZTogRHVyYmFuc1BvaXNvbiBsb2dpbiBwYXNzd29yZDogVHFodWkzMHN6JzI9M3ch"
			 />

    </div>
	)
};
console.log('a clue for you bG9naW4gbmFtZTogRHVyYmFuc1BvaXNvbiBsb2dpbiBwYXNzd29yZDogVHFodWkzMHN6JzI9M3ch');
export default ReactTerm;
