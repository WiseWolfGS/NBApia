"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NBAFreeComponent = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@angular/common");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let NBAFreeComponent = class NBAFreeComponent {
};
exports.NBAFreeComponent = NBAFreeComponent;
exports.NBAFreeComponent = NBAFreeComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        standalone: true,
        selector: 'app-home',
        imports: [common_1.CommonModule, router_1.RouterModule],
        templateUrl: './nbafree.component.html',
        styleUrl: './nbafree.component.css'
    })
], NBAFreeComponent);
