// src/app/pages/angular-fundamentals/components/forms-section/forms-section.component.ts
// src/app/pages/angular-fundamentals/components/forms-section/forms-section.component.ts
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-forms-section',

  imports: [FormsModule, ReactiveFormsModule, InputTextModule, ButtonModule, MessageModule, DividerModule],
  templateUrl: './forms-section.component.html',
  styleUrls: ['./forms-section.component.scss']
})
export class FormsSectionComponent {
  templateFormData = { name: '', email: '' };
  reactiveForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });
  formSubmissionResult?: { severity: string; text: string };

  submitTemplateForm(form: any) {
    if (form.valid) this.formSubmissionResult = { severity: 'success', text: 'Template form submitted!' };
  }

  submitReactiveForm() {
    if (this.reactiveForm.valid) this.formSubmissionResult = { severity: 'success', text: 'Reactive form submitted!' };
  }
}
