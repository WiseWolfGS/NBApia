"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let HomeComponent = class HomeComponent {
};
exports.HomeComponent = HomeComponent;
exports.HomeComponent = HomeComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        standalone: true,
        selector: 'app-home',
        imports: [router_1.RouterModule],
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css'],
        encapsulation: core_1.ViewEncapsulation.None,
    })
], HomeComponent);
