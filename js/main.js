const getCategories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/categories')
    const data = await res.json()
    displayCategories(data.categories);
}
getCategories()
const displayCategories = categories => {
    const container = document.getElementById('category-container')
    categories.forEach(category => {
        const li = document.createElement('li')
        li.innerText= category.category_name
        li.classList.add( 'text-black', 'font-medium', 'py-2', 'px-3', 'rounded-lg')
        container.appendChild(li)
    });
}

const getTrees = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/plants')
    const data = await res.json()
    console.log(data.plants);
}
getTrees()