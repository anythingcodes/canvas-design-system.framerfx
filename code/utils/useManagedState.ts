import { useState, useCallback, useEffect } from "react"
import * as hash from "object-hash"

export function useManagedState<T>(initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [currentValue, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [hash(initialValue)])

  return [currentValue, setValue]
}
