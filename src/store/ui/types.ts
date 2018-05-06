export interface IState {
  clicks: number;
}

export type Payload = void;

export enum ActionTypes {
  ADD_CLICK = 'ADD_CLICK',
  RESET_CLICKS = 'RESET_CLICKS'
}
