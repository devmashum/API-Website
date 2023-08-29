const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);
}
const displayPhones = phones => {
    // console.log(phones);
    const phoneContainer = document.getElementById('phone-container');
    // clear phone container before adding new cards

    phoneContainer.textContent = ' ';
    // display show all button if there are more then 12 phones(ei section ta slice er uporer ongsei hote hobe slice korar age)

    const showAllContainer = document.getElementById('show-all-container');

    if (phones.length > 12) {
        showAllContainer.classList.remove('hidden');
    } else {
        showAllContainer.classList.add('hidden');
    }

    // Display first 12 Phones
    phones = phones.slice(0, 12);

    phones.forEach(phone => {
        console.log(phone);
        // create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card p-5 bg-gray-100 shadow-xl`;
        phoneCard.innerHTML = `<figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);
    })
    toggleLoadingSpinner(false);
}

// handle search button
const handleSearch = () => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    loadPhone(searchText);
}
const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden');
    }
    else {
        loadingSpinner.classList.add('hidden')
    }
}
// loadPhone();