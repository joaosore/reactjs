import React, { useEffect } from 'react';

import { BoxCode } from './styled';


let time = '';

const Code = ({ active }) => {

  useEffect(() => {
    // Initialising the canvas
    var canvas = document.getElementById('bg-code'),
    ctx = canvas.getContext('2d');

    // Setting the width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Setting up the letters
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
    letters = letters.split('');

    // Setting up the columns
    var fontSize = 10,
    columns = canvas.width / fontSize;

    // Setting up the drops
    var drops = [];
      for (var i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Setting up the draw function
    function draw() {
      ctx.fillStyle = 'rgba(9, 9, 9, .1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#36BFF4';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
          drops[i] = 0;
        }
      }
    }

    if(active === false) {
      setTimeout(() => {
        clearInterval(time);
      }, 350);
    } else {
      // Loop the animation
      time = setInterval(draw, 33);
    }
  });

  return <BoxCode active={active}>
    <canvas id="bg-code"></canvas>
    </BoxCode>;
}

export default Code;
