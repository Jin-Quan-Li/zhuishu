
import { combineReducers } from 'redux';
import { counterStore as classconten } from '../pages/Classification/store';
import { counterStore as search } from '../pages/Search/store';
import { counterStore as bookList } from '../pages/BookList/store';
import { counterStore as bookDetailed } from '../pages/BookDetailed/store';
import { counterStore as bookContent } from '../pages/BookContent/store';
import { counterStore as ranking } from '../pages/Ranking/store';
import { counterStore as saidRanking } from '../pages/SaidRanking/store';
import { counterStore as bookcase } from '../pages/Bookcase/store';

const counterStore = combineReducers({
    classconten,
    search,
    bookList,
    bookDetailed,
    bookContent,
    ranking,
    saidRanking,
    bookcase
})

export default counterStore