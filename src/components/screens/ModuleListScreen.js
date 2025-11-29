import { useState } from 'react';
import { StyleSheet} from 'react-native'
import Screen from './layout/Screen';
import ModuleList from '../entity/modules/ModulesList.js';

import initialModules from '../../data/modules.js';

const ModuleListScreen = () => {
  //Initiallsations __________________
  //State  ________________________
  const [modules, setModules] = useState(initialModules);

  //Handlers ______________________
  const handleDelete = (module) =>  setModules( modules.filter( (item) => item.ModuleID !== module.ModuleID) );
  
  //View _____________________________
  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleDelete} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});


export default ModuleListScreen;