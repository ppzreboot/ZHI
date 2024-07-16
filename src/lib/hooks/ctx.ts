import { createContext, type Context, useContext } from 'react'

export
const CTX = <I_CTX>() =>
  createContext<I_CTX | null>(null)

export
const UseCTX = <I_CTX>(CTX: Context<I_CTX>) => () => {
  const ctx = useContext(CTX)
  if (ctx === null)
    throw Error('no context provider')
  return ctx
}