
$(document).ready(function () {

    $(function () {
        highchart();
        buildTable();
    })

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
            demoCircle =
            [
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

    function highchart() {
        $('#container').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Skills/Frameworks'
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Skills/Framework experience'
                }
            },
            legend: {
                enabled: true
            },
            tooltip: {
                pointFormat: 'Experience in months'
            },
            series: [{
                name: 'Experience',
                data: [
                    ['Javascript',11 ],
                    ['CSS', 11],
                    ['HTML', 11],
                    ['AngularJS', 4],
                    ['jQuery', 11],
                    ['Java', 18],
                    ['C', 1],
                    ['C#', 2],
                    ['SQL', 4],
                    ['Zurb Foundation Framework', 5],
                    ['Bootstrap Framework', 4],
                    ['chartsJS', 5],
                    ['Visual Studio (Software)',11]
                ],
                dataLabels: {
                    enabled: true,
                    rotation: -90,
                    color: '#FFFFFF',
                    align: 'right',
                    format: '{point.y:.1f}', // one decimal
                    y: 10, // 10 pixels down from the top
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            }]
        });
    }

    function buildTable() {
        var headerText = '<tr>',
        headers = ['Job Title', 'Responsibilities', 'Time Worked'],
        jobs = ['Apartment Assistant', 'Dairy Queen Employee', 'ESTG Work-study'],
        responsibilities =
        ["Assisted in maintaining apartments. (Cleaning, painting, helping tenants)", "Washed dishes, assisted customers at the register, made orders.",
        "Set up, and managed the building's conference rooms. Developed web applications for the Enrollment Services Technology Group. Tested/maintained department websites."],
        timeWorked = ['7/20/2010-8/31/2010', '6/6/2011- 8/20/2011', '1/30/2012-Present'];
        bodyText = '';

        for (var i = 0; i < headers.length; i++) {
            headerText += '<th>' + headers[i] + '</th>';
        }
        headerText += '</tr>';

        for (var j = 0; j < jobs.length; j++) {
            bodyText += '<tr><td>' + jobs[j] + '</td>' + '<td>' + responsibilities[j] + '</td>' + '<td>' + timeWorked[j] + '</td></tr>';
        }
        $('#tableHeaders').html(headerText);
        $('#tableBody').html(bodyText);
    }

});