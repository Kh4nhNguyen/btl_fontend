import React, { Component } from 'react';
import dl from './dulieu.json';
import NewsRelated from './NewsRelated';

class NewDetail extends Component {
    render() {
        var dem = 1;
        console.log(this.props);
        return (
            <div>
                <div>
                    <header className="masthead tintuc">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-12 my-auto">
                                    <div className="header-content mx-auto">
                                        <h1 className="mb-1 text-center">Trang chi tiet</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* begin tin tuc */}
                    {
                        dl.map((value, key) => {
                            if (value.id === this.props.match.params.id) {
                                return (
                                    <div className="jumbotron jumbotron-fluid" key={key}>
                                        <div className="container">
                                            <img src={value.anh} className="img-fluid w100" alt="react router demo" />
                                            <h3 className="lead text-center">{value.tieuDe}</h3>
                                            <hr className="my-2" />
                                            {value.noiDung}
                                        </div>
                                    </div>
                                )
                            }
                            else {
                                return true;
                            }
                        })
                    }

                    <div className="container">
                        <h4 className="card-title text-center">Tin liên quan</h4>
                        <div className="row">
                            <div className="col-12">
                                <div className="card-deck">
                                    {
                                        dl.map((value, key) => {
                                            if (value.id !== this.props.match.params.id) {
                                                if (dem <= 4) {
                                                    dem++;
                                                    return (
                                                        <NewsRelated key={key}
                                                            tinID={value.id}
                                                            anh={value.anh}
                                                            tieuDe={value.tieuDe}
                                                            trichDan={value.trichDan} />
                                                    )
                                                } else return true;
                                            }
                                            return true;
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default NewDetail;
