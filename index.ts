import { VerusdRpcInterface } from "verusd-rpc-ts-client";
import {
  API_METHOD,
  API_PARAMETER_ARRAY,
  RPC_PASS, 
  RPC_PORT, 
  RPC_USER, 
  SYSTEM_ID
} from './env';
import { ApiPrimitiveJson, ApiRequest, RequestParams } from "verus-typescript-primitives";

const verus = new VerusdRpcInterface(SYSTEM_ID, `http://localhost:${RPC_PORT}`, {
  auth: {
    username: RPC_USER,
    password: RPC_PASS
  },
});

class GeneralApiRequest extends ApiRequest {
  params: RequestParams;

  constructor(cmd: string, params: RequestParams) {
    super(SYSTEM_ID, cmd);

    this.params = params;
  }

  getParams(): RequestParams {
    return this.params;
  }

  toJson(): ApiPrimitiveJson {
    return {
      chain: this.chain,
      params: this.params
    }
  }
}

async function main() {
  const req = new GeneralApiRequest(API_METHOD, API_PARAMETER_ARRAY);
  const res = await verus.request(req);

  if (res.error) {
    console.log(JSON.stringify(res.error, null, 2))
  } else {
    console.log(JSON.stringify(res.result, null, 2))
  }
}

main()