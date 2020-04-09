import React, { Component } from 'react'

let arr = []
let ind = 0
// const btn = (
//     <button type="submit" onClick={this.showUpdatedData}>Update</button>
// )

class Table extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            id: 0,
             firstname: '',
             lastname: ''
        }

        this.usernameHandler = this.firstnameHandler.bind(this)
        this.showInfo = this.showInfo.bind(this)
    }

    edit(event, id){
        ind = id
            this.setState({
                id: id,
                firstname: arr[id].fname,
                lastname: arr[id].lname,
            })
            event.preventDefault();
    }

    update(event){
        let obj = arr[ind]
        obj.fname= this.state.firstname
        obj.lname= this.state.lastname
        console.log(obj)
        this.setState({
            firstname: '',
            lastname: ''
        })
        event.preventDefault()
    }

    delete(id){
        arr.splice(id,1)
        this.setState({
            firstname: '',
            lastname: ''
        }) 
    }

    firstnameHandler = (event) => {
        this.setState({
            firstname: event.target.value,
        })
    }

    lastnameHandler = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    showInfo(event){
        arr.push({
            fname: this.state.firstname,
            lname: this.state.lastname
        })
         console.log(arr)
        event.preventDefault()
        this.setState({
            firstname: '',
            lastname: ''
        })
    }
    

    render() {
        return (
             
                <div>
                    <form>
                    <label>First Name</label>
                    <input type="text" value={this.state.firstname} onChange={this.firstnameHandler}/>
                    <label>Last Name</label>
                    <input type="text" value={this.state.lastname} onChange={this.lastnameHandler}/>
                    <button type="submit" value="Submit" className="add" onClick={(event) => this.showInfo(event)}>Add Item</button>
                    <button type="submit" value="Submit" className="update" onClick={(event) => this.update(event)}>Update</button>
                    </form>

                    <div id="Table">
                       <table>
                            <tbody>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                 </tr>
                                {arr.map((item, index) => {
                                     return (
                                      <tr key={index}>
                                         <td>{item.fname}</td>
                                          <td>{item.lname}</td>
                                          <td>{index}</td>
                                          <td><button className="edit" onClick={(event) => this.edit(event, index)}>Edit</button></td>
                                          <td><button onClick={() => this.delete(index)}>Delete</button></td>
                                        </tr>
                                     );
                                 })}
                            </tbody>
                        </table>
                    </div>
                </div>

        )
    }
}

export default Table