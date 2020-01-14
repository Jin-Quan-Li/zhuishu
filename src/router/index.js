import Bookcase from '../pages/Bookcase';
import Classification from '../pages/Classification';
import Ranking from '../pages/Ranking';
import Search from '../pages/Search';
import BookList from '../pages/BookList';
import BookDetailed from '../pages/BookDetailed';
import BookContent from '../pages/BookContent';
import SaidRanking from '../pages/SaidRanking';

export default [
    { path: "/", name: "Bookcase", component: Bookcase,auth: true },
    { path: "/classification", name: "Classification", component: Classification,auth: true },
    { path: "/ranking", name: "Ranking", component: Ranking,auth: true },
    { path: "/search", name: "Search", component: Search,auth: true },
    { path: "/bookList", name: "BookList", component: BookList,auth: true },
    { path: "/bookDetailed/:id", name: "BookDetailed", component: BookDetailed,auth: true },
    { path: "/bookContent/:id", name: "BookContent", component: BookContent,auth: true },
    { path: "/saidRanking/:id", name: "SaidRanking", component: SaidRanking,auth: true }
]