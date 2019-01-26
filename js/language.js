$(document).ready(function() {    
    var cat = ["bio.html", "contact.html", "discografia.html", "galeria.html", "index.html", "noticies.html", "botiga.html"];
    var da = ["bio.html", "kontakt.html", "diskografi.html", "galleri.html", "index.html", "nyheder.html", "butik.html"];
    var en = ["bio.html", "contact.html", "discography.html", "gallery.html", "index.html", "news.html", "store.html"];
    var es = ["bio.html", "contacto.html", "discografia.html", "galeria.html", "index.html", "noticias.html", "tienda.html"];

    var links = document.getElementById("flags").firstElementChild.children;
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var urlParts = window.location.href.split("/");
        var currentLang = urlParts[3];
        var newLang = link.href.split("/")[3];
        if (currentLang == newLang) {
            link.href = "javascript:;";
        } else {
            for (var j = 4; j < urlParts.length; j++) {
                var part = urlParts[j];
                if (part.endsWith(".html")) {
                    var index;
                    switch(currentLang) {
                        case "cat":
                            index = cat.indexOf(part);
                            break; 
                        case "da":
                            index = da.indexOf(part);
                            break; 
                        case "en":
                            index = en.indexOf(part);
                            break; 
                        case "es":
                            index = es.indexOf(part);
                            break; 
                        default:
                            console.log("Current language not recognized.");
                    }
                    switch(newLang) {
                        case "cat":
                            part = cat[index];
                            break; 
                        case "da":
                            part = da[index];
                            break; 
                        case "en":
                            part = en[index];
                            break; 
                        case "es":
                            part = es[index];
                            break; 
                        default:
                            console.log("New language not recognized.");
                    }
                }
                link.href += "/" + part;
            }
        }
    }
});
