function getMoviesFromApiAsync () {
  return fetch('https://facebook.github.io/react-native/movies.json')
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson.movies;
  })
  .catch((error) => {
    console.log(error)
  })
}

async function getMoviesFromApi() {
  try {
    let response = await fetch ('https://facebook.github.io/react-native/movies.json');
    let responseJson = await response.json();
    return responseJson.movies;
  } catch (error) {
    console.log(error)
  }
}
