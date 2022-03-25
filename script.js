let row_num =0;
let col_num =0;
let selected_color;
//adds row
function addRow(){
    row_num = grid.rows.length;
    //if table is empty, adds a row
    if(row_num == 0){
        let row = grid.insertRow();
        let cell= row.insertCell();
        cell.onclick = function(){
            this.style.backgroundColor = '${selected_color}';
        };
    }
    else{
        col_num = grid.rows[0].children.length;
        let row = grid.insertRow();
        for (let i =0; i<col_num; i++){
            let cell = row.insertCell();
            cell.onclick= function(){
                this.style.backgroundColor = '${selected_color}';
            };
        }
    }
}
//deletes row
function deleteRow(){
    row_num = grid.rows.length;
    if(row_num != 0){
        grid.deleteRow(row_num-1);
    }
}
//adds a coluumn
function addCol(){
    row_num = grid.rows.length;
    if (row_num == 0){
        let row =grid.insertRow();
        let cell = row.insertCell();
        cell.onclick = function(){
            this.style.backgroundColor= '${selected_color}';
        };
    }
    else{
        let rows = grid.rows;
        for(let i=0;i<rows.length;i++){
            let cell =rows[i].insertCell();
            cell.onclick=function(){
                this.style.backgroundColor = '${selected_color}';
            };
        }
    }
}
//deletes a column
function deleteCol(){
    row_num=grid.rows.length;
    if(row_num != 0){
        let rows = grid.rows;
        for(let i=0;i<rows.length;i++){
            let last_cell = rows[i].children.length-1;
            rows[i].deleteCell(last_cell);
        }
        col_num = rows[0].children.length;
        if(col_num == 0){
            row_num=grid.rows.length;
            for(let i= row_num-1; i>=0;i--){
                grid.deleteRow(i);
            }
        }
    }
}