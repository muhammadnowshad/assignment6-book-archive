// fetch('https://openlibrary.org/search.json?q=${searchText}')
// .then(res => res.json)
// .then(data => console.log(data))

const searchBook = () => {
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value;
    searchField.value = "";
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))
}

const displaySearchResult = docs => {
    // console.log(data)
    const searchResult = document.getElementById('search-result');
    docs.forEach(doc => {
        console.log(doc)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        
        <div class="card h-100 p-3">
            <h4><span class="bold">Book Name:</span> ${doc.title}</h4>
            <p><span class="bold">Book Author:</span> ${doc.author_name}</p>
            <p><span class="bold">Book Publisher:</span> ${doc.publisher}</p>
            <p><span class="bold">Book First Publish:</span> ${doc.publish_date}</p>
        </div>
        `;
        searchResult.appendChild(div);
    })
}