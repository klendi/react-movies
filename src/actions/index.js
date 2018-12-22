import { SET_PROGRESS } from "./types";

export const setLoadingBarProgress = value => ({
  type: SET_PROGRESS,
  payload: value
});
