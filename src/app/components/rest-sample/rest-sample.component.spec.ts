import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RestSampleComponent } from "./rest-sample.component";
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe("RestSampleComponent", () => {
  let component: RestSampleComponent;
  let fixture: ComponentFixture<RestSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RestSampleComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
