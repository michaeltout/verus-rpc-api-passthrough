"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const verusd_rpc_ts_client_1 = require("verusd-rpc-ts-client");
const env_1 = require("./env");
const verus_typescript_primitives_1 = require("verus-typescript-primitives");
const verus = new verusd_rpc_ts_client_1.VerusdRpcInterface(env_1.SYSTEM_ID, `http://localhost:${env_1.RPC_PORT}`, {
    auth: {
        username: env_1.RPC_USER,
        password: env_1.RPC_PASS
    },
});
class GeneralApiRequest extends verus_typescript_primitives_1.ApiRequest {
    constructor(cmd, params) {
        super(env_1.SYSTEM_ID, cmd);
        this.params = params;
    }
    getParams() {
        return this.params;
    }
    toJson() {
        return {
            chain: this.chain,
            params: this.params
        };
    }
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const req = new GeneralApiRequest(env_1.API_METHOD, env_1.API_PARAMETER_ARRAY);
        const res = yield verus.request(req);
        if (res.error) {
            console.log(JSON.stringify(res.error, null, 2));
        }
        else {
            console.log(JSON.stringify(res.result, null, 2));
        }
    });
}
main();
