// Funzione getter: prende locations[] da localStorage
export function getLocations() {
  return JSON.parse(localStorage.getItem('locations')) || [];
};

// Funzione setter: salva locations[] nel localStorage
export function setLocations(locations) {
  localStorage.setItem('locations', JSON.stringify(locations));
};

// Funzione per creare la slug dinamicamente
function createSlug(date) {
  const [day, month] = date.split('/');
  return `${day}-${month}`;
}

export function addLocation(newLocation) {
  const locations = getLocations();

  // Trova se esiste già un gruppo di localizzazioni per la data fornita
  let locationGroup = locations.find(loc => loc.date === newLocation.date);
  
  if (locationGroup) {
    // Se il gruppo di localizzazioni esiste, aggiunge la nuova tappa agli stages di quel gruppo
    locationGroup.stages.push({
      name: newLocation.name,
      description: newLocation.description
    });
  } else {
    // Se il gruppo di localizzazioni non esiste, crea un nuovo gruppo e aggiunge la tappa
    locations.push({
      id: createSlug(newLocation.date), // Aggiunge la slug qui      
      date: newLocation.date,
      stages: [{
        name: newLocation.name,
        description: newLocation.description
      }]
    });
  }

  // Ordinamento per data crescente
  locations.sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split('/').map(Number);
    const [dayB, monthB, yearB] = b.date.split('/').map(Number);

    // Converti le date in formato YYYYMMDD per facilitare il confronto
    const dateA = yearA * 10000 + monthA * 100 + dayA;
    const dateB = yearB * 10000 + monthB * 100 + dayB;

    return dateA - dateB;
  });

  setLocations(locations);
}
