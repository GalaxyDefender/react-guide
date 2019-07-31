import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        haseError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({haseError: true, errorMessage: error});
    }

    render() {
        if (this.state.haseError) {
            return <h1>Something went wrong!</h1>
        } else {
            return this.props.children;
        }

    }
}

export default ErrorBoundary;