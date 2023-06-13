import { writable } from 'svelte/store';

// Initialize the store with an empty array as the initial value
const dataStore = writable([]);
export default dataStore
