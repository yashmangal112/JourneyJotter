import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_PATH;

const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;


// Function to calculate the read time of a given text
export const calculateReadTime = (text: string, readingSpeed: number = 150): string => {
  // Split the text into words
  const words: string[] = text.trim().split(/\s+/);

  // Calculate the total number of words
  const wordCount: number = words.length;

  // Calculate the read time in minutes
  const readTime: number = Math.ceil(wordCount / readingSpeed);

  return `${readTime} min read`;
};
