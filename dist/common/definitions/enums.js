"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseType = exports.EnvironmentType = void 0;
var EnvironmentType;
(function (EnvironmentType) {
    EnvironmentType["Development"] = "development";
    EnvironmentType["Production"] = "production";
    EnvironmentType["Local"] = "local";
    EnvironmentType["Test"] = "test";
})(EnvironmentType || (exports.EnvironmentType = EnvironmentType = {}));
var DatabaseType;
(function (DatabaseType) {
    DatabaseType["Mongodb"] = "mongodb";
})(DatabaseType || (exports.DatabaseType = DatabaseType = {}));
//# sourceMappingURL=enums.js.map