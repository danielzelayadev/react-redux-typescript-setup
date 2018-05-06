import { createActions, handleActions } from 'redux-actions';
import { noop } from '../../utils/common';
import { IStore } from '../types';
import { ActionTypes, IState, Payload } from './types';

export const actions = createActions<Payload>({
  [ActionTypes.ADD_CLICK]: noop,
  [ActionTypes.RESET_CLICKS]: noop
});

export const initialState: IState = { clicks: 0 };

export default handleActions<IState, Payload>(
  {
    [ActionTypes.ADD_CLICK]: state => ({ ...state, clicks: state.clicks + 1 }),
    [ActionTypes.RESET_CLICKS]: state => ({ ...state, clicks: 0 })
  },
  initialState
);

export const getClicks = (store: IStore) => store.ui.clicks;
