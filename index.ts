import Reedo from './src/reedo';
import { ReedomCreateElement } from './src/types/Reedom';

class App {
  public render(): void {
    const el: ReedomCreateElement = Reedo.createElement('div', {
      props: { className: 'container' },
      children: ['Hello from v-dom']
    });

    console.log('el', el);
  }
}

const app = new App();

app.render();
