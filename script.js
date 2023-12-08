// Tableau de styles aléatoires
const stylesArray = [
    'body { background-color: #f0f0f0; color: #333; }', // Style par défaut (minimalisme épuré)
    'body { background-color: #ffd700; color: #8a2be2; }', // Arc-en-ciel en couleur pastel
    
    // Ajoute d'autres styles au besoin
  ];
  
  // Fonction pour appliquer un style aléatoire
  function applyRandomStyle() {
    const randomIndex = Math.floor(Math.random() * stylesArray.length);
    const randomStyle = stylesArray[randomIndex];
    const dynamicStyles = document.getElementById('dynamic-styles');
    dynamicStyles.innerHTML = randomStyle;
  }
  
  // Appel de la fonction pour changer le style à chaque chargement de la page
  window.onload = applyRandomStyle;
  