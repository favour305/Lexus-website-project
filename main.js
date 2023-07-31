var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})
document.querySelector('.click').addEventListener('click', (e) => {
    // Do whatever you want
    
    alert('Your Message Has Been Sent')
    // e.target.textContent = 'Clicked!';
  });