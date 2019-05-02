import { Component, Input } from '@angular/core';

import { Activity } from './activity.model';

@Component({
	selector: 'app-activity',
	templateUrl: './activity.component.html',
	styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {
	@Input() activity: Activity;
}
