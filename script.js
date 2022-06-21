// let aboutUsSection = document.querySelector(".about-us")
// console.log(aboutUsSection);

// aboutUsSection.classList.add("special")

// aboutUsSection.remove ("special")

window.addEventListener("scroll", function(){
    let reveals = this.document.querySelectorAll(".reveal")
    
    reveals.forEach(function(oneDiv){
        let windowHeight = window.innerHeight
        // velikost vitřní strany okna

        let revealTop = oneDiv.getBoundingClientRect().top
        console.log(revealTop);
        // vzdálenost vrchní hrany okna od hrany div reveal

        let revealPoint = 100
        // px

        if (revealTop < windowHeight - revealPoint){
            // nech bloky objevit
            oneDiv.classList.add("active")
        } else {
            oneDiv.classList.remove("active")
            // nech je zase zmizet
        }
    })

})