export
const retrieve_local_file = (accept?: string) => {
  const input = document.createElement('input')
  input.type = 'file'
  if (accept)
    input.accept = accept

  return new Promise<File>(res => {
    input.addEventListener('change', () => {
      res(input.files![0])
    })
    input.click()
  })
}

export
const retrieve_local_file_as_dataurl = async (accept?: string) => {
  const file = await retrieve_local_file(accept)
  return URL.createObjectURL(file)
}

export
const retrieve_local_img = async (accept?: string) => {
  const url = await retrieve_local_file_as_dataurl(accept)
  let _img: HTMLImageElement
  return {
    url,
    get img() {
      if (_img)
        return _img
      else {
        _img = new Image()
        _img.src = url
        return _img
      }
    },
  }
}
