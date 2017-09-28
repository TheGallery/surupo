import ReactDOM from 'react-dom';
import routes from './config/routes';
import { css } from 'glamor';
import 'glamor/reset';

css.global('html, body', {
  fontFamily: 'Nunito, sans-serif',
  fontSize: '17px'
});

ReactDOM.render(routes, document.getElementById('root'));
