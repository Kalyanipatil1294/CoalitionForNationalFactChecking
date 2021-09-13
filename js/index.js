jQuery(document).ready(function ($) {
    handleLinkChange(window.location.hash);

    window.onhashchange = function (e) {
        handleLinkChange(window.location.hash)
    }

    function handleLinkChange(hash) {
        const target = hash || "#overview";
        window.location.hash = target;

        $("section").removeClass("active-section");
        $(target).addClass("active-section");
        window.scrollTo(0, 0);
        let navigation_links_li = $("#nav-wrap li");
        navigation_links_li.removeClass("current")
        let str2 = window.location.hash + "_link"
        let $str2 = $(str2);
        $str2.addClass("current");
    }

    $('.section_selector').on('click', function (e) {
        e.preventDefault();
        handleLinkChange(this.hash)
    });
});

function toggleDisplay (num) {
    if(document.getElementById(`answer_${num}`).style.display === "block") {
        const element = document.getElementById(`icon_${num}`);
        element.classList.remove("fa-minus-circle");
        element.classList.add("fa-plus-circle");
        document.getElementById(`answer_${num}`).style.display = "none";
    } else {
        const element = document.getElementById(`icon_${num}`);
        element.classList.remove("fa-plus-circle");
        element.classList.add("fa-minus-circle");
        document.getElementById(`answer_${num}`).style.display = "block";
    }
}







