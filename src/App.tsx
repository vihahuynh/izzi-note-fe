import Navigation from './components/layouts/navigation/navigation';
import Sidebar from './components/layouts/sidebar/sidebar';

import styles from './App.module.scss';

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <Sidebar />
        <div className={styles.main}></div>
      </main>
    </div>
  );
}

export default App;
