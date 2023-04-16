import { Serie } from './serie.js';

import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('seriesTableBody')!;
const avgSeasonsElm: HTMLElement = document.getElementById("avgSeasons")!;

renderSeriesInTable(series);
avgSeasonsElm.innerHTML = `Seassons average: ${getAvgSeasons(series)}`


function renderSeriesInTable(series: Serie[]): void {
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


function getAvgSeasons(series: Serie[]): number {
  let avgSeasons: number = 0;
  series.forEach((serie) => avgSeasons = avgSeasons + serie.seasons);
  avgSeasons = avgSeasons/series.length;
  return avgSeasons;
}
