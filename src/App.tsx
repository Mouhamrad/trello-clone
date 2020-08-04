import React from 'react';
import { Column } from "./components/Column";
import { Card } from "./components/Card";
import { AddNewItem } from "./components/AddNewItem";

import { AppContainer } from "./styles";

function App() {
  return (
      <AppContainer>
        <Column text="TO DO">
          <Card text="Generate app scaffold" />
        </Column>
        <Column text="In Progress">
          <Card text="Learn Typescript"/>
        </Column>
        <Column text="Done">
          <Card text="Begin to use static typing"/>
        </Column>
        <AddNewItem onAdd={console.log} toggleButtonText="+ Add another list" />
      </AppContainer>
  );
}

export default App;
