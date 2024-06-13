import axios from 'axios';

// Create an Axios instance with default settings
const BASE_URL: string = process.env.VITE_API_PATH as string;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});

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
