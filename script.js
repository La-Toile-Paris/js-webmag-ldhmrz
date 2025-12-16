function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {       
      /// EXAM: COMPLÉTEZ LE CODE ICI ! 
      const journal = data;
      console.log(journal);

      // TODO 1: REMPLIR LE HEADER

      let nomJournal = document.getElementById("nom-journal");
      let phraseAccroche = document.getElementById("phrase-accroche");
      
      nomJournal.textContent = "Le Journal du Web";
      phraseAccroche.textContent = "Toute l’actualité du numérique";

      // TODO 2: REMPLIR LA NAVIGATION

      let themesNav = document.getElementById("themes-nav");

      themes.forEach(theme => {
        themesNav.insertAdjacentHTML(
          "beforeend",
          `<a href="#" class="nav-theme-btn">${theme}</a>`
        );
      });


      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL

      let containerHero = document.getElementById("article-principal");

      let heroImage = data.cover.imageHero;
      let heroCard = 

      containerHero = `<di<img id="hero-image">`

      // TODO 4: REMPLIR LA GRILLE D'ARTICLES

      let articlesGrid = document.getElementById("articles-grid");

      // TODO 5: REMPLIR LES THEMES

      // TODO 6: REMPLIR LES AUTEURS

      // TODO 7: REMPLIR LE BOUTON CALL TO ACTION


      /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 // BONUS: 
 // Alert quand on appuie sur le bouton CTA
 // Fonction de filtrage par thème
 // Classer les articles par popularité ou notation
 
