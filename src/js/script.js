import '../style/style.scss';

window.addEventListener('load', () => {
    const canva = setTimeout(() => {
        document.body.classList.remove('not-loaded');
        clearTimeout(canva);
    }, 1000);
});
