import React from 'react';
import { Column } from './components/Column';
import { AddNewItem } from './components/AddNewItem';
import { useAppState } from './AppStateContext';
import { CustomDragLayer} from "./components/CustomDragLayer";

import { AppContainer } from './styles';

const App = () => {
    const { state, dispatch } = useAppState();
    return (
        <AppContainer>
            <CustomDragLayer />
            {state.lists.map((list, i) => (
                <Column id={list.id} text={list.text} key={list.id} index={i} />
            ))}
            <AddNewItem
                onAdd={(text) => dispatch({ type: 'ADD_LIST', payload: text })}
                toggleButtonText="+ Add another list"
            />
        </AppContainer>
    );
};

export default App;
