import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class AddNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tieuDe: "",
            trichDan: "",
            noiDung: "",
            anh: "",
            isRedirect: false
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    themTin = (event) => {
        event.preventDefault();

        this.setState({
            isRedirect: true
        },
            (tieuDe, trichDan, email, soDT, noiDung, anh) => this.props.themTin(this.state.tieuDe, this.state.trichDan, this.state.noiDung, this.state.anh)
        );
    }

    render() {
        if (this.state.isRedirect === true) {
            return <Redirect to="/tin" />
        }
        console.log(this.state);
        return (
            <div>
                <div>
                    <header className="masthead tintuc">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-12 my-auto">
                                    <div className="header-content mx-auto">
                                        <h1 className="mb-1 text-center">Trang Thêm Tin Tức</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* begin contact */}
                    <section className="page-section" id="contact">
                        <div className="container">
                            {/* Contact Section Heading*/}
                            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Thêm dữ liệu mới </h2>
                            {/* Contact Section Form*/}
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                                    <form id="contactForm" name="sentMessage" noValidate="novalidate">
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Tiêu đề</label>
                                                <input name="tieuDe" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Tiêu đề..." required="required" />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Trích Dẫn </label>
                                                <input name="trichDan" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Trích dẫn..." required="required" />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Nội dung</label>
                                                <textarea name="noiDung" onChange={(event) => this.isChange(event)} className="form-control" rows={5} placeholder="Nội dung..." required="required" />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Link Ảnh </label>
                                                <input name="anh" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Link ảnh..." required="required" />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <br />
                                        <div id="success" />
                                        <div className="form-group"><button className="btn btn-primary btn-xl" onClick={(event) => this.themTin(event)} type="submit">Thêm </button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default AddNews;