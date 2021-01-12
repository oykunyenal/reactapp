import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {

onDeleteUser = (e) => {
    const{id,deleteUser} = this.props;
    deleteUser(id);
}

    render() {

        //Destruction 
        const {name,department,salary} = this.props;
        return (
            
            <div className = "col-md-8 mb-4">
             <div className = "card">
                <div className="card-header d-flex justify-content-between">
                    <h4 className = "d-inline">{name}</h4>
                    <i className = "far fa-trash-alt" style = {{ cursor : "pointer"}} onClick = {this.onDeleteUser}></i>
                </div>
                <div className="card-body">
                <p className="card-text"> Maaş : {salary}</p>
                <p className="card-text"> Bölüm : {department}</p>
                </div>
             </div>
            </div>
        )
    }
}

User.defaultProps = {
    name : "Bilgi Yok",
    salary : "Bilgi Yok",
    department : "Bilgi Yok",
}

User.propTypes = {
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    deleteUser : PropTypes.func.isRequired
}



export default User;
