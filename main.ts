import { Serie } from './serie.js';

import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('seriesTableBody')!;
let seriesCbody: HTMLElement = document.getElementById('cards')!;
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
                           trElement.addEventListener("click", function(){mostrarCard(series, serie.id);});
    seriesTbody.appendChild(trElement);
  });
}


function getAvgSeasons(series: Serie[]): number {
  let avgSeasons: number = 0;
  series.forEach((serie) => avgSeasons = avgSeasons + serie.seasons);
  avgSeasons = avgSeasons/series.length;
  return avgSeasons;
}

function mostrarCard(series: Serie[], id:number): void {
  console.log('mostrando cartas...');
  switch(id){
    case 1:{
      clearCard();
      let ulElement = document.createElement("ul");
      ulElement.innerHTML = `<li><img src="${series[0].image}" class="card-img-top" alt="Imagen-Serie"></li>
                             <li style="font-weight: bold;">${series[0].name}</li>
                             <li>${series[0].description}</li>
                             <li><a href="${series[0].link}" class="card-link">Ver mas contenido...</a></li>`;
      seriesCbody.appendChild(ulElement);
      break;
    }
    case 2:{
      clearCard();
      let ulElement = document.createElement("ul");
      ulElement.innerHTML = `<li><img src="${series[1].image}" class="card-img-top" alt="Imagen-Serie"></li>
                             <li style="font-weight: bold;">${series[1].name}</li>
                             <li>${series[1].description}</li>
                             <li><a href="${series[1].link}" class="card-link">Ver mas contenido...</a></li>`;
      seriesCbody.appendChild(ulElement);
      break;
    }
    case 3:{
      clearCard();
      let ulElement = document.createElement("ul");
      ulElement.innerHTML = `<li><img src="${series[2].image}" class="card-img-top" alt="Imagen-Serie"></li>
                             <li style="font-weight: bold;">${series[2].name}</li>
                             <li>${series[2].description}</li>
                             <li><a href="${series[2].link}" class="card-link">Ver mas contenido...</a></li>`;
      seriesCbody.appendChild(ulElement);
      break;
    }
    case 4:{
      clearCard();
      let ulElement = document.createElement("ul");
      ulElement.innerHTML = `<li><img src="${series[3].image}" class="card-img-top" alt="Imagen-Serie"></li>
                             <li style="font-weight: bold;">${series[3].name}</li>
                             <li>${series[3].description}</li>
                             <li><a href="${series[3].link}" class="card-link">Ver mas contenido...</a></li>`;
      seriesCbody.appendChild(ulElement);
      break;
    }
    case 5:{
      clearCard();
      let ulElement = document.createElement("ul");
      ulElement.innerHTML = `<li><img src="${series[4].image}" class="card-img-top" alt="Imagen-Serie"></li>
                             <li style="font-weight: bold;">${series[4].name}</li>
                             <li>${series[4].description}</li>
                             <li><a href="${series[4].link}" class="card-link">Ver mas contenido...</a></li>`;
      seriesCbody.appendChild(ulElement);
      break;
    }
    case 6:{
      clearCard();
      let ulElement = document.createElement("ul");
      ulElement.innerHTML = `<li><img src="${series[5].image}" class="card-img-top" alt="Imagen-Serie"></li>
                             <li style="font-weight: bold;">${series[5].name}</li>
                             <li>${series[5].description}</li>
                             <li><a href="${series[5].link}" class="card-link">Ver mas contenido...</a></li>`;
      seriesCbody.appendChild(ulElement);
      break;
    }
  };
}

function clearCard() {
  while (seriesCbody.hasChildNodes()) {
    if (seriesCbody.firstChild != null) {
      seriesCbody.removeChild(seriesCbody.firstChild);
    }
  }
}
