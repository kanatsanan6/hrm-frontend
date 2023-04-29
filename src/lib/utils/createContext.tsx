import * as React from "react";

/**
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 */

export function createCtx<T extends {} | null>() {
  const ctx = React.createContext<T | undefined>(undefined);

  function useCtx<K = {}>() {
    const c = React.useContext(ctx);

    if (c === undefined) {
      throw new Error("useCtx must be inside a Provider with a value");
    }

    return c as T & K;
  }

  return [useCtx, ctx.Provider, ctx] as const;
}
