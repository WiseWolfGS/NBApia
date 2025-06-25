import { __esDecorate, __runInitializers, __setFunctionName } from "tslib";
import { Component } from '@angular/core';
let AppComponent = (() => {
    let _classDecorators = [Component({
            selector: 'app-root',
            standalone: true,
            template: '<h1 class="text-3xl font-bold text-center mt-10 text-blue-600">NBApia SSR Works!</h1>'
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AppComponent = _classThis = class {
    };
    __setFunctionName(_classThis, "AppComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppComponent = _classThis;
})();
export { AppComponent };
