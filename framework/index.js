import { AccountTMDB } from './services/account.service';
import { AuthTMDB } from './services/auth.service';
import { MovieTMDB } from './services/movei.service';
import { SearchTMDB } from './services/search.service';

const apiProvider = () => ({
    AccountTMDB: () => new AccountTMDB(),
    AuthTMDB: () => new AuthTMDB(),
    MovieTMDB: () => new MovieTMDB(),
    SearchTMDB: () => new SearchTMDB(),
});

export { apiProvider };
