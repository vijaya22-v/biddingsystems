import React, { Component } from 'react'
import ReCAPTCHA from "react-google-recaptcha";


export default class Login extends Component {


  

  constructor(props){
    super(props)
    this.state={
      email:"",
      password:"",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const{email, password} = this.state;
    console.log(email,password);
    fetch("http://localhost:5000/login-user",{
      method: "POST",
      crossDomain: true,
      headers:{
          "content-Type":"application/json",
          Accept: "application/json",
          "Access-Control-Allow-Orgin":"*",
      },
      body:JSON.stringify({
          email,
          password
      }),
  }).then((res)=>res.json())
  .then((data)=> {
      console.log(data, "userRegister");
      if (data.status == "ok"){
       window.localStorage.setItem("token", data.data);
        window.location.href='./home'
      } 
      else{
        alert("Invalid Credentials");
      }
  });
}


  render() {
    return (
      <div>
        <div className='bbdbody' align='center'>
        <h1>
          THE BIDDING SYSTEMS
        </h1><br></br>
        <h5>A Smart Auction Initiative....</h5>
        </div>
      <div className='lbody'>
      <div className='box'>
        <span className='borderLine'></span>
      <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>

       
          <div className='inputBox'>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=>this.setState({email:e.target.value})}
          />
          <span>Email</span>
          <i></i>
        </div>

        <div className='inputBox'>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=>this.setState({password:e.target.value})}
          />
          <span>Password</span>
         </div>

         <div className='links'>
            <a href='#'>Forget Password</a>
            <a href='/register'>Sign-Up</a>
         </div>

         <ReCAPTCHA sitekey="6Lf33eAlAAAAACtrImflUDnWbJLqOry4_Tg0PrIf"  />

        <div className='lsub'>
        <input type='submit' value='login' />
        </div>
      </form>
      </div>
      </div>
      </div>
    )
  }
}