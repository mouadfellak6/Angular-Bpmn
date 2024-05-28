import BpmnModeler from 'bpmn-js/lib/Modeler';

export default class CustomContextPadProvider {
  constructor(private contextPad: any) {
    contextPad.registerProvider(this);
  }

  getContextPadEntries() {
    
  }
}
