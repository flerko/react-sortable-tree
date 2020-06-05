import React from 'react';
import ReactDOM from 'react-dom';
import App from './sandbox/App';

import './index.css';
import '../style.css';

class Layout extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <App />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Layout />, rootElement);
