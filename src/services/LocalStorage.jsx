const LocalStorage = {
    get: (key, defaultValue) => {
        const localStorageData = localStorage.getItem(key);
        if (localStorageData === null) {
        return defaultValue;
        } else {
        return JSON.parse(localStorageData);
        }
    },

    set: (key, value) => {
        const localStorageData = JSON.stringify(value);
        localStorage.setItem(key, localStorageData);
    },

    remove: (key) => {
        localStorage.removeItem(key);
    },

    clear: () => {
        localStorage.clear();
    },
  };
  
  export default LocalStorage;
  