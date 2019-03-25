import Component from "../../framework/Component";
import {CharacterList} from "../CharacterList";
import AppState from "../../services/AppState";

export default class App extends Component{
    constructor(host, props={}){
        super(host, props);
        // AppState.watch('clicks',this.updateMyself);
    }
    bindBeforeRender() {
        this.state = {

        };
    }

    render(){
// document.querySelector('.list').addEventListener('click',function (e) {
//     console.log(e.target);
// });
        return [
           {
               tag:CharacterList,
            }
        ]
    }
}

