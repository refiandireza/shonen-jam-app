import profil from '../../img/Reza 1.png';
class CardAuthor extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="biodata shadow d-flex align-items-center p-3">
                <div class="img ms-2">
                    <img src="${profil}" loading="lazy" alt="">
                </div>
                <div class="detail ms-3 ">
                    <h4>Refiandi Reza S</h4>
                    <p>Front-End Developer</p>
                    <div class="socmed">
                        <a><i class="fab fa-instagram"></i></a>
                        <a><i class="fab fa-github"></i></a>
                        <a><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('card-author', CardAuthor);