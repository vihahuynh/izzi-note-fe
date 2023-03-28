import { useEffect, useState } from 'react';
import { INote } from '../../models/note.interface';
import notesService from '../../services/notes.service';
import NoteItem from './noteItem';
import styles from './notes.module.scss';

const NotesList = (): JSX.Element => {
  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const result = await notesService.get();
      setNotes(result?.data);
    };
    fetchNotes();
  }, []);

  console.log('😹  notes: ', notes);

  return (
    <div className={styles.notes}>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
