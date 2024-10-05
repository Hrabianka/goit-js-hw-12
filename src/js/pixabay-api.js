const key = '46313430-1fc63ba230ea17501380deea6';

export default function imageFetch(searchResult) {
  const url =
    'https://pixabay.com/api/?key=' +
    key +
    '&q=' +
    encodeURIComponent(searchResult) +
    '&per_page=45' +
    '&image_type=photo' +
    '&orientation=horizontal' +
    '&safesearch=true';

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log('Error:', error));
}
