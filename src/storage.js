
storage.interceptors.request.use(

    config => {

    // Get the token from localStorage

        const token = localStorage.getItem('token');
        
        // If the token exists, add it to the request headers
        if (token) {

            config.headers['Authorization'] = `Bearer ${token}`;

        }
        
        return config;

    },

    error => {

        // Handle the error

        return Promise.reject(error);

    }

);

export default storage;

