import { ScrollView, StyleSheet, } from 'react-native';
import ModuleItem from './ModulesItem.js';

const ModuleList= ({modules,  onSelect})=>{
    //Initiallsations __________________
    //State  ________________________
    //Handlers ______________________
    //View _____________________________
    return(
      <ScrollView style={styles.container}>
      {modules.map((module)=>{
        return<ModuleItem key={module.ModuleCode} module={module} onSelect={onSelect}/>;
      })}
      </ScrollView>
    );

};

const  styles = StyleSheet.create({});

export  default ModuleList;