import Component from "../../framework/Component";

export default class NotFound extends Component {

    constructor(host, props) {
        super(host, props);
        // this.host = document.querySelector('.modal');
    }

    render() {
        this.host = document.querySelector('.modal');
        document.querySelector('body').addEventListener('click',function () {
            document.querySelector('.modal').innerHTML ='';
        });
        return [
           {
               tag: 'div',
               classList:'not-found',
               content: 'Person is not found'
           }
        ]
    }
}
