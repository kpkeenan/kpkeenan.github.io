
$(document).ready(function () {



    $('#demo').on('click', function () {
        demoChart();
    })

    function demoChart() {
        var myGraph = new Chart(document.getElementById("demoChart").getContext("2d")).Line({}, {}),
            ctx = document.getElementById("demoChart").getContext("2d"),
            demoData = {
                labels: ["departmentOne", "departmentTwo", "departmentThree"],
                datasets: [{
                    label: "Resolved",
                    fillColor: "red",
                    data: [20, 80, 92]
                },
                {
                    label: "Unresolved",
                    fillColor: "blue",
                    data: [92, 80, 20]
                }]
            }
        myGraph.destroy();
        myGraph = new Chart(document.getElementById("demoChart").getContext("2d")).Bar(demoData, {});
        generateLegend(demoData);
    }
    function generateLegend(graph) {
       
            var legend = '',
                datasets = graph.datasets;

            graphClass = "graph-legend";
            $('#callLogTitle').html("Call Center Data");
            for (var i = 0; i < graph.datasets.length; i++) {
                legend += '<li class=graph-legend><span id="' + datasets[i].label.replace(/ /g, "-") + '" class="' + graphClass + '" style="background: '
                   + graph.datasets[i].fillColor + ';" ></span>   ' + datasets[i].label + '  <i class="graph-legend fa fa-pie-chart fa-spin"></i></li>';
            }

            $('#legend').html(legend);
        }
});