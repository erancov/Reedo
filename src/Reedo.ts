
/*
@Name: Reedo
@Version: 1.0
@Description: Reedo, a basic hyperscript library
@Author: Rancov Emanuel Miroslav
@Author URI: https://github.com/erancov/Reedo
*/

import { ReedoComponent, ReedomCreateElement, ReedomElement } from './types/Reedom';

// reedo main class
class Reedo implements ReedoComponent {

  public createElement(
    tagName: string,
    {
      props = {},
      children = []
    }: ReedomElement
  ): ReedomCreateElement {
    return {
      tagName,
      props,
      children
    };
  }
}

export default new Reedo();
