import { NextApiResponse, NextApiRequest } from 'next'

type RouterItem = Function | Function[]
interface Routes {
  [method: string]: RouterItem
  get: RouterItem
  put: RouterItem
  post: RouterItem
  patch: RouterItem
  delete: RouterItem
}

interface Options {
  errorHandler(err, req, res): void
  middlewares: Function[]
}

const defaultOptions: Options = { errorHandler() {}, middlewares: [] }

export default function Router(options = {} as Partial<Options>) {
  const conf = { ...defaultOptions, ...options }

  return function (routes: Partial<Routes>) {
    return (req: NextApiRequest, res: NextApiResponse) => {
      const rawHandler = routes[req.method!.toLowerCase()]
      if (!rawHandler) return

      const handlers = Array.isArray(rawHandler) ? rawHandler : [rawHandler]
      const allHandlers = [...conf.middlewares, ...handlers]

      const newList = allHandlers.map((handler, ind) => {
        return async () => {
          const nextFn = newList[ind + 1]

          try {
            const rv = handler(req, res, () => nextFn && nextFn())
            if (rv instanceof Promise) await rv
          } catch (err) {
            conf.errorHandler(err, req, res)
          }
        }
      })

      const firstFn = newList[0]
      firstFn && firstFn()
    }
  }
}
