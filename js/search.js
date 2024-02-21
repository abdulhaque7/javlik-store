const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');

searchButton.addEventListener('click', function() {
  const searchTerm = searchInput.value;
  if (searchTerm) {
    search(searchTerm);
  }
});

function search(searchTerm) {
  const apiKey = 'AIzaSyBBn1XXkbi4IAsgvOAEwpY8IwqzB83p-nk'; // Replace with your API key
  const cx = 'https://developers.google.com/custom-search/v1/overview#search_engine_id'; // Replace with your Custom Search Engine ID
  const url = `https://www.googleapis.com/customsearch/v1?q=${searchTerm}&cx=${cx}&key=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayResults(data.items);
    })
    .catch(error => {
      console.error('Error fetching search results:', error);
    });
}

function displayResults(items) {
  searchResults.innerHTML = '';
  items.forEach(item => {
    const resultItem = document.createElement('div');
    resultItem.innerHTML = `
      <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
      <p>${item.snippet}</p>
      <hr>
    `;
    searchResults.appendChild(resultItem);
  });
}