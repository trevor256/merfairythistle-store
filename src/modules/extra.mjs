import React from 'react';


function MyComponent() {
  return <h2>Hi, I am a Car!</h2>;
}

function Tester() {
  return <h2>Hi, I am a Car!</h2>;
}

function UpdateYear(elementId) {
    const currentYear = new Date().getFullYear();
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML += currentYear;
    }
}

export {MyComponent, Tester, UpdateYear};