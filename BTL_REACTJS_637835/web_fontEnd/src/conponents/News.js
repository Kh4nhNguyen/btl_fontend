import React, { Component } from 'react';
import NewsItem from "./NewsItem";
import {
    Link
} from "react-router-dom";


class News extends Component {
    render() {
        return (
            <div>
                <div>
                    <header className="masthead tintuc">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-12 my-auto">
                                    <div className="header-content mx-auto">
                                        <h1 className="mb-1 text-center">Danh sách trang</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* begin tin tuc */}


                    <div className="container">
                        <div className="row mt-3">
                            {
                                this.props.dl.map((value, key) => {
                                    return (
                                        <div className="col-4 mt-3" key={key}>
                                            <NewsItem
                                                key={key}
                                                tinID={value.id}
                                                anh={value.anh}
                                                tieuDe={value.tieuDe}
                                                trichDan={value.trichDan}
                                            />
                                            <div className="btn-group">
                                                <Link className="btn btn-warning sua" to="/sua-tin" onClick={(tin) => this.props.suaTinTinTuc(value)}> <i className="fa fa-edit"
                                                >Sửa</i></Link>
                                                <div className="btn btn-danger xoa"
                                                 onClick={(id) => this.props.xoaTinTinTuc(value.id)}> <i className="fa fa-delete" >Xóa</i></div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;