import { InfoTMDB } from './services/info.service';
import { AuthTMDB } from './services/auth.service';

const apiProvider = () => ({
    InfoTMDB: () => new InfoTMDB(),
    AuthTMDB: () => new AuthTMDB(),
});

export { apiProvider };
