document.addEventListener("DOMContentLoaded", function() {
    /* Selecting elements */
    const menuBtn = document.querySelector(".menu-btn");
    const sidebar = document.querySelector(".side-bar");
    const closeBtn = document.querySelector(".close-btn");

    /* Menu button */
    menuBtn.addEventListener("click", function() {
        sidebar.classList.add("active");
        menuBtn.style.visibility = "hidden";
    });

    /* Close button */
    closeBtn.addEventListener("click", function() {
        sidebar.classList.remove("active");
        menuBtn.style.visibility = "visible";
    });

    /* Sub-menu toggle */
    const subMenuBtns = document.querySelectorAll(".sub-btn");

    subMenuBtns.forEach(function(btn) {
        btn.addEventListener("click", function(event) {
            event.preventDefault();
            const container = document.getElementById(this.dataset.container);

            if (!container.classList.contains("active")) {
                // Add active to sub-menu
                container.classList.add("active");
                container.style.height = "auto";
                const height = container.scrollHeight + "px";
                container.style.height = height;
            } else {
                // Remove active from sub-menu
                container.style.height = "0px";
                container.addEventListener("transitionend", function() {
                    container.classList.remove("active");
                }, { once: true });  // Ensures the event listener runs only once
            }
        });
    });
});
