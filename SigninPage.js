import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class SigninPage extends Component{
    render()
    {
return(
    <div className="FormCender">
    <form className="FormFields" onSubmit={this.handleSubmit}>
              
    <div className="FormFields">
            <label className="FormField__Label" htmlFor="email">EmailId
            </label>
            <input type="email" id="email" className="FormTitle__Input" placeholder="Enter Your EmailId"
             name="email" />
            </div>

            <div className="FormFields">
            <label className="FormField__Label" htmlFor="Password">Password
            </label>
            <input type="Password" id="Passsword" className="FormTitle__Input" placeholder="Enter Your Password "
            name="password" />
             </div>

         <div className="FormFields">
             <button className="FormField__Button mr-20">Sign In</button>
             <Link to="/" className="FormField__Link">Create an Account</Link>
             </div>
</form>
    </div>
);
    }
}
export default SigninPage;