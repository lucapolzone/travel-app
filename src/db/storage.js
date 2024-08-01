// Funzione getter: prende locations[] da localStorage
export function getLocations() {
  const localValue = localStorage.getItem('locations');
  return localValue ? JSON.parse(localValue) : [];
};

// Funzione setter: salva locations[] nel localStorage
export function setLocations(locations) {
  localStorage.setItem('locations', JSON.stringify(locations));
};


// Aggiungo una nuova location al localStorage
export function addLocation(newLocation) {

  //prendo locations[]
  const locations = getLocations();
  
  //pusho newLocation in locations[]
  locations.push(newLocation);
  
  //salvo locations[]
  setLocations(locations);
};

