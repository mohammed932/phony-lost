import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarketPlacePage } from './market-place';

@NgModule({
  declarations: [
    MarketPlacePage,
  ],
  imports: [
    IonicPageModule.forChild(MarketPlacePage),
    ComponentsModule
  ],
})
export class MarketPlacePageModule {}
