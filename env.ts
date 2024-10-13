import { prices } from "./prices_2023";

export const RPC_USER = "";
export const RPC_PASS = "";
export const RPC_PORT = 27486;
export const SYSTEM_ID = "i5w5MuNik5NtLcYmNzcvaoixooEebB6MGV";

export const API_METHOD = "listtransactions"
export const API_PARAMETER_ARRAY = [{
  nativeprices: prices,
  costbasisdata: {},
  offchaintransfers: [],
  fromblock: 2350305,
  toblock: 2859403
}, 1000000]