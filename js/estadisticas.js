let navEstadisticas = document.querySelector(`[href="#estadisticas"]`)
navEstadisticas.onclick = function() {
  function renderChart(data, labels, bColor) {
    var ctx = document.getElementById("grafico").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Cantidad Alumnos",
            data: data,
            backgroundColor: bColor
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
  function generarColores() {
    let n1 = Math.floor(Math.random() * 255);
    let n2 = Math.floor(Math.random() * 255);
    let n3 = Math.floor(Math.random() * 255);
    let colores = `rgba(${n1},${n2},${n3},0.5)`;
    return colores;
  }
  let comunicacion2 = new Comunicacion();

  comunicacion2.obtenerCursos().then(arregloCursos => {
    let data = [];
    let labels = [];
    let bColor = [];
    arregloCursos.forEach(elemento => {
      color = generarColores();
      data.push(elemento.curso_alumnos.length);
      labels.push(elemento.curso_nom);
      bColor.push(color);
    });
    renderChart(data, labels, bColor);
  });
}
