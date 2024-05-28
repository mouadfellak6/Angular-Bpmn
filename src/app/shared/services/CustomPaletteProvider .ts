import BpmnModeler from 'bpmn-js/lib/Modeler';

export default class CustomPaletteProvider {
  constructor(private palette: any) {
    palette.registerProvider(this);
  }

  getPaletteEntries() {
    return (entries: any) => {
      //delete entries["create.exclusive-gateway"];
      delete entries["create.data-object"];
      delete entries["create.subprocess-expanded"];
      delete entries["create.data-store"];
 
     
      return entries;
    };
  }
}
