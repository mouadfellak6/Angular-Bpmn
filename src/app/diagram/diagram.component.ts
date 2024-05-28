import { AfterContentInit, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import { MenuComponent } from './menu/menu.component';
import { BpmnService } from '../shared/services/bpmn.service';
import { HttpClientModule } from '@angular/common/http';
import { calculateMiniMapPosition, miniMapSetup } from '../helper/dom-manipulator';
import CustomPaletteProvider from '../shared/services/CustomPaletteProvider ';
import CustomContextPadProvider from '../shared/services/CustomContextPadProvider ';
import { UserService } from '../user.service';


@Component({
  selector: 'app-diagram',
  standalone: true,
  imports: [
    MenuComponent,
    HttpClientModule
  ],
  templateUrl: './diagram.component.html',
  styleUrl: './diagram.component.css'
})
export class DiagramComponent implements OnInit, AfterContentInit{

  public modeler!: BpmnModeler
  private panel: any;

  @ViewChild('ref', { static: true }) private el!: ElementRef;
  @ViewChild('properties', { static: true }) private propertiesPanel!: ElementRef;
  users: { id: string, name: string }[] = [];
  showDialog = false;
  currentShape: any = null;
  constructor(
    private bpmnService: BpmnService, private userService: UserService
  ){
  }

  ngOnInit(): void{
    this.modeler = this.bpmnService.getModeler();
  }
  
  ngAfterContentInit(): void{
    const bpmnJS = this.bpmnService.getModeler();
       
    this.modeler.attachTo(this.el.nativeElement);
    this.panel = this.modeler.get('propertiesPanel');
    this.panel.attachTo(this.propertiesPanel.nativeElement);
    this.bpmnService.setModeler(this.modeler);
    const customPaletteProvider = new CustomPaletteProvider(this.modeler.get('palette'));
    const customContextPadProvider = new CustomContextPadProvider(this.modeler.get('contextPad'));
 
    miniMapSetup();
    calculateMiniMapPosition();
  }

}
