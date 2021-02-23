import './fonts/roboto/roboto.ttf';
import './fonts/tech_mono/tech_mono.ttf';

import './styles/common/reset.css';
import './styles/common/base.css';
import './styles/site.css';

import loadPokemonRange from './data/pokeapi-data.js';
import printPkmnList from './ui-helper/ui-index.js';

loadPokemonRange(1, 151, printPkmnList);