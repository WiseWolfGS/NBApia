"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
let HeaderComponent = class HeaderComponent {
    showMenu = false;
    darkModeEnabled = false;
    toggleMenu() {
        this.showMenu = !this.showMenu;
    }
};
exports.HeaderComponent = HeaderComponent;
exports.HeaderComponent = HeaderComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'app-header',
        standalone: true,
        imports: [router_1.RouterModule, common_1.NgIf, forms_1.FormsModule], // routerLink 사용을 위해 추가
        templateUrl: './header.component.html',
        styleUrl: './header.component.css'
    })
], HeaderComponent);
