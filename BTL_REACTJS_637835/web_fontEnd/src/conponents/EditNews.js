import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class EditNews extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.dlCu.id,
            tieuDe: this.props.dlCu.tieuDe,
            trichDan: this.props.dlCu.trichDan,
            noiDung: this.props.dlCu.noiDung,
            anh: this.props.dlCu.anh,
            isRedirect: false
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
    }

    suaTin = (event) => {
        event.preventDefault();
        this.setState(
            {
                isRedirect: true
            },
            (id, tieuDe, trichDan, noiDung, anh) => this.props.capNhapTinTuc(this.state.id, this.state.tieuDe, this.state.trichDan, this.state.noiDung, this.state.anh)
        );
    }
    render() {
        if (this.state.isRedirect === true) {
            return <Redirect to="/tin" />
        }
        return (
            <div>
                <div>
                    <header className="masthead tintuc">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-12 my-auto">
                                    <div className="header-content mx-auto">
                                        <h1 className="mb-1 text-center">Trang Sửa Tin Tức</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* begin contact */}
                    <section className="page-section" id="contact">
                        <div className="container">
                            {/* Contact Section Heading*/}
                            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Điền thông tin sửa</h2>
                            {/* Contact Section Form*/}
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                                    <form id="contactForm" name="sentMessage" noValidate="novalidate">
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Tiêu đề</label>
                                                <input defaultValue={this.props.dlCu.tieuDe} onChange={(event)=>this.isChange(event)} name="tieuDe" className="form-control"  type="text" required="required"  />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Trích Dẫn </label>
                                                <input defaultValue={this.props.dlCu.trichDan} onChange={(event)=>this.isChange(event)} name="trichDan" className="form-control" required="required"  />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Nội dung</label>
                                                <textarea defaultValue={this.props.dlCu.noiDung} onChange={(event)=>this.isChange(event)} name="noiDung" className="form-control" rows={5} required="required"  />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Link Ảnh </label>
                                                <input defaultValue={this.props.dlCu.anh} onChange={(event) => this.isChange(event)} name="anh" className="form-control" required="required"  />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <br />
                                        <div id="success" />
                                        <div className="form-group"><button onClick={(event) => { this.suaTin(event) }} className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Lưu </button></div>
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

export default EditNews;