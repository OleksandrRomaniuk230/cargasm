import _ from 'lodash'
class ValidationError {
  constructor({ data }) {
    this.errors = data.errors
  }

  getErrors() {
    let err = {}
    _.forEach(this.errors, el => { Object.assign(err, { [el.param]: [el.msg] }) });
    return err
  }
}

export default ValidationError;
