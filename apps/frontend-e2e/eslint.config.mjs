import cypress from 'eslint-plugin-cypress/flat';
import baseConfig from '../../eslint.config.mjs';


export default baseConfig.prepend(cypress.configs['recommended']);
