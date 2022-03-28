import React, { Component } from 'react';
import {
    Link,
    NavLink
} from "react-router-dom";
import Search from './Search';
import Login from './Login';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThai: true,
            searchText: ""
        }
    }
    getTextSearch = (dl) => {
        this.setState({
            searchText: dl
        });
        this.props.ConnectProps2(this.state.searchText)
    }

    thayDoi = () => {
        this.setState({
            trangThai: !this.state.trangThai
        });
    }
    hienThiSearch = () => {
        if (this.state.trangThai === true) {
            return (
                <div>
                    <nav className="navbar navbar-expand-lg bg-dark fixed-top" id="mainNav">
                        <div className="container">
                            <Link className="navbar-brand js-scroll-trigger" to='/home'>React Router - News</Link>
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                Menu
      <i className="fas fa-bars" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <NavLink className="nav-link js-scroll-trigger" to="/home">Trang chủ </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link js-scroll-trigger" to="/tin" onClick={() => this.thayDoi()}>Tin tức </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link js-scroll-trigger" to="/lien-he">Liên hệ</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link js-scroll-trigger" to="/them-tin">Thêm tin</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <Login />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            )
        } else {
            return (
                <div>
                    <nav className="navbar navbar-expand-lg bg-dark fixed-top" id="mainNav">
                        <div className="container">
                            <Link className="navbar-brand js-scroll-trigger" to='/home' onClick={() => { this.thayDoi() }}>React Router - News</Link>
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                Menu
      <i className="fas fa-bars" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <NavLink className="nav-link js-scroll-trigger" to="/home" onClick={() => this.thayDoi()}>Trang chủ </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link js-scroll-trigger" to="/tin">Tin tức </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <Search ConnectProps={(dl) => this.getTextSearch(dl)} />
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link js-scroll-trigger" to="/lien-he" onClick={() => this.thayDoi()}>Liên hệ</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link js-scroll-trigger" to="/them-tin">Thêm tin</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink onClick={() => this.thayDoi()} to="/dang-nhap" ><Login /></NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.hienThiSearch()}
            </div>
        );
    }
}

export default Nav;