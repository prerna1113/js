// function displayTable() {
//     let tableContainer = document.getElementById('tableContainer');
//     // tableContainer.innerHTML = '';
//     if (formDataArray.length > 0) {
//         let table = document.createElement('table');
//         let headerRow = table.insertRow(0);

//         for (let key in formDataArray[0]) {
//             let headerCell = headerRow.insertCell();
//             headerCell.textContent = key;
//         }
//         for (let i = 0; i < formDataArray.length; i++) {
//             let row = table.insertRow();

//             for (let key in formDataArray[i]) {
//                 let cell = row.insertCell();
//                 cell.textContent = formDataArray[i][key];
//             }
//         }
//         tableContainer.appendChild(table);
//     }
// }


function displayTable(){
    let tableContainer = document.getElementById("tableContainer")

    if(data.length > 0){
        let table = document.createElement("table")
        let headerRow = table.insertRow();

        for(let key in form[0]){
            let headerCell = table.insertCell(0);
            headerCell.textContent = key;

            for(let i =0 ;i<form.length; i++){
                
            }
        }
    }
}