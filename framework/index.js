import { AuthTMDB, UsernameAuth } from './services/auth.service';
import { InfoTMDB } from './services/info.service';
import { RatingTMDB } from './services/raiting.service';


const apiProvider = () => ({
    InfoTMDB: () => new InfoTMDB(),
    AuthTMDB: () => new AuthTMDB(),
    RatingTMDB: () => new RatingTMDB(),
});

export { apiProvider };
