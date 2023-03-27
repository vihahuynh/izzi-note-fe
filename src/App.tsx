import Navigation from './components/layouts/navigation/navigation';
import Sidebar from './components/layouts/sidebar/sidebar';
import NotesList from './components/notes/notesList';

import styles from './App.module.scss';
import Form from './components/form/form';

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <Sidebar />
        <div className={styles.main}>
          <Form />
          <NotesList />
        </div>
      </main>
    </div>
  );
}

export default App;
