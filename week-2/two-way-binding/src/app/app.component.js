"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n  <br /><br /><br />\n\n  <div class=\"container-fluid two-way-form\">\n    <h2>Two-Way Binding Example</h2><br />\n    <div class=\"form-group\">\n        <input class=\"form-control\" type=\"text\",\n               placeholder=\"Heather Peterson\"\n               [(ngModel)]=\"name\">\n        <button class=\"btn btn-primary form-control\" (click)=\"name=''\">Clear Name</button>\n    </div>\n    <div class=\"form-group\">\n        <p class=\"alert-success\">Welcome to two-way binding, {{name}}! </p>\n    </div>\n  </div>\n",
            styles: [
                "\n    .two-way-form {\n      width: 50%,\n    }\n  "
            ]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
