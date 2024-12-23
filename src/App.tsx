import classes from './App.module.scss'
import Header from './components/header/header';
import Notes from './components/notes/notes';
import SideBar from './components/sideBar/sideBar';
import './global.scss';

function App() {
  return (
    <div className={classes.main}>
      <Header />
      <SideBar />
      <Notes />
    </div>
  )
}

export default App
