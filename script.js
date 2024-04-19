// script.js
document.addEventListener("DOMContentLoaded", function() {
    // 스크롤 상단 버튼
    var scrollTopBtn = document.querySelector(".scroll-top-btn");
    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // 스크롤 하단 버튼
    var scrollBottomBtn = document.querySelector(".scroll-bottom-btn");
    scrollBottomBtn.addEventListener("click", function() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    });

    // 활성 상태를 표시하기 위해 헤더의 버튼 활성화
    var headerLinks = document.querySelectorAll("header nav ul li a");
    headerLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            headerLinks.forEach(function(item) {
                item.classList.remove("active");
            });
            this.classList.add("active");
        });
    });

    // 스크롤 이벤트를 사용하여 현재 위치에 따라 헤더 버튼 활성화
    window.addEventListener("scroll", function() {
        var currentScroll = window.pageYOffset;
        var sections = document.querySelectorAll("section");
        sections.forEach(function(section) {
            if (currentScroll >= section.offsetTop && currentScroll < section.offsetTop + section.offsetHeight) {
                var sectionId = section.getAttribute("id");
                headerLinks.forEach(function(link) {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === sectionId) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });
});