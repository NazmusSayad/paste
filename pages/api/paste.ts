import { createPaste } from '../../src/controller/pasteController'
import router from '../../src/router'

export default router({
  post: createPaste,
})
