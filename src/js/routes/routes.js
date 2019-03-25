import { CharacterList } from "../components/CharacterList";
import { CharacterItem } from "../components/CharacterItem";
import { NotFound } from "../components/NotFound";

export const routes = [
    {
        path: '',
// :TODO component
    },
    {
        path:'item/:id',
        component: CharacterItem,
    },
    {
        path: '**',
        component: NotFound,
    }
];
