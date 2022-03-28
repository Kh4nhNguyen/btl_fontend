import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: ""
        }
    }
    isChange = (text) => {
        this.setState({
            tempValue: text.target.value
        });
        this.props.ConnectProps(this.state.tempValue)
    }
    render() {
        return (
            <div className="col-12 btn-height">
                <div className="form-group">
                    <form className="btn-group" >
                        <input type="text" className="form-control" placeholder="Search..." onChange={(text) => this.isChange(text)} />
                        <Link className="btn btn-primary"
                            onPointerEnter={(dl) => this.props.ConnectProps(this.state.tempValue)}
                            onClick={(dl) => this.props.ConnectProps(this.state.tempValue)} to="/tim-kiem">Search</Link>
                    </form>
                </div>
            </div>
        );
    }
}


export default Search;