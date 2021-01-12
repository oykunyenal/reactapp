import React, { Component } from 'react'

const UserContext = React.createContext();

export class UserProvider extends Component {
    state = {
        users : [
          {
            id : 1,
            name : "Orhan Öykün YENAL",
            salary : "5000",
            department : "Bilişim"
          },
          {
            id : 2,
            name : "Bayram Emer",
            salary : "7500",
            department : "Bilişim"
          },
          {
            id : 3,
            name : "Çağdaş Can Birant",
            salary : "2500",
            department : "Yöneticilik"
          }
        ]
      }
    render() {
        return (
            <UserContext.Provider value = {this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;
