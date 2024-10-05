import axios from 'axios';
const key = '46313430-1fc63ba230ea17501380deea6';

export default async function imageFetch(
  searchResult,
  page = 1,
  per_page = 15
) {
  try {
    const responce = await axios.get(
      `https://pixabay.com/api/?key=${key}&q=${searchResult}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`
    );
    return responce.data;
  } catch (error) {
    console.log(error);
  }
}
