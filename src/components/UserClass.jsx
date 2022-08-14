import React, { Component } from 'react'

 class UserClass extends Component {
    constructor(props){
        super();
        this.state={members: []}
    }

componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        res.json().then((users)=>{
            console.log(users)
        this.setState({ members:users});
        
    });
})
    .catch((err)=>{
        console.log(err);
    })


}

  render() {
    return (
        <>
        {this.state.members.map((item, index)=>{
            return(
                <div key={index}>
                <h1>Name: {item.name}</h1>
                <h1>username:{item.username}</h1>
                <h1>phone:{item.email}</h1>
                <hr />
                </div>
            );
        })}
      
      </>
    );
  }
}
export default UserClass;