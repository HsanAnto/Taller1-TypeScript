import { series } from './data.js';
let seriesTbody = document.getElementById('seriesTableBody');
const avgSeasonsElm = document.getElementById("avgSeasons");
renderSeriesInTable(series);
avgSeasonsElm.innerHTML = `Seassons average: ${getAvgSeasons(series)}`;
function renderSeriesInTable(series) {
    console.log('Desplegando cursos');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}
function getAvgSeasons(series) {
    let avgSeasons = 0;
    series.forEach((serie) => avgSeasons = avgSeasons + serie.seasons);
    avgSeasons = avgSeasons / series.length;
    return avgSeasons;
}
