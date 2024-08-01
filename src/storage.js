const STORAGE_KEY = 'travel-app-locations';

export function fetchLocations() {
  const localValue = localStorage.getItem(STORAGE_KEY);
  return localValue ? JSON.parse(localValue) : [];
}

export function saveLocations(locations) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(locations));
}
