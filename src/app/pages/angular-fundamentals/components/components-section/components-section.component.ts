// components-section.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MessageModule } from 'primeng/message';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-components-section',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, ToggleButtonModule, MessageModule, ChipModule],
  templateUrl: './components-section.component.html',
  styleUrls: ['./components-section.component.scss']
})
export class ComponentsSectionComponent {
  showWelcome = true;
  isEditable = true;
  childMessage = '';
  receivedMessage?: string;
  angularSkills = [{ id: 1, name: 'Components' }, { id: 2, name: 'Directives' }];
  lastEvent?: string;
  messageSeverity = 'info';

  handleButtonClick() {
    this.lastEvent = 'Button clicked!';
  }

  onMouseEnter() {
    this.lastEvent = 'Mouse entered!';
  }

  onMouseLeave() {
    this.lastEvent = 'Mouse left!';
  }

  onChildMessageChanged(msg: string) {
    this.receivedMessage = msg;
  }
}
