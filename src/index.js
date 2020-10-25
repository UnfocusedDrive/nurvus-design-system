import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button.jsx';
import './index.scss';

class App extends React.Component {
  render() {
    return (
      <div>
      asdsadaszzz
      <Button>
        Button 1
      </Button>
      <Button>
        Button 2
      </Button>
    </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.body
);