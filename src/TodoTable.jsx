import React from "react";


import TodoList from "./TodoList";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

import { useState, useRef } from "react";

function TodoTable({ todos, setSelectedTodoIndex }) {
    const [columnDefs] = useState([
        { field: 'desc', sortable: false, filter: true, floatingFilter: true },
        {
            field: 'priority', filter: true, floatingFilter: true,
            cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' }
        },
        { field: 'date', filter: true, floatingFilter: true }
    ]);

    const gridRef = useRef();

    const onRowSelected = () => {
        const selectedNodes = gridRef.current.getSelectedNodes();
        if (selectedNodes.length > 0) {
            const selectedIndex = selectedNodes[0].id; 
            setSelectedTodoIndex(selectedIndex); 
        } else {
            setSelectedTodoIndex(null); 
        }
    };


    return (
        <div id="TodoTable" role="table" data-testid="todoTableTest">
            
            <div className="ag-theme-material" style={{ width: 700, height: 500 }} >
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowData={todos}
                    columnDefs={columnDefs}
                    rowSelection="single"
                    onSelectionChanged={onRowSelected}
                   

                />
            </div>
        </div>
    );



}

export default TodoTable;
