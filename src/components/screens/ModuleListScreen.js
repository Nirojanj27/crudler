import { StyleSheet} from 'react-native'
import Screen from './layout/Screen';
import ModuleList from '../entity/modules/ModulesList.js';

import initialModules from '../../data/modules.js';

const ModuleListScreen = () => {
  //Initiallsations __________________
  const modules = initialModules;

  //State  ________________________
  //Handlers ______________________
  const handleSelect = (module) => alert(`Item ${module.ModuleCode} Selected`);
  //View _____________________________
  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});


export default ModuleListScreen;