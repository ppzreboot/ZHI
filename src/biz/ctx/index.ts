import { CTX, UseCTX } from '../../lib/hooks'

export
interface I_CTX_app {
  img: {
    data_url: string
    dom_el: HTMLImageElement
  }
}

export
const CTX_app = CTX<I_CTX_app>()

export
const useCTX_app = UseCTX(CTX_app)
