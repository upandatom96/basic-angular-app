import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { Doodad } from "src/app/models/Doodad.model";

@Component({
  selector: "app-doodad-form",
  templateUrl: "./doodad-form.component.html",
  styleUrls: ["./doodad-form.component.css"]
})
export class DoodadFormComponent implements OnInit {
  public doodad: Doodad = null;

  public get ready(): boolean {
    return BooleanHelper.notNull(this.doodad);
  }

  public get editMode(): boolean {
    return this.ready && BooleanHelper.notNull(this.doodad._id);
  }

  constructor(
    private route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this.setupForm();
  }

  private setupForm() {
    const urlId = this.route.snapshot.paramMap.get("id");
    if (BooleanHelper.notNull(urlId)) {
      this.setupEditForm(urlId);
    } else {
      this.setupCreateForm();
    }
  }

  private setupEditForm(id: string): void {
    this.doodad = {
      name: null,
      _id: id,
      type: null,
      description: null,
      age: null,
      used: false,
    };
  }

  private setupCreateForm(): void {
    this.doodad = {
      name: null,
      _id: null,
      type: null,
      description: null,
      age: null,
      used: false,
    };
  }
}
