import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CustomeInputComponent } from './custome-input/custome-input';
import { ItemCardComponent } from './item-card/item-card';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner';
@NgModule({
	declarations: [CustomeInputComponent,
    ItemCardComponent,
    LoadingSpinnerComponent],
	imports: [IonicModule],
	exports: [CustomeInputComponent,
    ItemCardComponent,
    LoadingSpinnerComponent]
})
export class ComponentsModule {}
