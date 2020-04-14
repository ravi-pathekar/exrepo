import React, { Component } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

let gridApi = '';

export class App extends Component {

constructor(props) {
  super(props)

this.state = {
columnDefs: [
  {
    headerName: "StudentID",
    field: "studentID", 
    checkboxSelection: true,
    editable: true
  }, 
  {
    headerName: "FirstName", field: "firstName", 
    // getQuickFilterText: function(params){
    //   return params.value.name
    // }
  }, 
  {
    headerName: "LastName", field: "lastName"
  }, 
  {
    headerName: "RollNo", field: "rollNo", 
  }, 
  {
    headerName: "Branch", field: "branch"
  }, 
  {
    headerName: "Contact", field: "contact"
  }, 
  {
    headerName: "Email", field: "email"
  },
  {
    headerName: "Actions", field: "action",
    cellRenderer: function(params) {
      return '<span><i class="material-icons">edit  delete</i></span>'
    }
  },
],

defaultColDef: { 
          resizable: true,
          sortable: true, 
          filter: true,
          suppressSizeToFit:true,
          width: 140,
},

rowData: [{
  studentID: 1,
  firstName: "Hardik",
  lastName: "Motwani",
  rollNo: 5200,
  branch: "IT",
  semester: 8,
  dateOfBirth: "20-02-1998",
  contact: 8488866756,
  email: "hardik.motwani@rapidops.com"
},
{
  studentID: 2,
  firstName: "Meet",
  lastName: "Shah",
  rollNo: 5201,
  branch: "CS",
  semester: 8,
  dateOfBirth: "15-05-1999",
  contact: 7982124770,
  email: "meet.shah@rapidops.com"
},
{
  studentID: 3,
  firstName: "Darshan",
  lastName: "Raval",
  rollNo: 5202,
  branch: "IT",
  semester: 6,
  dateOfBirth: "12-11-1997",
  contact: 9870912667,
  email: "darshan.raval@gmail.com"
},
{
  studentID: 4,
  firstName: "Darshan",
  lastName: "Vesatiya",
  rollNo: 5203,
  branch: "CS",
  semester: 6,
  dateOfBirth: "12-11-1997",
  contact: 9870912668,
  email: "darshan.raval@gmail.com"
},
{
  studentID: 5,
  firstName: "Nawal",
  lastName: "Kishor",
  rollNo: 5204,
  branch: "CS",
  semester: 6,
  dateOfBirth: "12-11-1997",
  contact: 9870912669,
  email: "darshan.raval@gmail.com"
},
{
  studentID: 6,
  firstName: "Aman",
  lastName: "Gupta",
  rollNo: 5205,
  branch: "IT",
  semester: 6,
  dateOfBirth: "12-11-1997",
  contact: 9870912660,
  email: "darshan.raval@gmail.com"
},
{
  studentID: 7,
  firstName: "Jatin",
  lastName: "Jain",
  rollNo: 5206,
  branch: "IT",
  semester: 6,
  dateOfBirth: "12-11-1997",
  contact: 9870912610,
  email: "darshan.raval@gmail.com"
},
{
  studentID: 8,
  firstName: "Dhairya",
  lastName: "Shah",
  rollNo: 5207,
  branch: "ME",
  semester: 6,
  dateOfBirth: "12-11-1997",
  contact: 9870912611,
  email: "darshan.raval@gmail.com"
},
{
  studentID: 9,
  firstName: "Ravi",
  lastName: "Pathekar",
  rollNo: 5208,
  branch: "IT",
  semester: 6,
  dateOfBirth: "12-11-1997",
  contact: 9870912612,
  email: "darshan.raval@gmail.com"
},
{
  studentID: 10,
  firstName: "Mayur",
  lastName: "Ahir",
  rollNo: 5209,
  branch: "ME",
  semester: 6,
  dateOfBirth: "12-11-1997",
  contact: 9870912613,
  email: "darshan.raval@gmail.com"
},
{
  studentID: 11,
  firstName: "Darshan",
  lastName: "Raval",
  rollNo: 5202,
  branch: "IT",
  semester: 6,
  dateOfBirth: "12-11-1997",
  contact: 9870912667,
  email: "darshan.raval@gmail.com"
},{
  studentID: 12,
  firstName: "Darshan",
  lastName: "Raval",
  rollNo: 5202,
  branch: "IT",
  semester: 6,
  dateOfBirth: "12-11-1997",
  contact: 9870912667,
  email: "darshan.raval@gmail.com"
},
],
}
}

onGridReady = params => {
  gridApi = params.api;
  // this.gridColumnApi = params.columnApi;
}

onFilterTextBoxChanged = () => {
  gridApi.setQuickFilter(document.getElementById('filter-text-box').value);
}

render() {
  return (
    <div
      className="ag-theme-alpine container"
      style={{ width: 1300, height: 400 }}
      >

      <input className="my-2 p-2" type="text" id="filter-text-box" placeholder="Filter..." onInput={this.onFilterTextBoxChanged}/>

      <AgGridReact
        columnDefs={this.state.columnDefs}
        rowData={this.state.rowData}
        defaultColDef={this.state.defaultColDef}
        rowSelection="multiple"
        onGridReady={this.onGridReady}
        pagination={true}
        paginationPageSize={10}
        >                           
      </AgGridReact>
    </div>
  )
}
}

export default App