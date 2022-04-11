export function debounce (fn:(...args: any[]) => void, wait: number) {
  let timerId: number | null

  return function () {
    // @ts-ignore
    clearTimeout(timerId)

    // @ts-ignore
    timerId = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, arguments)
    }, wait)
  }
}
