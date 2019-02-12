export interface ReedoComponent {
  createElement(tagName: string, options: ReedomElement): ReedomCreateElement;
}

export interface ReedomElement {
  props: { [key: string]: any };
  children: any[];
}

export interface ReedomCreateElement extends ReedomElement {
  tagName: string;
}
