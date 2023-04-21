import { series } from './data.js';
var seriesTbody = document.getElementById('seriesTableBody');
var seriesCbody = document.getElementById('cards');
var avgSeasonsElm = document.getElementById("avgSeasons");
renderSeriesInTable(series);
avgSeasonsElm.innerHTML = "Seassons average: ".concat(getAvgSeasons(series));
function renderSeriesInTable(series) {
    console.log('Desplegando cursos');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        trElement.addEventListener("click", function () { mostrarCard(series, serie.id); });
        seriesTbody.appendChild(trElement);
    });
}
function getAvgSeasons(series) {
    var avgSeasons = 0;
    series.forEach(function (serie) { return avgSeasons = avgSeasons + serie.seasons; });
    avgSeasons = avgSeasons / series.length;
    return avgSeasons;
}
function mostrarCard(series, id) {
    console.log('mostrando cartas...');
    switch (id) {
        case 1: {
            clearCard();
            var ulElement = document.createElement("ul");
            ulElement.innerHTML = "<li><img src=\"".concat(series[0].image, "\" class=\"card-img-top\" alt=\"Imagen-Serie\"></li>\n                             <li style=\"font-weight: bold;\">").concat(series[0].name, "</li>\n                             <li>").concat(series[0].description, "</li>\n                             <li><a href=\"").concat(series[0].link, "\" class=\"card-link\">Ver mas contenido...</a></li>");
            seriesCbody.appendChild(ulElement);
            break;
        }
        case 2: {
            clearCard();
            var ulElement = document.createElement("ul");
            ulElement.innerHTML = "<li><img src=\"".concat(series[1].image, "\" class=\"card-img-top\" alt=\"Imagen-Serie\"></li>\n                             <li style=\"font-weight: bold;\">").concat(series[1].name, "</li>\n                             <li>").concat(series[1].description, "</li>\n                             <li><a href=\"").concat(series[1].link, "\" class=\"card-link\">Ver mas contenido...</a></li>");
            seriesCbody.appendChild(ulElement);
            break;
        }
        case 3: {
            clearCard();
            var ulElement = document.createElement("ul");
            ulElement.innerHTML = "<li><img src=\"".concat(series[2].image, "\" class=\"card-img-top\" alt=\"Imagen-Serie\"></li>\n                             <li style=\"font-weight: bold;\">").concat(series[2].name, "</li>\n                             <li>").concat(series[2].description, "</li>\n                             <li><a href=\"").concat(series[2].link, "\" class=\"card-link\">Ver mas contenido...</a></li>");
            seriesCbody.appendChild(ulElement);
            break;
        }
        case 4: {
            clearCard();
            var ulElement = document.createElement("ul");
            ulElement.innerHTML = "<li><img src=\"".concat(series[3].image, "\" class=\"card-img-top\" alt=\"Imagen-Serie\"></li>\n                             <li style=\"font-weight: bold;\">").concat(series[3].name, "</li>\n                             <li>").concat(series[3].description, "</li>\n                             <li><a href=\"").concat(series[3].link, "\" class=\"card-link\">Ver mas contenido...</a></li>");
            seriesCbody.appendChild(ulElement);
            break;
        }
        case 5: {
            clearCard();
            var ulElement = document.createElement("ul");
            ulElement.innerHTML = "<li><img src=\"".concat(series[4].image, "\" class=\"card-img-top\" alt=\"Imagen-Serie\"></li>\n                             <li style=\"font-weight: bold;\">").concat(series[4].name, "</li>\n                             <li>").concat(series[4].description, "</li>\n                             <li><a href=\"").concat(series[4].link, "\" class=\"card-link\">Ver mas contenido...</a></li>");
            seriesCbody.appendChild(ulElement);
            break;
        }
        case 6: {
            clearCard();
            var ulElement = document.createElement("ul");
            ulElement.innerHTML = "<li><img src=\"".concat(series[5].image, "\" class=\"card-img-top\" alt=\"Imagen-Serie\"></li>\n                             <li style=\"font-weight: bold;\">").concat(series[5].name, "</li>\n                             <li>").concat(series[5].description, "</li>\n                             <li><a href=\"").concat(series[5].link, "\" class=\"card-link\">Ver mas contenido...</a></li>");
            seriesCbody.appendChild(ulElement);
            break;
        }
    }
    ;
}
function clearCard() {
    while (seriesCbody.hasChildNodes()) {
        if (seriesCbody.firstChild != null) {
            seriesCbody.removeChild(seriesCbody.firstChild);
        }
    }
}
