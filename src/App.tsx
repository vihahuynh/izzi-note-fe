import classes from './App.module.scss'
import Header from './components/header/header';
import './global.scss';

function App() {
  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.menu}></div>
      <div className={classes.notes}></div>
    </div>
  )
}

export default App
