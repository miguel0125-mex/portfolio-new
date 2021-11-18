const d = document;

d.addEventListener('DOMContentLoaded', () => {
    showMenu("toggleId", "menuId");
    link.forEach(n => n.addEventListener('click', linkAction));
});
const showMenu = (toggleId, menuId, link_menu) => {
    const toggle = d.getElementById(toggleId),
        nav = d.getElementById(menuId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('is-active');
            nav.classList.toggle('is-active');
        })
    }
}
const link = d.querySelectorAll("#link");
const menu = d.getElementById('menuId');
const btnMenu = d.getElementById('toggleId');

function linkAction() {
    link.forEach(n => n.classList.remove());
    this.classList.add();

    menu.classList.remove("is-active");
    btnMenu.classList.remove('is-active');
}