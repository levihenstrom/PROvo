document.addEventListener("DOMContentLoaded", function() {
    const trace1 = {
      x: [1, 2, 3, 4, 5],
      y: [10, 15, 13, 17, 22],
      mode: 'lines+markers',
      name: 'Egor Demin'
    };
    const trace2 = {
      x: [1, 2, 3, 4, 5],
      y: [8, 10, 12, 13, 15],
      mode: 'lines+markers',
      name: 'Jimmer Fredette'
    };
    const layout = {
      title: 'Game-by-Game Points (Example)',
      xaxis: { title: 'Game #'},
      yaxis: { title: 'Points' }
    };
    Plotly.newPlot('points-chart', [trace1, trace2], layout);
  });