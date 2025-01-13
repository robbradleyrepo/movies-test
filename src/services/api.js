// src/services/api.js
import axios from 'axios';

const API_URL = 'https://november7-730026606190.europe-west1.run.app/movies/';

const handleAxiosError = (error) => {
  if (error.response) {
    console.error(`Server Error: ${error.response.status} - ${error.response.data}`);
    switch (error.response.status) {
      case 204:
        throw new Error('No content available because this request was redirected.');
      case 400:
        throw new Error('Hey there! The request was invalid. Please double-check and try again.');
      case 401:
        throw new Error('Unauthorized: Please log in and try again.');
      case 403:
        throw new Error('Forbidden: You do not have permission to access this resource.');
      case 404:
        throw new Error('Oops! We couldn’t find what you’re looking for. Please check the URL or try searching for something else.');
      case 429:
        throw new Error('Too Many Requests: You have exceeded the rate limit. Please try again later.');
      case 500:
        throw new Error('Yikes! Something went wrong on our end. Please try again later.');
      case 502:
        throw new Error('Bad Gateway: The server is currently unavailable. Please try again later.');
      case 503:
        throw new Error('Service Unavailable: The server is overloaded or down for maintenance. Please try again later.');
      case 504:
        throw new Error('Gateway Timeout: The request took too long to complete. Please try again later.');
      default:
        throw new Error(`Heads up! An unexpected error occurred: ${error.response.status}. Please try again later.`);
    }
  } else if (error.request) {
    console.error('No response received from the server.');
    throw new Error('Hmm, looks like we’re not getting any response. Please check your internet connection and retry.');
  } else {
    console.error(`Error: ${error.message}`);
    throw new Error(`Oh no! An error occurred: ${error.message}. Please give it another shot.`);
  }
};

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}`);

    if (response.status >= 400 && response.status < 600) {
      // Catch any other status codes that indicate an error
      handleAxiosError({ response });
    }

    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};
