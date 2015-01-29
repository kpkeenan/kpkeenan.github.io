$(document).ready(function () {

    $(function () {
        buildTable();
    });

    function buildTable() {
        
        var headerText = '<tr>',
            headers = ['Job Title',  'Responsibilities', 'Time Worked'],
            jobs = ['Apartment Assistant', 'Dairy Queen Employee', 'ESTG Work-study'],
            responsibilities =
            ["Assisted in maintaining apartments. (Cleaning, painting, helping tenants)", "Washed dishes, assisted customers at the register, made orders.",
            "Set up, and managed the building's conference rooms. Developed web applications for the Enrollment Services Technology Group."],
            timeWorked = ['7/20/2010-8/31/2010','6/6/2011- 8/20/2011','1/30/2012-Present'];
            bodyText = '';

        for (var i = 0; i < headers.length; i++) {
            headerText += '<th>' + headers[i] + '</th>';
        }
        headerText += '</tr>';
            
            for (var j = 0; j < jobs.length; j++) {
                console.log(jobs[j])
                console.log(responsibilities[j])
                console.log(timeWorked[j])
                bodyText += '<tr><td>' + jobs[j] + '</td>' + '<td>' + responsibilities[j] + '</td>' + '<td>' + timeWorked[j] + '</td></tr>';

            }   
        $('#tableHeaders').html(headerText);
        $('#tableBody').html(bodyText);
    }
})