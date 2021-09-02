// search book function 
const searchBook = () => {
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value;
    // clear field 
    searchField.value = "";

    //erorr handle
    const erorr = document.getElementById('erorr');
    erorr.textContent = '';
    if (searchText === ''){
        erorr.innerHTML = `
            <p class="text-center count m-0 text-danger">Please search by name</p>
        `;
    }
    else {
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data))
    }
}

// show book display 
const displaySearchResult = data => {
    // search result count 
    const resultCount = data.numFound;
    const countDiv = document.getElementById('resultCount');
    countDiv.textContent = '';
    countDiv.innerHTML = `
    <p class="text-center count m-0 text-danger">About ${resultCount} results</p>
    `;

    // show book cover, name etc 
    const docs = data.docs
    const searchResult = document.getElementById('search-result');
    //clear field
    searchResult.textContent = '';
    // function 
    docs.forEach(doc => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100 bg-light p-3">
                <img class="img-fluid h-75" src='https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg' alt='Image not found'>
                <h5 class="mt-4 mb-3"><span class="bold">Book Name:</span> ${doc.title}</h5>
                <p class='lh-1 text-danger fst-italic'><span class="bold text-dark fst-normal">Book Author:</span> ${doc.author_name[0]}</p>
                <p class='lh-1'><span class="bold">Book Publisher:</span> ${doc.publisher[0]}</p>
                <p class='lh-1'><span class="bold">Book First Publish:</span> ${doc.first_publish_year}</p>
            </div>
            `;
        searchResult.appendChild(div);
    });
}
