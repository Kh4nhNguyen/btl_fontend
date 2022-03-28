import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThai:false
        }
    }
    thayDoi = () => {
        this.setState({
            trangThai: !this.state.trangThai
        })
    }
    hienThi = () => {
        if(this.state.trangThai === false){
            return <Link className="btn btn-primary" to="/dang-nhap" onClick={this.thayDoi}> Đăng nhập </Link>
        }
        else{
            return <Link className="btn btn-warning" to="/home" onClick={this.thayDoi} > Đăng xuất </Link>
        }
    }
    render() {
        return (
            <div>
                {this.hienThi()}
            </div>
        );
    }
}

export default Login;