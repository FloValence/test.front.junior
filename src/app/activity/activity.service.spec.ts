import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { louvre } from './activity.mock.spec';
import { ActivityService } from './activity.service';

describe('ActivityService', () => {
	let service: ActivityService;
	let httpCtrl: HttpTestingController;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
			],
			providers: [
				ActivityService,
			]
		});
		httpCtrl = TestBed.get(HttpTestingController);
	});
	beforeEach(inject([ActivityService], (_service: ActivityService) => {
		service = _service;
	}));
	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	describe('getActivityById', () => {
		it('should call http.get', () => {
			const id = louvre.id;

			service.getActivityById(id).subscribe(d => d);

			const req = httpCtrl.expectOne(`/api/activities/${id}`);
			expect(req.request.method).toEqual('GET');
			req.flush(louvre);
		});
		it('should return the result unscathed', () => {
			const id = louvre.id;

			service.getActivityById(id).subscribe(d => {
				expect(d).toBe(louvre);
			});

			const req = httpCtrl.expectOne(`/api/activities/${id}`);
			req.flush(louvre);
		});
	});

	describe('getActivitiesByDestinationId', () => {
		it('should call http.get', () => {
			const destinationId = louvre.destinationId;

			service.getActivitiesByDestinationId(destinationId).subscribe(d => d);

			const req = httpCtrl.expectOne(`/api/activities/?destinationId=${destinationId}`);
			expect(req.request.method).toEqual('GET');
			req.flush([louvre]);
		});

		it('should return the result unscathed', () => {
			const destinationId = louvre.destinationId;

			service.getActivitiesByDestinationId(destinationId).subscribe(d => {
				expect(d).toEqual([louvre]);
			});

			const req = httpCtrl.expectOne(`/api/activities/?destinationId=${destinationId}`);
			req.flush([louvre]);
		});
	});
});
