
$(document).ready(function () {



    $('#demo').on('click', function () {
        demoChart();
        demoCircle();
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
            };
        myGraph.destroy();
        myGraph = new Chart(document.getElementById("demoChart").getContext("2d")).Bar(demoData, {});

        generateLegend(demoData);
    }

    function demoCircle() {
        var myGraph = new Chart(document.getElementById("demoCircle").getContext("2d")).Line({}, {}),
            ctx = document.getElementById("demoCircle").getContext("2d"),
            demoCircle = [
                {
                    value: 250,
                    color: "#F7464A",
                    highlight: "#FF5A5E",
                    label: "Outgoing Call"
                },
    {
        value: 80,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Incoming Call"
    },
    {
        value: 20,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Face To Face"
    },
            ]
        myGraph.destroy();
        myGraph = new Chart(document.getElementById("demoCircle").getContext("2d")).Pie(demoCircle, {});
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