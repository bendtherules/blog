window.onload = function() {

    var ele_sidebar_primary = document.getElementsByClassName("sidebar-primary")[0];
    var ele_posts           = document.getElementsByClassName("posts")[0];
    var ele_body_container  = document.getElementsByClassName("body-container")[0];

    function getWidth() {
        var w     = window,
            d     = document,
            e     = d.documentElement,
            g     = d.getElementsByTagName('body')[0],
            width = w.innerWidth || e.clientWidth || g.clientWidth;
        return width;
    }

    function sidebar_expand() {

        if (getWidth() <= 400) {
            ele_sidebar_primary.classList.add("sidebar-primary-active");
            ele_posts.classList.add("posts-active");
            ele_body_container.classList.add("body-container-active");
        }
    }

    function sidebar_collapse() {
        ele_sidebar_primary_active = document.getElementsByClassName("sidebar-primary-active")[0];
        ele_posts_active           = document.getElementsByClassName("posts-active")[0];
        ele_body_container_active  = document.getElementsByClassName("body-container-active")[0];

        if (ele_sidebar_primary_active && ele_posts_active) {

            ele_sidebar_primary_active.classList.remove("sidebar-primary-active");
            ele_posts_active.classList.remove("posts-active");
            ele_body_container_active.classList.remove("body-container-active");
        }
    }

    ele_sidebar_primary.onclick = sidebar_expand;
    ele_posts.onclick           = sidebar_collapse;

};
