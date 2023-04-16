import { series } from './data.js';
var seriesTbody = document.getElementById('seriesTableBody');
var avgSeasonsElm = document.getElementById("avgSeasons");
renderSeriesInTable(series);
avgSeasonsElm.innerHTML = "".concat(getAvgSeasons(series));
function renderSeriesInTable(series) {
    console.log('Desplegando cursos');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAvgSeasons(series) {
    var avgSeasons = 0;
    series.forEach(function (serie) { return avgSeasons = avgSeasons + serie.seasons; });
    avgSeasons = avgSeasons / series.length;
    return avgSeasons;
}
