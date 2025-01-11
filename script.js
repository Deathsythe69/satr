// Destination data
const destinations = [
  { 
    name: 'Paris', 
    climate: 'mild', 
    activities: ['culture', 'food'], 
    budget: 'medium', 
    description: 'A beautiful city known for its art, fashion, and culture.',
    images: ['paris1.jpg', 'paris2.jpg', 'paris3.jpg']
  },
  { 
    name: 'Hawaii', 
    climate: 'tropical', 
    activities: ['beach', 'hiking'], 
    budget: 'high', 
    description: 'A tropical paradise with beautiful beaches and hiking trails.',
    images: ['hawaii1.jpg', 'hawaii2.jpg', 'hawaii3.jpg']
  },
  { 
    name: 'Japan', 
    climate: 'temperate', 
    activities: ['culture', 'shopping'], 
    budget: 'medium', 
    description: 'Known for its history, temples, and modern shopping districts.',
    images: ['japan1.jpg', 'japan2.jpg', 'japan3.jpg']
  }
  // Add more destinations here...
];

// Display Recommendations based on user input
function recommendDestination(preferences) {
  const filteredDestinations = destinations.filter(destination =>
    destination.climate === preferences.climate &&
    preferences.activities.every(activity => destination.activities.includes(activity)) &&
    destination.budget === preferences.budget
  );
  
  const recommendationsContainer = document.getElementById('destination-list');
  recommendationsContainer.innerHTML = ''; // Clear any previous content

  filteredDestinations.forEach(destination => {
    const destinationDiv = document.createElement('div');
    destinationDiv.classList.add('destination');
    destinationDiv.innerHTML = `
      <h3>${destination.name}</h3>
      <p>${destination.description}</p>
      <button onclick="showDestinationDetails('${destination.name}')">See Details</button>
    `;
    recommendationsContainer.appendChild(destinationDiv);
  });
}

// Show details of a selected destination
function showDestinationDetails(destinationName) {
  const destination = destinations.find(dest => dest.name === destinationName);
  if (!destination) return;

  document.getElementById('destination-description').innerText = destination.description;
  const imageElement = document.getElementById('destination-image');
  let currentImageIndex = 0;
  imageElement.src = destination.images[currentImageIndex];

  document.getElementById('next-button').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % destination.images.length;
    imageElement.src = destination.images[currentImageIndex];
  });

  document.getElementById('prev-button').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + destination.images.length) % destination.images.length;
    imageElement.src = destination.images[currentImageIndex];
  });
}

// Search functionality
document.getElementById('search-bar').addEventListener('input', function(event) {
  const query = event.target.value.toLowerCase();
  const recommendationsContainer = document.getElementById('destination-list');
  recommendationsContainer.innerHTML = ''; // Clear the current list

  destinations.forEach(destination => {
    if (destination.name.toLowerCase().includes(query)) {
      const destinationDiv = document.createElement('div');
      destinationDiv.classList.add('destination');
      destinationDiv.innerHTML = `
        <h3>${destination.name}</h3>
        <p>${destination.description}</p>
        <button onclick="showDestinationDetails('${destination.name}')">See Details</button>
      `;
      recommendationsContainer.appendChild(destinationDiv);
    }
  });
});

// Example of how to call the recommendation engine (hardcoded preferences)
const userPreferences = {
  climate: 'mild',
  activities: ['culture', 'food'],
  budget: 'medium'
};

recommendDestination(userPreferences);
