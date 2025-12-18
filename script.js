const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

if  (openModal && modal) {  
    openModal.addEventListener("click", () => {
        modal.showModal();
    })
}
if (closeModal && modal) {
    closeModal.addEventListener("click", () => {
        modal.close();
    })
}


const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector('[data-slides]')
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})
const accordion = document.querySelector(".accordion");

if(accordion){
accordion.addEventListener('click', (e) => {
    const activePanel = e.target.closest(".accordion-panel");
    if(!activePanel) return;
    toggleAccordion(activePanel);
});
};

function toggleAccordion(panelToActivate) {
    const buttons = panelToActivate.parentElement.querySelectorAll("button");
    const contents = panelToActivate.parentElement.querySelectorAll('.accordion-content');
    console.log(buttons);
    buttons.forEach((button) => {
        button.setAttribute("aria-expanded", false);
    });

    contents.forEach((content) => {
        content.setAttribute("aria-hidden", true);
    });
    panelToActivate.querySelector('button').setAttribute('aria-expanded', true);
    panelToActivate.querySelector('.accordion-content').setAttribute('aria-hidden', false);
}