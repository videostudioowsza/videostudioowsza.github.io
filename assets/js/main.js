
window.onscroll = () => {
    const element = document.getElementById('logo');
    if (document.body.scrollTop > 115) {
        element.style.height = "45px";
    } else {
        element.style.height = "125px";
    }
}