import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import dl from "../conponents/dulieu.json"

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: dl
        }
    }

    render() {
        console.log(dl);
        return (
            <div>
                <div>
                    <header className="masthead">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-7 my-auto">
                                    <div className="header-content mx-auto">
                                        <h2>“Đằng sau sự thành công của một người đàn ông, là hình dáng của một người phụ nữ. Còn đằng sau sự thành công của bất kì ai là ít nhất một cuốn sách, hay cả một giá sách..”</h2>
                                        <NavLink className="btn btn-dark" to="/tin">See more...</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        );
    }
}

export default Home;