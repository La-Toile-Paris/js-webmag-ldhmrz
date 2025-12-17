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
      let themes = ["Géographie 🌍", "Rites 🕯️", "Culture 🎭", "Sociétés 🤝", "Héritages 📜", "Territoires 🗺️"];

      themes.forEach(theme => {
        themesNav.insertAdjacentHTML(
          "beforeend",
          `<a href="#" class="nav-theme-btn">${theme}</a>`
        );
      });


      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL

      let containerHero = document.getElementById("article-principal");

      let imageHero = data.cover.imageHero;
      let tags = data.cover.tags;
      let theme = data.cover.theme;
      let description = data.cover.description;
      let author = data.cover.author;
      let date = data.cover.date;

      let heroCard = `<div id="article-principal">
                        <img
                          id="hero-image"
                          src="${imageHero}"
                          alt=""
                        >
                          <div class="hero-info">
                            <p class="theme-badge">${tags}</p>
                            <h2>${theme}</h2>
                            <p>${description}</p>
                            <p>By ${author} : ${date}</p>
                            <button class="read-article-btn">Lire  article</button>
                          </div>
                      </div>`

      containerHero.innerHTML = heroCard;

      // TODO 4: REMPLIR LA GRILLE D'ARTICLES

      let articlesGrid = document.getElementById("articles-grid");

      let stories = data.stories;

      stories.forEach(story => {
        let storiesImage = story.image;
        let storiesTopic = story.topic;
        let storiesBody = story.body;
        let storiesCorps = story.corps;
        let storiesAuthor = story.auteur;
        let storiesDate = story.date;
        

        let storiesCard =
      
      `<div class="article-card">
      <img src="${storiesImage}" alt="">
      
      <div class="article-content">
        <button class="theme-badge">${storiesTopic}</button>
        <h3>${storiesBody}</h3>
        <p>${storiesCorps}</p>
        <p class="article-author">By ${storiesAuthor} : ${storiesDate}</p>
        <button class="read-btn">Lire l'article</button>
      </div>
    </div>`;

    articlesGrid.innerHTML += storiesCard;
});

      // TODO 5: REMPLIR LES THEMES

      let themesList = document.getElementById("themes-list");

      let topics = data.topics;

      topics.forEach(topic => {
  let themeCard = 
   `<div class="theme-item">
      <div class="theme-icon">${topic.icon}</div>
      <h3>${topic.title}</h3>
      <p>${topic.desc}</p>
    </div>`;

      themesList.innerHTML += themeCard;
  });

      // TODO 6: REMPLIR LES AUTEURS

      let authorsList = document.getElementById("authors-list");

      let contributors = data.contributors;

      contributors.forEach(contributor => {
        let firstName = contributor.firstName;
        let lastName = contributor.nom;
        let role = contributor.typeExperience;
        let bio = contributor.presentation;
        let image = contributor.image;
        let articles = contributor.articles;
        let followers = contributor.followers;

        let authorCard =
        `<div class="author-card">
      <img class="author-image" src="${image}" alt="">
      <h3>${firstName} ${lastName}</h3>
      <p class="author-role">${role}</p>
      <p class="author-bio">${bio}</p>
      <p>Articles: ${articles} | Followers: ${followers}</p>
    </div>`;

    authorsList.innerHTML += authorCard;
        
      });

      // TODO 7: REMPLIR LE BOUTON CALL TO ACTION

      let footerContainer = document.getElementById("call-to-action");

      let ctaText = data.cta.text;
      let ctaLabel = data.cta.label;

      let ctaHTML =
      `<div>
        <p class="footer p ">${ctaText}</p>
        <button class="cta-button">S'abonner</button>
       </div>`

      footerContainer.innerHTML += ctaHTML;


      /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 // BONUS: 
 // Alert quand on appuie sur le bouton CTA
 // Fonction de filtrage par thème
 // Classer les articles par popularité ou notation
 
