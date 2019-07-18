<!-- Paint the product columns by name and paint the box for the notes. -->

<form  [snMarkAsTouched]="form" (ngSubmit)="addCart()">
  <div class="container">
        <div class="row pt-2">
            <div class="col-xl-3 col-6">
                <div class="form-check" *ngFor="let tag of tags">
                    <label class="form-check-label" for="tag{{tag.name}}">
                        <input class="form-check-input" type="checkbox" id="tag{{tag.name}}" [name]="tag.name"
                            [checked]="tag.checked">
                        {{tag.name}}
                    </label>
                </div>
                <hr />
            </div>

            <div class="col-xl-3 col-6">
                <div class="form-check" *ngFor="let tag of tags1">
                    <label class="form-check-label" for="tag{{tag.name}}">
                        <input class="form-check-input" type="checkbox" id="tag{{tag.name}}" [name]="tag.name"
                            [checked]="tag.checked">
                        {{tag.name}}
                    </label>
                </div>
                <hr />
            </div>

            <div class="col-xl-3 col-6">
                <div class="form-check" *ngFor="let tag of tags2">
                    <label class="form-check-label" for="tag{{tag.name}}">
                        <input class="form-check-input" type="checkbox" id="tag{{tag.name}}" [name]="tag.name"
                            [checked]="tag.checked">
                        {{tag.name}}
                    </label>
                </div>
                <hr />
            </div>

            <div class="col-xl-3 col-6">
                <div class="form-check" *ngFor="let tag of tags3">
                    <label class="form-check-label" for="tag{{tag.name}}">
                        <input class="form-check-input" type="checkbox" id="tag{{tag.name}}" [name]="tag.name"
                            [checked]="tag.checked">
                        {{tag.name}}
                    </label>
                </div>
                <hr />
            </div>

        </div>
        <div class="form-group">
            <label for="note">Notes:</label>
            <textarea class="form-control rounded-0" id="note" rows="10">{{note}}</textarea>
        </div>
        <button type="submit" class="btn btn-primary">Save</button>
    </div>
</form>