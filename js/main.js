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
    displayTrees(data.plants);
}
getTrees()

const displayTrees = trees => {
    const treeContainer = document.getElementById('tree-container')
    trees.forEach(tree => {
        const div = document.createElement('div')
        console.log(tree);
        div.innerHTML = `
        <div class="card bg-base-100 shadow-sm h-full">
                        <figure class="aspect-[4/3]">
                            <img class="w-full aspect-[4/3]" src=${tree.image} />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">${tree.name}</h2>
                            <p>${tree.description}</p>
                            <div class="flex justify-between">
                                <span class="bg-[#DCFCE7] text-[#15803D] p-1 rounded-lg">${tree.category}</span>
                                <span>$${tree.price}</span>
                            </div>
                            <div class="">
                                <button class="btn btn-primary w-full bg-[#15803D] rounded-full border-0">Add To Cart</button>
                            </div>
                        </div>
                    </div>
        `
        treeContainer.append(div)
    });
}