import React, { Component } from 'react';
import '../css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import DieuHuongURL from '../router/DieuHuongURL';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Data from "./dulieu.json";

const { v4: uuidv4 } = require('uuid');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ValueSearch: "",
      data: Data,
      duLieuSuaApp: {}
    }
  }

  getValueSearch = (dls) => {
    this.setState({
      ValueSearch: dls
    });
  }

  suaTinApp = (tin) => {
    this.setState({
      duLieuSuaApp: tin
    })
  }

  capNhapTinApp = (id, tieuDe, trichDan, noiDung, anh) => {
    console.log(tieuDe);
    this.state.data.forEach((value, key) => {
      if (value.id === id) {
        value.tieuDe = tieuDe;
        value.trichDan = trichDan;
        value.noiDung = noiDung;
        value.anh = anh;
      }
    })
  }

  xoaTinApp = (id) => {
    const danhSachTinSauXoa = this.state.data;
    danhSachTinSauXoa.forEach((value, key) => {
      if (value.id === id)
        danhSachTinSauXoa.splice(key, 1);
    })
    this.setState({
      data:danhSachTinSauXoa
    })
  }

  themTinApp = (tieuDe,trichDan,noiDung,anh)=>{
    const tinMoi = {};
    tinMoi.id=uuidv4();
    tinMoi.tieuDe=tieuDe;
    tinMoi.trichDan=trichDan;
    tinMoi.noiDung=noiDung;
    tinMoi.anh=anh;

    const danhSachTinMoi = this.state.data;
    danhSachTinMoi.push(tinMoi);

    this.setState({
      data:danhSachTinMoi
    })
  }

  render() {
    let ketQuaSearch = [];

    Data.forEach((text) => {
      if (text.tieuDe.indexOf(this.state.ValueSearch) !== -1) {
        ketQuaSearch.push(text)
      }
    })
    console.log(this.state.data);
    return (
      <Router>
        <div>
          <Nav ConnectProps2={(dls) => this.getValueSearch(dls)} />
          <DieuHuongURL dlData={this.state.data}
            dlSearch={ketQuaSearch}
            suaTinDH={(tin) => this.suaTinApp(tin)}
            dlSuaApp={this.state.duLieuSuaApp}
            capNhapTinDH={(id, tieuDe, trichDan, noiDung, anh) => this.capNhapTinApp(id, tieuDe, trichDan, noiDung, anh)}
            xoaTinDH={(id)=>{this.xoaTinApp(id)}}
            themTinDH = {(tieuDe,trichDan,noiDung,anh)=>this.themTinApp(tieuDe,trichDan,noiDung,anh)}
          />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
