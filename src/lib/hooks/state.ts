import { useState } from 'react'

export
const useState_real = <V>(init_val: V) => {
  const [val, set] = useState(init_val)
  return { val, set }
}

export
const useState_null = <V>() =>
  useState_real<V | null>(null)
