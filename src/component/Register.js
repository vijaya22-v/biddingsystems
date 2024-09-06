import React, { Component } from 'react'

export default class SignUp extends Component {

    constructor(props){
        super(props)
        this.state={
            id:"",
            name:"",
            email:"",
            password:""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const{id, name, email, password} = this.state;
        console.log(id,name,email,password);
        fetch("http://localhost:5000/register",{
            method: "POST",
            crossDomain: true,
            headers:{
                "content-Type":"application/json",
                Accept: "application/json",
                "Access-Control-Allow-Orgin":"*",
            },
            body:JSON.stringify({
                id,
                name,
                email,
                password
            }),
        }).then((res)=>res.json())
        .then((data)=> {
            console.log(data, "userRegister");
        });

    }

  render() {
    return (
      <div className='regbody'>
      <div className='registration-form'>
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>

        <div className="mb-3">
          <p>Id</p>
          <input type="text"  placeholder="Unique Id" onChange={(e)=>this.setState({id:e.target.value})} />
        </div>

        <div>
          <p>Name</p>
          <input
            type="text"
            
            placeholder="First name"
            onChange={(e)=>this.setState({name:e.target.value})}
          />
        </div>

        <div>
          <p>Email address</p>
          <input
            type="email"
           
            placeholder="Enter email"
            onChange={(e)=>this.setState({email:e.target.value})}
          />
        </div>

        <div>
          <p>Password</p>
          <input
            type="password"
           
            placeholder="Enter password"
            onChange={(e)=>this.setState({password:e.target.value})}
          />
        </div>

        <div >
          <button type="submit" >
            Sign Up
          </button>
        </div>
        <p >
          Already registered <a href="/">sign in?</a>
        </p>
      </form>
      </div>
      </div>
    )
  }
}