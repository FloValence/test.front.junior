import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Other modules
import { ApiModule } from '../api';

// Module parts
import { ActivityService } from './activity.service';
import { ActivityComponent } from './activity.component';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		ApiModule,
	],
	providers: [
		ActivityService,
	],
	declarations: [
		ActivityComponent,
	],
	exports: [
		ActivityComponent,
	]
})
export class ActivityModule {}
