// Carica il widget Twitter
window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
        t._e.push(f);
    };

    return t;
}(document, "script", "twitter-wjs"));

// Aggiungi il bottone di condivisione Twitter al contenitore
twttr.ready(function() {
    twttr.widgets.createShareButton(
        "https://www.pixelpro.cloud/portfolio/portfolio.html",
        document.getElementById("twitter-widget-container"),
        {
            size: "large",
            text: "Una pagina che ti potrebbe interessare",
            hashtags: "pixelpro,webdesign",
            via: "pixelprocloud"
        }
    );
});
