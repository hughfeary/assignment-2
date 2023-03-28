import React from "react";

const linkStyles = {
  color: 'black',
  fontWeight: 'bold',
}

const messageStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center'
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={messageStyle}>
          <h1>Oops, something went wrong.</h1>
          <p>
            Try refreshing the page or contact support via <a href="mailto:admin@chadstonecobrasfc.com@subject=Enquiriry" style={linkStyles}>email</a> or phone.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;