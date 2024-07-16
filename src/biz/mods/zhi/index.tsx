import { useCTX_app } from '../../ctx'

export
const ZHI = () => {
  const ctx_app = useCTX_app()
  return <div>
    <img src={ctx_app.img.data_url} />
  </div>
}
