const panel = document.querySelectorAll(".flex-child")

panel.forEach((el) => {
    el.addEventListener("click", () => {
        // Loop through all panels again and find an active panel and close it. 
        panel.forEach((e) => {
            if (e.classList.contains("active")) {
                e.classList.remove("active");
            }
        })
        el.classList.add("active");
        
    })
})