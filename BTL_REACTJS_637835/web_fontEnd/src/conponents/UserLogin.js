import React, { Component } from 'react';
import "../css/User.css";

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    render() {
        return (
            <div>
                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto">
                                <div className="header-content mx-auto">
                                    <div className="wrapper fadeInDown">
                                        <div id="formContent">
                                            <div className="fadeIn first">
                                            </div>
                                            {/* Login Form */}
                                            <form>
                                                <input type="textLogin" id="login" className="fadeIn second" name="login" placeholder="login"
                                                onChange={(event)=>{this.isChange(event)}}/>
                                                <input type="textLogin" id="password" className="fadeIn third" name="login" placeholder="password" 
                                                onChange={(event)=>{this.isChange(event)}}/>
                                                <input type="submit" className="fadeIn fourth" defaultValue="Log In"
                                                />
                                            </form>
                                            {/* Remind Passowrd */}
                                            <div id="formFooter">
                                                <div className="underlineHover">Forgot Password?</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

            </div>
        );
    }
}

export default UserLogin;