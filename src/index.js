import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
let cssStyle={
};
let date=new Date( ).getHours();
let greeting=''
if(date>=1 && date<12){
 greeting='Good Morning';
 cssStyle.color='green';
}
else if(date>=12 && date<16){
  greeting='Good Afternoon';
  cssStyle.color='blue';
}
else if(date>=16 && date<20){
  greeting='Good Evening';
  cssStyle.color='yellow';
}
else if(date>=20 && date<23){
  greeting='Good Night';
  cssStyle.color='black';
}

ReactDOM.render(
  <div>
   
    <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
  
 </div>,document.getElementById('root')
);