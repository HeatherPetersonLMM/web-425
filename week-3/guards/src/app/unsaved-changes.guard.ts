import { Injectable } from '../../node_modules/@angular/core';
import { CanDeactivate } from '../../node_modules/@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<ProductDetailComponent> {

    canDeactivate(component: ProductDetailComponent) {
        if (component.name.dirty) {
            return window.confirm('You sitll have unsaved changes.  Are you sure you want to leave this page?');
        } else {
            return true;
        }
    }
}
