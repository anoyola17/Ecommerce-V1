fetch('../product_details.json')
    .then(response => response.json())
    .then(data => {

        displayProducts(data)

    })
    .catch(error => {
        console.error('Error fetching product details:', error);
    });

function displayProducts(arrayParam) {
    const productList = document.querySelector('[data-parent]');
    arrayParam.forEach((product) => {
        console.log(product)
        const productItem = document.createElement('div');
        productItem.classList.add('.product-list');
        productItem.innerHTML = `
            <h1>${product.name}</h1>
            <img src="${product.image}">
            <span>Price: $${product.price}</span>
            <p>${product.description}</p>
        `;
        productList.appendChild(productItem);
    });

}