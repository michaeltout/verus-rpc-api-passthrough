"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_PARAMETER_ARRAY = exports.API_METHOD = exports.SYSTEM_ID = exports.RPC_PORT = exports.RPC_PASS = exports.RPC_USER = void 0;
const prices_2023_1 = require("./prices_2023");
exports.RPC_USER = "";
exports.RPC_PASS = "";
exports.RPC_PORT = 27486;
exports.SYSTEM_ID = "i5w5MuNik5NtLcYmNzcvaoixooEebB6MGV";
exports.API_METHOD = "listtransactions";
exports.API_PARAMETER_ARRAY = [{
        nativeprices: prices_2023_1.prices,
        costbasisdata: {},
        offchaintransfers: [],
        fromblock: 2350305,
        toblock: 2859403
    }, 1000000];
