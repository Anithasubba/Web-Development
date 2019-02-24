import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class SignupPage extends Component
{
    renderComponent()
    {
        return(

            <div className="FormCenter">
            <form className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormFields">
            <label className="FormField__Label" htmlFor="name">Full Name
            </label>
            <input type="text" id="name" className="FormTitle__Input" placeholder="Enter Your Full 
            Name" name="name" />
             </div>
       
            <div className="FormFields">
            <label className="FormField__Label" htmlFor="Password">Password
            </label>
            <input type="Password" id="Passsword" className="FormTitle__Input" placeholder="Enter Your Password "
            name="password" />
             </div>


            <div className="FormFields">
            <label className="FormField__Label" htmlFor="email">EmailId
            </label>
            <input type="email" id="email" className="FormTitle__Input" placeholder="Enter Your EmailId"
             name="email" />
            </div>

            <div className="FormFields">
            <label className="FormField__CheckboxLabel">
             <input className="FormField__Checkbox" type="Checkbox" name="I agreed"/>
             I Agree For You
             <a href="" className="FormField__TermsLink">Terms Of service</a>
             </label>
             </div>
             
             <div className="FormFields">
             <button className="FormField__Button mr-20">Sign Up</button>
             <Link to="/sign-in" className="FormField__Link">I am already member</Link>
             </div>
        
              </form>
              </div>
        );
    }
}
export default SignupPage;
