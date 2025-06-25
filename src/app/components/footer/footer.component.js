"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let FooterComponent = class FooterComponent {
};
exports.FooterComponent = FooterComponent;
exports.FooterComponent = FooterComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'app-footer',
        standalone: true,
        imports: [router_1.RouterModule], // routerLink 사용을 위해 추가
        templateUrl: './footer.component.html',
        styleUrl: './footer.component.css'
    })
], FooterComponent);
