document.querySelector('.nav-toggle').addEventListener('click', (e) => {
    document.querySelector('.nav-toggle').classList.toggle('active');
    document.querySelector('.nav-menu').classList.toggle('active');
    
});

document.querySelectorAll("li").forEach(function (i){
    i.addEventListener("click", () => {
        document.querySelector('.nav-toggle').classList.toggle('active');
        document.querySelector('.nav-menu').classList.toggle('active');
        
    });
});




