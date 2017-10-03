import ReactDOM from 'react-dom';
import { css } from 'glamor';
import 'glamor/reset';

import routes from './config/routes';

css.global('html, body', {
  fontFamily: 'Nunito, sans-serif',
  fontSize: '17px'
});

ReactDOM.render(routes, document.getElementById('root'));
