"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainLayoutComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const header_component_1 = require("../header/header.component");
const footer_component_1 = require("../footer/footer.component");
let MainLayoutComponent = class MainLayoutComponent {
};
exports.MainLayoutComponent = MainLayoutComponent;
exports.MainLayoutComponent = MainLayoutComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'app-main-layout',
        standalone: true,
        imports: [router_1.RouterOutlet, header_component_1.HeaderComponent, footer_component_1.FooterComponent],
        templateUrl: './main-layout.component.html',
        styleUrl: './main-layout.component.css',
    })
], MainLayoutComponent);
