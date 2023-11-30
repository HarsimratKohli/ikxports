class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="top-fixed">

        <!-- Banner -->
        <div class="header">    
            <img class="left_header_icon" src="../assets/instagram.webp" alt="instagram">
            <div style="
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: end;">
                    <span class="header-text">+91 98552-77077</span>
                    <span class="header-text">inderjeetexports@gmail.com</span>
            </div>
        </div>

        <!-- Navigation -->
        <div class="container-top">
            <div class="cnt-row">
                <img src="../assets/logo.jpg" onclick="goToHome()" alt="" style="max-width: 100px; margin-right:auto;">
                <div style="width: 100%;">
                    <nav class="nav-menu">
                        <a class="nav-l" href="">Tractor gears</a> 
                        <a class="nav-l" href="">Truck gears</a> 
                        <a class="nav-l  href="../catalogue.html" style="padding-right:25px" onclick="goToCatPage()">Catalog</a>
                        <div class="nav-l">
                            <button id="btn_qte" class="quote_btn" onclick="goToQuotePage()">Get Quote</button>
                        </div>
                    </nav> 
                </div>
            </div>
        </div>
        </div>
        `;
    }

};

function goToHome () {
    location.href = "../index.html";
};

function goToQuotePage () {
    location.href = "../quote.html";
};

function goToCatPage () {
    location.href = "../catalogue.html";
};

customElements.define('header-component', Header);