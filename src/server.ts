import dotenv from 'dotenv';
import { App } from './index';
import { AppController } from './controllers/app.controller';

dotenv.config();

const port = 8000;
const app = new App([new AppController()], port);

app.listen();
