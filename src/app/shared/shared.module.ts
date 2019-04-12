import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { InfoSubsectionComponent } from './components/info-subsection/info-subsection.component';
import { TextColorDirective } from './directives/text-color.directive';

@NgModule({
  declarations: [
    InfoSectionComponent,
    InfoSubsectionComponent,
    BasicHighlightDirective,
    TextColorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InfoSectionComponent,
    InfoSubsectionComponent,
    BasicHighlightDirective,
    TextColorDirective
  ]
})
export class SharedModule { }
