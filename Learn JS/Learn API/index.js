fetch(
  'https://api.giphy.com/v1/gifs/translate?api_key=XrH3yfAS1HKzr6qrIxqDza5XL8yea7Rw&s=cats'
)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (err) {
    console.log(err);
  });
