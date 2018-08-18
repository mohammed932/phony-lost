import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CustomeInputComponent } from './custome-input/custome-input';
import { ItemCardComponent } from './item-card/item-card';
@NgModule({
	declarations: [CustomeInputComponent,
    ItemCardComponent],
	imports: [IonicModule],
	exports: [CustomeInputComponent,
    ItemCardComponent]
})
export class ComponentsModule {}
