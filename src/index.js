import _ from 'lodash';
import { gameLoop } from './scripts/game_loop/gameLoop';
import { init } from './scripts/UI/init';
import  './styles/main.css';
import './styles/normalize.css'

init();
gameLoop();