const navBar = document.querySelector("nav");
const menuBtns = document.querySelectorAll(".menu-icon");
const overlay = document.querySelector(".overlay");
const mainOpen = document.querySelector(".main-open")
const searchIcon = document.querySelector(".search-icon");
const searchBtn = document.querySelector(".searchBtn");



    menuBtns.forEach(menuBtn => {
        menuBtn.addEventListener("click", () => {
            navBar.classList.toggle("open");
            mainOpen.classList.toggle("mainMini")
        })
    })

    overlay.addEventListener("click", () => {
        navBar.classList.remove("open");
        mainOpen.classList.toggle("mainMini")
    })

    /* console.log(navBar, menuBtns, overlay); */

    searchIcon.addEventListener("click", function() {
        searchBtn.classList.toggle("active"); // Toggle the 'active' class
    });



    /* navigation function */
    function showContent(contentId) {
      // Hide all content elements
        mainOpen.classList.toggle("mainMini")
        var allContents = document.querySelectorAll('.content');

        allContents.forEach(function(content) {
            content.classList.remove('active');
        });

      // Show the selected content
        var selectedContent = document.getElementById(contentId);
        selectedContent.classList.add('active');
        navBar.classList.remove("open");
    }

