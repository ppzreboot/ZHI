import { useState_null } from '../lib/hooks'
import { retrieve_local_img } from '../lib/local_file'
import { CTX_app, I_CTX_app } from './ctx'
import css from './index.module.css'
import { ZHI } from './mods/zhi'

export
function App() {
  const ctx_app = useState_null<I_CTX_app>()

  return (
    <CTX_app.Provider value={ctx_app.val}>
      {ctx_app.val
        ? <ZHI />
        : <button
          className={css.choose_img}
          onClick={async () => {
            const { url, img } = await retrieve_local_img()
            ctx_app.set({
              img: {
                data_url: url,
                dom_el: img,
              }
            })
          }}
        >CLICK TO CHOOSE IMAGE</button>
      }
    </CTX_app.Provider>
  )
}
