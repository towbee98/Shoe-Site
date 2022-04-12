import { shopActionType } from "./shop.types";

export const getShoeDetails = (param) => ({
  type: shopActionType.GET_A_SHOE_DETAILS,
  payload: param,
});
