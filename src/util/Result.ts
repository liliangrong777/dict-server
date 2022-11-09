class Result<T = null> {
  msg: string
  code: number
  data: T | null
  constructor (data = null,code = 200,msg = 'success') {
    this.msg = msg
    this.code = code
    this.data = data
  }
}
export class SuccessResult<T> extends Result<T> {
  constructor (data,code = 200) {
    super(data,code)
  }
}

export class ErrorResult extends Result {
  constructor (msg,code = 400) {
    super(null,code,msg)
  }
}
