import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import '@elastic/eui/dist/eui_theme_light.css';
import ComboBox from './ComboBox';
import EditDelete from './EditDelete';
import Filter from './Filter';
import DynamicPopOver from './DynamicPopOver'
import Pagination from './Pagination';
import Flyout from './Flyout';

// let state;

export default class AggridTable extends Component {

    constructor(props){
        super(props)
      
      this.state = {
      columnDefs: [ 
        { headerName: "FirstName", field: "firstName",checkboxSelection: true, editable: true,}, 
        { headerName: "LastName", field: "lastName", }, 
        { headerName: "Branch", field: "branch", }, 
        { headerName: "Contact", field: "contact",  }, 
        { headerName: "Email", field: "email", },
        // { headerName: "Em", field: "em", },
        {
          headerName: "Tags", field: "tag", width: 1000,
          cellRendererFramework: function(){
            return <ComboBox />
          }
        },
        {
          headerName: "Actions", field: "action",
          cellRendererFramework: (params) => <EditDelete delete={this.deleteRow}/>
        },
      ],

      rowData: [
      {firstName: "Hardik", lastName: "Motwani", branch: "IT", email: "hardik.motwani@rapidops.com", contact: 8488866756,}, 
      {firstName: "Meet", lastName: "Shah", branch: "CS", email: "meet.shah@rapidops.com", contact: 7982124770, }, 
      {firstName: "Darshan", lastName: "Raval", branch: "IT", email: "darshan.raval@gmail.com", contact: 9870912667,},
      {firstName: "Dhairya", lastName: "Shah", branch: "CS", email: "dhairya.shah@gmail.com",  contact: 8460556732,}, 
      {firstName: "Jennal", lastName: "Patel", branch: "IT", email: "jeenal.patel@gmail.com", contact: 8901265437,}, 
      {firstName: "Alia", lastName: "Bhatt", branch: "CS", email: "alia.bhatt@gmail.com", contact: 8460123456,}, 
      {firstName: "Vaibhav", lastName: "Kabira", branch: "IT", email: "vaibhav.kabira@gmail.com", contact: 9876512344,}, 
      {firstName: "Ananya", lastName: "Pandey", branch: "CS", email: "ananya.pandey@gmail.com", contact: 8488898765,}, 
      {firstName: "Joe", lastName: "Dawson", branch: "IT", email: "joe.dawson@gmail.com", contact: 9988666756,},
      {firstName: "Kane", lastName: "Williamson", branch: "CS", email: "kane.williamson@gmail.com", contact: 9867542310,}
    ],

      defaultColDef: { 
        resizable: true,
        sortable: true, 
        filter: true,
        },

        paginationPageSize:8,
        pageCount:10,
        // buttonClicked: false,
        rowSelected: false,
        colState: null
      }
    } 
    
    onGridReady = params => {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
      this.gridApi.sizeColumnsToFit();
      // state = this.gridColumnApi.getColumnState();
      // console.log(state)
      this.setState({
        pageCount: this.gridApi.paginationGetTotalPages(),
        colState: this.gridColumnApi.getColumnState()
      })
    }

    onFilterTextBoxChanged = async () => {
      await this.gridApi.setQuickFilter(document.getElementById('filter-text-box').value);
    };

    showHideColumn = (field, val) => {
      // console.log(field, val);
      // const { gridColumnAPi } = this.state;
      this.gridColumnApi.setColumnVisible(field, val);
    };

    deleteRow = () => {
        const selectedData = this.gridApi.getSelectedRows();
        this.gridApi.updateRowData({ remove: selectedData });
    };

    onPaginationChange = (size, activePage) => {
      if(this.gridApi){
        this.gridApi.paginationSetPageSize(size);
        this.gridApi.paginationGoToPage(activePage);
        this.setState({
          pageCount: this.gridApi.paginationGetTotalPages()
        })
      }
    }

    // onRowSelected = (e) => {
    //   this.da = e.data
    //   console.log(this.da)
    // }

    onSelectionChanged = (e) => {
      this.ta = e.api.getSelectedNodes()[0].data
      this.setState({
        rowSelected: true
      })
    }



    // getRow = (e) => {
    //   this.temp = e.target.checked
    //   this.selectedRows = this.gridApi.getSelectedRows();
    //   console.log(this.selectedRows);
    //   this.setState({
    //     buttonClicked: true
    //   })

    // }

    render = () =>{
      // let message;
      // if(this.state.rowSelected){
      //   // console.log(this.ta)
      //   message = <Flyout selectedRowData={this.ta}/>
      //   // message = <h1>Row selected</h1>
      //   // console.log('mdfklm')
      //   // console.log(this.selectedRows)
      // }
        return (
            <div className="ag-theme-alpine"
                 style={{ height: 400 }}
            >

                {/* <button onClick={this.getRow}>Get selected rows</button> */}

                <Filter onFilterTextBoxChanged={this.onFilterTextBoxChanged} />
                
                <DynamicPopOver  
                      showHideColumns={this.showHideColumn}
                      columnDefs={this.state.columnDefs}
                />

                <AgGridReact
                columnDefs={this.state.columnDefs}
                rowData={this.state.rowData}
                defaultColDef={this.state.defaultColDef}
                rowSelection="single"
                onGridReady={(e) => this.onGridReady(e)}
                onRowSelected={this.onRowSelected}
                onSelectionChanged={this.onSelectionChanged}
                pagination={true}
                paginationPageSize={this.state.paginationPageSize}
                />

                <Pagination onPaginationChange = {this.onPaginationChange}
                            pageCount={this.state.pageCount}
                            paginationPageSize={this.state.paginationPageSize}/>

                {/* <Flyout /> */}
                {/* {message} */}
                { this.state.rowSelected ? <Flyout selectedRowData={this.ta} /> : '' }
                
            </div>
        )
    }
}