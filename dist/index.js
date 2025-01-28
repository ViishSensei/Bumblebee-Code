import Bumblebee from './base/Client.js';
import config from './config/config.js';
const client = new Bumblebee();
client.login(config.token);
export default client;
