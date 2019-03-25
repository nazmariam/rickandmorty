import Component from "../../framework/Component";
import RickandmortyAPI from "../../services/RickandmortyAPI"
import AppState from "../../services/AppState";
import {CharacterItem} from "../CharacterItem"


export default class CharacterList extends  Component{
    constructor(host,props){
        super(host,props);
        AppState.watch('props',this.updateMyself);
        AppState.watch('clicks',this.updateMyself);

    }
    bindBeforeRender() {
        // this.requestWeather = this.requestWeather.bind(this);
        this.updateMyself = this.updateMyself.bind(this);
        // this.onClick = this.onClick.bind(this);
        this.state = {
            result:[],
            firstRun:true,
        }
    };

    updateMyself(subState,i) {
        //
    console.log(subState,i);
        let newState= {
            result: subState.results,

        };
        // do update
        this.updateState(newState);
    }
    // onClick(e){
    //     e.stopPropagation();
    //     console.log('!!!!!!!!!!*****',this.state.result);
    //
    //     let hst = document.getElementById('app');
    //     let id = e.target.closest('.forecast-item').getAttribute('data-id');
    //     new CharacterItem(hst,this.state.result[id])
    //     // AppState.update('props',{data, i});
    //     // console.log(i);
    //     // AppState.update('clicks',data);
    // }
    render(){
            RickandmortyAPI.getCharacterList('character')
            .then(data => {
                if (!data) {
                    return;
                }
                if(this.state.firstRun){
                // this.state.firstRun = false;
                // AppState.update('props',data);
                this.updateState({result:data.results,firstRun: false});
                console.log(this.state);
            }})

        return this.state.result.map((item,ind,arr) =>

            (
                {
                    tag: 'li',
                    classList: 'forecast-item',
                    children:[
                        {
                            tag: 'a',
                            attributes:[
                                {
                                    name: 'href',
                                    value:`#/item/${item.id}`
                                }
                            ],
                            children: [
                                {   tag: 'span',
                                    content:item.name
                                },
                                {
                                    tag: 'img',
                                    attributes: [
                                        {
                                            name: 'src',
                                            value: item.image,
                                        },
                                    ]
                                }

                            ],
                        }
                    ],

                    attributes:[
                        {
                            name: 'data-id',
                            value: item.id-1,
                        },

                    ],
                    // eventHandlers: [
                    //     {
                    //         eventType: 'click',
                    //         eventMethod: this.onClick, // bind(this): constructor(){this.method = this.method.bind(this);}
                    //     },
                    // ],
                }
            ))
    }
}


