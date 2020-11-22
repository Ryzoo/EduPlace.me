import * as classnames from 'classnames';

export class StringService {
  static logicConcat() {
    return classnames(...arguments);
  }
}
