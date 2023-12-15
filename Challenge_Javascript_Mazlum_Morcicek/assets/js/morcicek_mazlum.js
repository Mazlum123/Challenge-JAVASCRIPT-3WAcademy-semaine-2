const populations = [
  { id: 0, name: "Alan", jobs: ['dev junior', 'dev fullstack'], password: "tyeedsa00" },
  { id: 1, name: "Albert", jobs: ['doctor'], password: "tyeidii00" },
  { id: 2, name: "Jhon", jobs: ['mathematician', 'doctor'], password: "xyuuuoi00" },
  { id: 3, name: "Brice", jobs: ['dev fullstack'], password: "xytoiab00" },
  { id: 4, name: "Alexandra", jobs: ['dentist'], password: "aaaoiab33" },
  { id: 5, name: "Brad" },
  { id: 6, name: "Carl", jobs: ['lead dev', 'dev fullstack'] },
  { id: 7, name: "Dallas", jobs: ['dev fullstack'] },
  { id: 8, name: "Dennis", jobs: ['integrator', 'dev fullstack'] },
  { id: 9, name: "Edgar", jobs: ['mathematician'] },
  { id: 10, name: "Erika", jobs: ['computer scientist', 'mathematician'] },
  { id: 11, name: "Isaac", jobs: ['doctor'], password: "Axgkj22Kl" },
  { id: 12, name: "Ian", password: "Axgkj00Kl" },
];

// Sélection de l'élément tbody du tableau du HTML
const tbody = document.querySelector('.people-table tbody');

// Parcourir toutes les personnes et ajouter les lignes au tableau
populations.forEach(person => {
  const row = document.createElement('tr');
  row.innerHTML = `
      <td>${person.id}</td>
      <td>${person.name}</td>
      <td>${person.jobs && person.jobs.length > 0 ? person.jobs.join(', ') : 'Aucun job'}</td>
      <td>${person.password ? person.password : 'Aucun mot de passe'}</td>
  `;
  console.log("Personne ajoutée au tableau :", row);
});

// Créer un tableau de données pour chaque personne
let spreadedData = populations.map(person => ({ ...person }));

// Afficher les données de chaque personne dans la console
spreadedData.forEach((person, index) => {
  console.log(`Personne ${index + 1}:`, person);
});

// Compter le nombre de docteurs
let doctors = 0;
spreadedData.forEach(person => {
  if (person.jobs && person.jobs.includes('doctor')) {
    doctors++;
  }
});

console.log('Nombre de docteurs:', doctors);

// Filtrer et afficher les docteurs
function displayDoctors() {
  const doctors = populations.filter(person => person.jobs && person.jobs.includes('doctor'));
  console.log("Liste des docteurs :", doctors);
}

// Filtrer et afficher les développeurs fullstack
function displayFullStackDevelopers() {
  const fullstackDevelopers = populations.filter(person => person.jobs && person.jobs.includes('dev fullstack'));
  console.log("Liste des développeurs fullstack :", fullstackDevelopers);
}

// Appel des fonctions pour afficher les docteurs et les développeurs fullstack
displayDoctors();
displayFullStackDevelopers();

// Filtrer et afficher les personnes sans emploi
function displayNoWork() {
  const noWorkPeople = populations.filter(person => !person.jobs || person.jobs.length === 0);
  console.log("Liste des personnes sans emploi :", noWorkPeople);
}

// Appel de la fonction pour afficher les personnes sans emploi
displayNoWork();

function analyzePasswords() {
  let letterCounts = {};

  populations.forEach(person => {
      if (person.password) {
          person.password.split('').forEach(letter => {
              if (!letterCounts[letter]) {
                  letterCounts[letter] = 0;
              }
              letterCounts[letter]++;
          });
      }
  });

  console.log("Analyse des Mots de Passe:", letterCounts);
  return letterCounts;
}


let passwordAnalysis; // Déclaration de la variable

// Appel de la fonction pour l'analyse des mots de passe
passwordAnalysis = analyzePasswords();



//  Fetch pour récupérer des images de l'API
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(photos => {
        const photosContainer = document.getElementById('photos');
        photos.slice(0, 5).forEach(photo => { // Affichez les 5 premières photos
            const photoInfo = document.createElement('div');
            
            // Ajouter l'ID et le titre
            photoInfo.innerHTML = `
                <p>ID: ${photo.id}</p>
                <p>Title: ${photo.title}</p>
            `;

            // Ajouter l'image miniature
            const imgElement = document.createElement('img');
            imgElement.src = photo.thumbnailUrl;
            imgElement.alt = photo.title;

            // Ajouter les éléments au container
            photoInfo.appendChild(imgElement);
            photosContainer.appendChild(photoInfo);
        });
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des photos:', error);
    });

