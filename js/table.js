setTable(data);

function setTable(arr) {
    document.querySelector('#requests-table tbody').innerHTML = '';
    arr.forEach(function (item) {
        document.querySelector('#requests-table tbody').insertAdjacentHTML('beforeend', `
            <tr>
                <td>${item.answer}</td>
                <td>${item.question}</td>
            </tr>
        `);
    });
}
