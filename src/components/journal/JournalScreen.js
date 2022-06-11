import React from 'react';
import { NoteScreen } from '../notes/NoteScreen';
import { NothingSelected } from './NothingSelected';
import { Sidebar } from './Sidebar';
import { useSelector } from 'react-redux';

export const JournalScreen = () => {

    // Con UseSelector leemos el estado de nuestro store, redux y lo pasamos a una variable
    const { active } = useSelector(state => state.notes);

    return (
        <div className="journal__main-content">
            <Sidebar />
            <main>
                {
                    // Si no hay ninguna nota seleccionada, mostramos un componente NothingSelected\
                    // Si hay una nota seleccionada, mostramos un componente NoteScreen
                    (active ? <NoteScreen /> : <NothingSelected />)
                }
            </main>
        </div>
    )
}
