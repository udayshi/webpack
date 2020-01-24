import React, { Component } from "react";
import PropTypes from "prop-types";


/************************************/
class Hello extends  Component{
    render() {
        return <div>{this.props.name}</div>
    }
}

Hello.propTypes = {
    name: PropTypes.string.isRequired,
};
export default Hello;