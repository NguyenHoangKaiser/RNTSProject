import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './index';

// Use throughout your app instead of plain `useDispatch` and `useSelector`

/**
 * Typed version of useDispatch saves you the need to type (state: RootState) every time
 */
export const useAppDispatch: () => AppDispatch = useDispatch;

/**
 * Typed version of useSelector, the default Dispatch type does not know about thunks.
 * In order to correctly dispatch thunks, you need to use the specific customized AppDispatch type
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
