import Component from "../../framework/Component";
import RickandmortyAPI from "../../services/RickandmortyAPI"
import AppState from "../../services/AppState";


export default class CharacterItem extends  Component{
    constructor(host,props){
        super(host,props);
        AppState.watch('props',this.updateMyself);
        // AppState.watch('clicks',this.updateMyself);

    }
    bindBeforeRender() {
        // this.requestWeather = this.requestWeather.bind(this);
        this.updateMyself = this.updateMyself.bind(this);
        this.state = {
            id:this.props,
        }
    };

    updateMyself(subState) {
        //

        let newState= {
            id: subState,
        };
        // do update
        this.updateState(newState);
    }
    render() {
    document.querySelector('body').addEventListener('click',function () {
        location.reload();
    });
        return [
            {
                tag: 'div',
                classList: 'item-character-wrap',
                children:[
                    {
                        tag:'img',
                        attributes:[
                            {
                                name: 'src',
                                value: this.state.id.image
                            }
                        ]
                    },
                    {
                        tag:'span',
                        classList: 'item-character',
                        content:this.state.id.name,
                    },
                    {
                        tag:'span',
                        classList: 'item-character',
                        content:this.state.id.gender,
                    },
                    {
                        tag:'span',
                        classList: 'item-character',
                        content:this.state.id.location.name,
                    },
                    {
                        tag:'span',
                        classList: 'item-character',
                        content:this.state.id.species,
                    },
                    {
                        tag:'span',
                        classList: 'item-character',
                        content:this.state.id.status,
                    },
                ]
            }
        ]
    }
}


