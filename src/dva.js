import './polyfill';
import dva from 'dva';
import createHistory from 'history/createHashHistory';

import createLoading from 'dva-loading';

import 'moment/locale/zh-cn';
import './rollbar';

import './index.less';

const app = dva({
    history:createHistory()
});

app.use(createLoading());
app.model(require('./models/global').default);
app.router(require('./'))