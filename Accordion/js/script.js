let el = document.createElement("div")

document.querySelector(".content").prepend(el)

// this for check online
window.addEventListener('online', (event) => {
    el.textContent = "You are now connected to the network."
    el.className = "alert"
    el.classList.add("alert-success")
});


// this for check offline
window.addEventListener('offline', (event) => {
    el.textContent = "The network connection has been lost."
    el.className = "alert"
    el.classList.add("alert-danger")
});


// accordion

let accordions = document.querySelectorAll(".accordion")

accordions.forEach(accordion => {
    Array.from(accordion.children).forEach(wrapper => {
        if (wrapper.classList.contains("show")) {
            wrapper.querySelector("div").style.maxHeight = wrapper.querySelector("div").scrollHeight + 30 + "px"
        }

        wrapper.querySelector("span").addEventListener("click", e => {
            let span = e.target;
            let wrapper = span.parentElement
            let div = span.nextElementSibling
            wrapper.classList.toggle("show")

            if (wrapper.classList.contains("show")) {
                div.style.maxHeight = div.scrollHeight + 30 + "px"
            } else {
                div.style.maxHeight = null
            }

            Array.from(accordion.children).forEach(w => {
                if (w != wrapper) {
                    w.classList.remove("show")
                    w.querySelector('div').style.maxHeight = null
                }
            })
        })
    })

})
