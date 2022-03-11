const charts = document.querySelectorAll(".chart");

charts.forEach(function (chart) {
  var ctx = chart.getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Ovo", "Frango", "Arroz", "Iogurte"],
      datasets: [
        {
          label: "# Quantidade",
          data: [19, 15, 10, 5, 8, 3],
          backgroundColor: [
            "rgba(106,90,205, 0.5)"
          ],
          borderColor: [
            "#3b128b",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
$(document).ready(function () {
  $(".data-table").each(function (_, table) {
    $(table).DataTable();
  });
});

var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
type: 'line',
data: {
labels: ["Novembro", "Dezembro", "Janeiro", "Fevereiro", "Março"],
datasets: [{
label: "Peso",
data: [65, 63, 68, 72, 67, 59, 57],
backgroundColor: [
  'rgba(106,90,205, 0.5)',
],
borderColor: [
'#3b128b',
],
borderWidth: 2
}
]
},
options: {
responsive: true
}
});