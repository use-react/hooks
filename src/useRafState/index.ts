import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { useRafCallback } from '#root/useRafCallback/index.js';
import { useUnmountEffect } from '#root/useUnmountEffect/index.js';

export function useRafState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
export function useRafState<S = undefined>(): [
  S | undefined,
  Dispatch<SetStateAction<S | undefined>>
];

/**
 * Like `React.useState`, but state is only updated within animation frame.
 */
export function useRafState<S>(
  initialState?: S | (() => S)
): [S | undefined, Dispatch<SetStateAction<S>>] {
  const [state, innerSetState] = useState<S | undefined>(initialState);

  const [setState, cancelRaf] = useRafCallback(innerSetState);

  useUnmountEffect(cancelRaf);

  return [state, setState as Dispatch<SetStateAction<S>>];
}
