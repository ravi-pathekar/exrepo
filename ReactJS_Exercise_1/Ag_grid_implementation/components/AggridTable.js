import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import '@elastic/eui/dist/eui_theme_light.css';
import ComboBox from './ComboBox';
import EditDelete from './EditDelete';
import Filter from './Filter';
import PopOver from './PopOver';
import Pagination from './Pagination';

export default class AggridTable extends Component {

    constructor(props){
        super(props)
      
      this.state = {
      columnDefs: [ 
        { headerName: "FirstName", field: "firstName",checkboxSelection: true, editable: true }, 
        { headerName: "LastName", field: "lastName", }, 
        { headerName: "Branch", field: "branch",  }, 
        { headerName: "Contact", field: "contact", }, 
        { headerName: "Email", field: "email", },
        { headerName: "LName", field: "lName", }, 
        {
          headerName: "Tags", field: "tag", width: 500,
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
      }

      this.inputRef = React.createRef();
    } 
    
    onGridReady = params => {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
      this.colState = this.gridColumnApi.getColumnState();
      this.setState({
        pageCount: this.gridApi.paginationGetTotalPages()
      })
    }

    onFilterTextBoxChanged = async () => {
      await this.gridApi.setQuickFilter(document.getElementById('filter-text-box').value);
    };

    showHideColumn = async (e, feild, keys) => {
      this.temp = e.target.checked;    
      await this.gridColumnApi.setColumnVisible(feild, !this.temp);
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

    render = () =>{
        return (
            <div className="ag-theme-alpine"
                 style={{ height: 400 }}
            >
                <Filter onFilterTextBoxChanged={this.onFilterTextBoxChanged} />
                
                <PopOver  showHideColumn={this.showHideColumn}
                          columnDefs={this.state.columnDefs}
                />

                <AgGridReact
                columnDefs={this.state.columnDefs}
                rowData={this.state.rowData}
                defaultColDef={this.state.defaultColDef}
                rowSelection="multiple"
                onGridReady={this.onGridReady}
                pagination={true}
                paginationPageSize={this.state.paginationPageSize}
                />

                <Pagination onPaginationChange = {this.onPaginationChange}
                            pageCount={this.state.pageCount}
                            paginationPageSize={this.state.paginationPageSize}/>
                
            </div>
        )
    }
}