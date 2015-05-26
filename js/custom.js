
$(document).ready(function () {
    var oldData = [
                    ['Javascript', 13],
                    ['CSS', 13],
                    ['HTML', 13],
                    ['AngularJS', 4],
                    ['jQuery', 13],
                    ['Java', 18],
                    ['C', 5],
                    ['C#', 4],
                    ['SQL', 6],
                    ['Zurb Foundation Framework', 12],
                    ['Bootstrap Framework', 6],
                    ['chartsJS', 8],
                    ['Visual Studio (Software)', 13]
    ],
        oldMonth = $('#oldMonth').val(),
        currentMonth = new Date().getMonth() + 1;
   
    $(function () {
        highchart(oldData);
        buildTable();
        updateXP();
        bindButtons();
    })

    function bindButtons() {
        $('#demo').on('click', function () {
            demoChart();
            demoCircle();
        })
    }

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

    function highchart(arrayData) {
        var data = {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
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
                    text: 'Time in Months'
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
                data: arrayData,
                dataLabels: {
                    enabled: false,
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
        }
        $('#container').highcharts(data);
    }

    function buildTable() {
        var headerText = '<tr>',
        headers = ['Job Title', 'Responsibilities', 'Time Worked'],
        jobs = ['ESTG Programmer', 'TagWorks Freelance Developer'],
        responsibilities =
        ["Developed web applications for the Enrollment Services Technology Group. Tested/maintained/developed department websites. (<a href='http://financialaid.utep.edu/'>Financial Aid</a>)", "Freelance web design"],
        timeWorked = ['1/30/2012-Present',"9/6/2015-Present"];
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

    function updateXP() {
        if(oldMonth!=currentMonth){
            oldMonth = currentMonth;
            updateData();
        }
    }

    function updateData(data) {
        var skillNames = [];
    }

});