class ProductGrid extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        fetch('../assets/demo_list.json')
            .then(response => response.json())
            .then(products =>{
                console.log(products)
                let placeholder = document.querySelector('#container-main');
                let out = '<div class="product-list">';
                for (let product of products){
                    out += `
                    <div class="card">
                    <div class="title">${product.name}</div>
                    <img class="image" src=${product.image_src}></img>
                    <div class="text">${product.description}</div>
                    </div>
                    `;    
                }
                out += '</div>'
                this.innerHTML = out;
            })
    }

};

function goToHome () {
    location.href = "../index.html";
};

function goToQuotePage () {
    location.href = "../quote.html";
};

customElements.define('product-grid', ProductGrid);