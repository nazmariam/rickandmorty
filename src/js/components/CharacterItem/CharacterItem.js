import Component from "../../framework/Component";
import RickandmortyAPI from "../../services/RickandmortyAPI"
import AppState from "../../services/AppState";


export default class CharacterItem extends  Component{
    constructor(host,props){
        super(host,props);
        // this.host = document.querySelector('.modal');
        this.id=this.props.id;
        this.getItems();
    }
    bindBeforeRender() {

        this.state = {
           item:{},
        }
    };
    getItems() {
        RickandmortyAPI.getCharacterList(`character/${this.id}`).then(res => {
            this.updateState({item: res});
        }).catch(err => {
            this.error = err;
            this.render();
        });
    }

    render() {
        const {item} = this.state;
        document.querySelector('body').addEventListener('click',function () {
            document.querySelector('.modal').innerHTML ='';
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
                                value: item.image
                            }
                        ]
                    },
                    {
                        tag:'span',
                        classList: 'item-character',
                        content:item.name,
                    },
                    {
                        tag:'span',
                        classList: 'item-character',
                        content:item.gender,
                    },
                    {
                        tag:'span',
                        classList: 'item-character',
                        content:(item.location)?item.location.name:'-',
                    },
                    {
                        tag:'span',
                        classList: 'item-character',
                        content:item.species,
                    },
                    {
                        tag:'span',
                        classList: 'item-character',
                        content:item.status,
                    },
                ]
            }
        ]
        // return 'test'
    }
}


