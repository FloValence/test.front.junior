import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Activity } from './activity.model';

@Injectable()
export class ActivityService {
	constructor(protected http: HttpClient) {}
	getActivityById(id: string): Observable<Activity> {
		return this.http.get<Activity>(`/api/activities/${id}`);
	}
	getActivitiesByDestinationId(destinationId: string): Observable<Activity[]> {
		return this.http.get<Activity[]>(`/api/activities/?destinationId=${destinationId}`);
	}
}
