 window.onload = function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api', true);
    xhr.send();
    xhr.addEventListener('load', function () {
        var rows = JSON.parse(xhr.responseText);
        var rowStrs = rows.reduce((acc, curr) => {
            return acc + `
                <tr>
                    <td>${curr.name}</td>
                    <td>${curr.aarons_description}</td>
                </tr>`; 
        }, '');

        document.body.innerHTML = `
            <h1>Docker Proof of Concept</h1>
            <p style="max-width: 5in;">
               This is a proof of concept for deployment of a multi-container docker application to EC2.
               The following table is retrieved from a service request to a json API layer. That, in turn
               makes a DB query to get the info.
            </p>
            <p>
               I deployed this manually by button clicking in the jekins job.
            </p>
            <p>
               This change was loaded up instantly in the dev environment via webpack dev server. Thing!
            </p>
            <table>
                <tr><th>Theatre Name</th><th>Aaron's Short Descrpition</th></tr> 
                ${rowStrs}
            </table>
            `;
    });
 };
