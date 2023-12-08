const stylesArray = [
    'body { background-color: #f0f0f0; color: #333; }', // Style par défaut (minimalisme épuré)
    'body { background-color: #ffd700; color: #8a2be2; }', // Arc-en-ciel en couleur pastel
    'body { background-color: #ff6347; color: #fff; }', // Tomate avec texte blanc
    'body { background-color: #00ffff; color: #000; }', // Cyan avec texte noir
    'body { background-color: #ffa07a; color: #2f4f4f; }', // Saumon clair avec texte gris ardoise
    'body { background: linear-gradient(to right, #ffcc00, #ff3300); color: #fff; }', // Dégradé orangé
    'body { background: linear-gradient(to right, #663399, #ff00ff, #66ff66); color: #fff; }', // Dégradé multicolore
    'body { background-color: #6495ed; color: #fff; }', // Bleu acier avec texte blanc
    'body { background-color: #ff1493; color: #fff; }', // Rose vif avec texte blanc
    'body { background-color: #7fff00; color: #000; }', // Vert chartreuse avec texte noir
    'body { background: linear-gradient(to right, #800080, #008080); color: #fff; }', // Dégradé violet-bleu avec texte blanc
    'body { background: linear-gradient(to right, #ff7f50, #40e0d0); color: #fff; }', // Dégradé orange-bleu turquoise avec texte blanc
    'body { background-color: #ff8c00; color: #fff; }', // Orange foncé avec texte blanc
    'body { background-color: #dda0dd; color: #000; }', // Violet pâle avec texte noir
    'body { background-color: #aqua; color: #000; }', // Aqua avec texte noir
    'body { background: linear-gradient(to right, #ffccff, #ff99cc); color: #fff; }', // Dégradé rose-violet avec texte blanc
    'body { background: linear-gradient(to right, #00ffcc, #ffcc00); color: #000; }', // Dégradé turquoise-orange avec texte noir
  ];
  
  function applyRandomStyle() {
    const randomIndex = Math.floor(Math.random() * stylesArray.length);
    const randomStyle = stylesArray[randomIndex];
    const dynamicStyles = document.getElementById('dynamic-styles');
    dynamicStyles.innerHTML = randomStyle;
  }
  
  window.onload = applyRandomStyle;
  