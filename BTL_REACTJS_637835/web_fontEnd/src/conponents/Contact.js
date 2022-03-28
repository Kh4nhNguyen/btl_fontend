import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isRedirect: false,
    }
  }

  isChange = (event) => {
    const ten = event.target.name;
    const giatri = event.target.value;
    this.setState({
      [ten] : giatri
    })
  }
  submitForm = (event) => {
    event.preventDefault();
   this.setState({
     isRedirect:true
   })
  }

  getGiaTri = () => {
    var noiDung = "";
    noiDung += "Name:" + this.state.fName + " - ";
    noiDung += "Email:" + this.state.fEmail + " - ";
    noiDung += "Phone:" + this.state.fPhone + " - ";
    noiDung += "Message:" + this.state.fMessage;
    return noiDung;
  }
  render() {
    if (this.state.isRedirect) {
      console.log(this.getGiaTri())
      return (
      <Redirect to={{ pathname: "/" }} />
      )
    }
    
    return (
      <div>
        <div>
          <header className="masthead tintuc">
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-lg-12 my-auto">
                  <div className="header-content mx-auto">
                    <h1 className="mb-1 text-center">Trang Liên hê </h1>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* begin contact */}
          <section className="page-section" id="contact">
            <div className="container">
              {/* Contact Section Heading*/}
              <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Điền thông tin liên hệ </h2>
              {/* Contact Section Form*/}
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                  <form id="contactForm" name="sentMessage" noValidate="novalidate">
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Tên </label>
                        <input onChange={(event) => this.isChange(event)} name="fName" className="form-control" id="name" type="text" placeholder="Name..." required="required" data-validation-required-message="Please enter your name." />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Địa chỉ Email </label>
                        <input onChange={(event) => this.isChange(event)} name="fEmail" className="form-control" id="email" type="email" placeholder="Email Address..." required="required" data-validation-required-message="Please enter your email address." />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Số điện thoại </label>
                        <input onChange={(event) => this.isChange(event)} name="fPhone" className="form-control" id="phone" type="tel" placeholder="Phone Number..." required="required" data-validation-required-message="Please enter your phone number." />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Nội dung tin nhắn </label>
                        <textarea onChange={(event) => this.isChange(event)} name="fMessage" className="form-control" id="message" rows={5} placeholder="Message..." required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <br />
                    <div id="success" />
                    <div className="form-group"><button onClick={(event) => { this.submitForm(event) }} className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Gửi </button></div>
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

export default Contact;