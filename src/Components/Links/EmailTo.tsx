import React from 'react';

type EmailToProps = {
  children: React.ReactNode;
};

class EmailTo extends React.PureComponent<EmailToProps> {
  render() {
    const email: string = process.env.REACT_APP_EMAIL || '';

    return (
      <a href={`mailto:${email}`} className="email-link" title="Contact Me">
        {this.props.children}
      </a>
    );
  }
}

export default EmailTo;
