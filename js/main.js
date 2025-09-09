const getCategories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/categories')
    const data = await res.json()
    displayCategories(data.categories);
}
const setLoading = isLoading => {
    if (isLoading === true) {
        document.getElementById('loading-container').classList.remove('hidden')
        document.getElementById('tree-container').classList.add('hidden')

    }
    else {
        document.getElementById('loading-container').classList.add('hidden')
        document.getElementById('tree-container').classList.remove('hidden')

    }

}


getCategories()
const displayCategories = categories => {
    const container = document.getElementById('category-container')
    categories.forEach(category => {
        const li = document.createElement('li')
        li.innerHTML = `
        <a onclick="getCategoryById(${category.id})" id="category-${category.id}" class="text-black font-medium cursor-pointer py-2 px-3 rounded-lg category">${category.category_name}</a>
        `

        container.appendChild(li)

    });
}

const getTrees = () => {
    setLoading(true)
    fetch('https://openapi.programming-hero.com/api/plants')
        .then(res => res.json())
        .then(data => displayTrees(data.plants))
}
getTrees()

const displayTrees = trees => {
    const treeContainer = document.getElementById('tree-container')
    treeContainer.textContent = ''

    trees.forEach(tree => {
        const div = document.createElement('div')
        div.innerHTML = `
        <div  class="card bg-base-100 shadow-sm h-full">
                        <figure class="aspect-[4/3]">
                            <img class="w-full aspect-[4/3]" src=${tree.image} />
                        </figure>
                        <div class="card-body">
                            <h2 onclick="showDetails(${tree.id})" class="card-title">${tree.name}</h2>
                            <p>${tree.description}</p>
                            <div class="flex justify-between">
                                <span class="bg-[#DCFCE7] text-[#15803D] p-1 rounded-lg">${tree.category}</span>
                                <span>$${tree.price}</span>
                            </div>
                            <div class="">
                                <button onclick="addToCart(${tree.id})" class="btn btn-primary w-full bg-[#15803D] rounded-full border-0">Add To Cart</button>
                            </div>
                        </div>
                    </div>
        `
        treeContainer.append(div)
    });
    setLoading(false)


}

let cartItems = []

const addToCart = async id => {
    const res = await fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    const data = await res.json()
    cartItems.push(data.plants)
    showCartItems()
}

const removeFromCart = id => {
    const remaining = cartItems.filter(item => item.id !== id)
    cartItems = remaining
    showCartItems()

}




const showCartItems = () => {
    const cartContainer = document.getElementById('cart-container')
    const totalPriceText = document.getElementById('total-price')
    let totalPrice = 0

    cartContainer.textContent = ''
    cartItems.forEach(cart => {
        const div = document.createElement('div')
        totalPrice = totalPrice + cart.price
        div.innerHTML = `
        <div class="bg-[#F0FDF4] py-2 px-3 rounded-md flex justify-between items-center">
                            <div>
                                <h3 class="font-bold">${cart.name}</h3>
                                <p class="text-[#1F2937] opacity-80">${cart.price} x 1</p>
                            </div>
                            <div>
                                <span onclick="removeFromCart(${cart.id})" class="text-[#1F2937] opacity-80 cursor-pointer"><i class="fa-solid fa-xmark"></i></span>
                            </div>

                        </div>
        `
        cartContainer.append(div)

    })
    totalPriceText.innerText = totalPrice
}

const showDetails = id => {

    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
        .then(res => res.json())
        .then(data => {
            const tree = data.plants
            console.log(tree);
            const modalBox = document.getElementById('modal-box')
            modalBox.innerHTML = `
        <h2 class="text-2xl font-bold">${tree.name}</h2>
                    <img class="" src=${tree.image} alt="">
                    <p><span class="font-bold">Category: </span>${tree.category}</p>
                    <p><span class="font-bold">Price: </span>$${tree.price}</p>
                    <p><span class="font-bold">Description: </span>${tree.description}</p>
        `
        })
    my_modal_5.showModal()
}

const getCategoryById = async id => {
    setLoading(true)
    const res = await fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    const data = await res.json()
    const allCategory = document.querySelectorAll('.category')
    console.log(allCategory);
    for (const category of allCategory) {
        category.classList.remove('active')
    }
    const categoryBtn = document.getElementById(`category-${id}`)
    categoryBtn.classList.add('active')
    console.log(categoryBtn);
    displayCategoryById(data.plants);
}
const displayCategoryById = trees => {
    const treeContainer = document.getElementById('tree-container')
    treeContainer.textContent = ''
    trees.forEach(tree => {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card bg-base-100 shadow-sm h-full">
                        <figure class="aspect-[4/3]">
                            <img class="w-full aspect-[4/3]" src=${tree.image} />
                        </figure>
                        <div class="card-body">
                            <h2 onclick="showDetails(${tree.id})" class="card-title">${tree.name}</h2>
                            <p>${tree.description}</p>
                            <div class="flex justify-between">
                                <span class="bg-[#DCFCE7] text-[#15803D] p-1 rounded-lg">${tree.category}</span>
                                <span>$${tree.price}</span>
                            </div>
                            <div class="">
                                <button onclick="addToCart(${tree.id})" class="btn btn-primary w-full bg-[#15803D] rounded-full border-0">Add To Cart</button>
                            </div>
                        </div>
                    </div>
        `
        treeContainer.append(div)
    });

    setLoading(false)

}