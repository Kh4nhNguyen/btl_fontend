import React, { Component } from 'react';
import NewsItem from "./NewsItem";


class NewsSearch extends Component {
    mappingDataUser = () => this.props.dlUserSearch.map((value, key) => (
        <div className="col-4">
            <NewsItem
                key={key}
                tinID={value.id}
                anh={value.anh}
                tieuDe={value.tieuDe}
                trichDan={value.trichDan} />
        </div>
    ))

    render() {

        return (
            <div>
                <div>
                    <header className="masthead tintuc">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-12 my-auto">
                                    <div className="header-content mx-auto">
                                        <h1 className="mb-1 text-center">Danh sách tìm kiếm </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* begin tin tuc */}
                    <hr />
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto">
                                <div className="header-content mx-auto">
                                    <h1 className="mb-1 text-left">Tin tức cho từ khóa " {this.props.textSearch} "</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            {this.mappingDataUser()}
                        </div>
                    </div>
                </div>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 mx-auto">
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default NewsSearch;