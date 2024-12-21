import classes from './App.module.scss'
import Header from './components/header/header';
import SideBar from './components/sideBar/sideBar';
import './global.scss';

function App() {
  return (
    <div className={classes.main}>
      <Header />
      <SideBar />
      <div className={classes.notes}></div>
    </div>
  )
}

export default App
