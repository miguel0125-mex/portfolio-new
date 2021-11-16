const d = document;

d.addEventListener('DOMContentLoaded', () => {
    showMenu("toggleId", "menuId");
});
const showMenu = (toggleId, menuId) => {
    const toggle = d.getElementById(toggleId),
        nav = d.getElementById(menuId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('is-active');
            nav.classList.toggle('is-active');
        })
    }
}