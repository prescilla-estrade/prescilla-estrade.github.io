const stylesArray = [
    'body { background-color: #f0f0f0; color: #333; }', 
    'body { background-color: #ffd700; color: #8a2be2; }', 
    'body { background-color: #ff6347; color: #fff; }', 
    'body { background-color: #00ffff; color: #000; }', 
    'body { background-color: #ffa07a; color: #2f4f4f; }', 
    'body { background: linear-gradient(to right, #ffcc00, #ff3300); color: #fff; }', 
    'body { background: linear-gradient(to right, #663399, #ff00ff, #66ff66); color: #fff; }', 
    'body { background-color: #6495ed; color: #fff; }', 
    'body { background-color: #ff1493; color: #fff; }', 
    'body { background-color: #7fff00; color: #000; }', 
    'body { background: linear-gradient(to right, #800080, #008080); color: #fff; }', 
    'body { background: linear-gradient(to right, #ff7f50, #40e0d0); color: #fff; }', 
    'body { background-color: #ff8c00; color: #fff; }', 
    'body { background-color: #dda0dd; color: #000; }', 
    'body { background-color: #aqua; color: #000; }', 
    'body { background: linear-gradient(to right, #ffccff, #ff99cc); color: #fff; }', 
    'body { background: linear-gradient(to right, #00ffcc, #ffcc00); color: #000; }', 
  ];
  
  let isDarkMode = false;
  
  function applyRandomStyle() {
    const randomIndex = Math.floor(Math.random() * stylesArray.length);
    const randomStyle = stylesArray[randomIndex];
    const dynamicStyles = document.getElementById('dynamic-styles');
    dynamicStyles.innerHTML = randomStyle;
  }
  
  function toggleDarkMode() {
    const body = document.body;
  
    if (!isDarkMode) {
      body.style.backgroundColor = '#000';
      body.style.color = '#fff';
      isDarkMode = true;
    } else {
      applyRandomStyle();
      isDarkMode = false;
    }
  }
  
  function moveButtonRandomly() {
    const button = document.querySelector('button');
    const interval = 1000; 
  
    setInterval(() => {
      const newPositionX = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
      const newPositionY = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
  
      button.style.position = 'absolute';
      button.style.left = newPositionX + 'px';
      button.style.top = newPositionY + 'px';
    }, interval);
  }

  function changeFontSize() {
    const body = document.body;
    const minFontSize = 10;
    const maxFontSize = 60;
  
    const randomFontSize = Math.floor(Math.random() * (maxFontSize - minFontSize + 1)) + minFontSize;
    body.style.fontSize = randomFontSize + 'px';
  }
       
  function changeFontFamily() {
    const fontsArray = [
        'Arial, sans-serif',
        'Verdana, sans-serif',
        'Georgia, serif',
        'Times New Roman, serif',
        'Courier New, monospace',
        'Comic Sans MS, cursive',
        'Impact, fantasy',
        'Garamond, serif',
        'Lucida Console, monospace',
        'Brush Script MT, cursive',
        'Trebuchet MS, sans-serif',
        'Palatino Linotype, serif',
        'Consolas, monospace',
        'Copperplate, fantasy',
        'Century Gothic, sans-serif'
      ];
        
    const body = document.body;
    const randomFontIndex = Math.floor(Math.random() * fontsArray.length);
    const randomFont = fontsArray[randomFontIndex];
  
    body.style.fontFamily = randomFont;
  }

  function changeButtonColor() {
    const button = document.querySelector('button');
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Génère une couleur hexadécimale aléatoire
    button.style.backgroundColor = randomColor;
  }
    
  function changeEmojiImage() {
    const emojiImages = [
      'emoji1.webp',
      'gif.gif',
      'gif1.gif',
      'gif2.gif',
      'gif3.gif'
    ];
  
    const randomIndex = Math.floor(Math.random() * emojiImages.length);
    const randomImage = emojiImages[randomIndex];
    const emojiElement = document.getElementById('emojiImage');
    emojiElement.src = randomImage;
  }
  
  window.onload = function() {
    applyRandomStyle();
    moveButtonRandomly(); 
    changeButtonColor();
    changeEmojiImage(); 
  };
  
  
  
  