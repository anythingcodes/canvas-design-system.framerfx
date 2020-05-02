/**
 *
 * Composes the given functions using regular function composition.
 *
 * The resulting function will first apply the right most function, followed by the
 * second to last, etc.
 *
 * Example:
 * ```typescript
 *
 * const func = compose(
 *   x => [...x, "Left"],
 *   x => [...x, "Right"],
 * )
 * console.log(func([])) // will result in [Right, Left]
 * ```
 */
export function compose<T>(func: T, ...funcs): T {
  return funcs.reduce((reducedFunction, nextFunction) => {
    return (...args) => reducedFunction(nextFunction(...args))
  }, func)
}
