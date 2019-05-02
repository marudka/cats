import * as React from 'react';
import { connect } from 'react-redux';

import catsActions from './actions/cats'
import './App.css';

interface ICat {
  id: string,
  url: string
}

interface IAppProps {
  fetchCats: any,
  cats: ICat[]
};

class App extends React.Component<IAppProps> {
  public handleClick = (): void => {
    console.log('click');
    this.props.fetchCats();
  }

  public render() {
    console.log(this.props);
    const list = this.props.cats ? this.props.cats.map(item => (
      <li key={item.id}>
        <img src={item.url} />
      </li>
    )) : null;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Cats search</h1>
        </header>
        <p className="App-intro">
          <input type='text' />
        </p>
        <button onClick={this.handleClick}>grr</button>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: { cats: ICat[]}) => ({
  cats: state.cats
});

const mapDispatchToProps = {
  fetchCats: catsActions.fetch
}

const dupa = connect(mapStateToProps, mapDispatchToProps)(App)
export default dupa;
