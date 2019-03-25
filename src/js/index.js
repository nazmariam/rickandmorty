import '../../node_modules/normalize.css/normalize.css'
import './../sass/main.scss'
import './../sass/_media.scss'

import { routes } from './routes/routes';
import Router from './framework/Router'
import  {App} from './components/App/'


const router = new Router(document.getElementById('app'), routes, App);
router.init();








