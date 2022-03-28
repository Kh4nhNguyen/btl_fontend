import React, { Component } from 'react';
import {
    Route,
} from "react-router-dom";
import Home from '../conponents/Home';
import Contact from '../conponents/Contact';
import NewDetail from '../conponents/NewDetail';
import News from "../conponents/News"
import NewsSearch from '../conponents/NewsSearch';
import UserLogin from '../conponents/UserLogin';
import EditNews from '../conponents/EditNews';
import AddNews from '../conponents/AddNews';


class DieuHuongURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route path="/tin">
                    <News suaTinTinTuc={(tin)=>this.props.suaTinDH(tin)}
                        dl={this.props.dlData}
                        layID={(event)=>this.layID(event)}
                        xoaTinTinTuc={(id)=>{this.props.xoaTinDH(id)}}
                    />
                </Route>
                <Route path="/tin-tuc/:slug.:id" component={NewDetail}>
                </Route>
                <Route path="/lien-he">
                    <Contact />
                </Route>
                <Route path="/tim-kiem">
                    <NewsSearch
                          dlUserSearch={this.props.dlSearch}/>
                </Route>
                <Route path="/dang-nhap">
                    <UserLogin/>
                </Route>
                <Route path="/sua-tin">
                    <EditNews
                    dlCu = {this.props.dlSuaApp}
                    capNhapTinTuc={(id,tieuDe,trichDan,noiDung,anh)=>this.props.capNhapTinDH(id,tieuDe,trichDan,noiDung,anh)}
                    />
                </Route>
                <Route path="/them-tin">
                    <AddNews 
                    themTin = {(tieuDe,trichDan,noiDung,anh)=>this.props.themTinDH(tieuDe,trichDan,noiDung,anh)}
                    />
                </Route>
            </div>

        );
    }
}

export default DieuHuongURL;