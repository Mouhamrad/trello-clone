import React from 'react';
import { Column } from "./components/Column";
import { Card } from "./components/Card";
import { AddNewItem } from "./components/AddNewItem";
import { useAppState } from "./AppStateContext";

import { AppContainer } from "./styles";

const App = () => {
    const { state } = useAppState()
  return (
      <AppContainer>
          {state.lists.map((list, i) => (
              <Column text={list.text} key={list.id} index={i} />
          ))}
        <AddNewItem onAdd={console.log} toggleButtonText="+ Add another list" />
      </AppContainer>
  );
}

export default App;
