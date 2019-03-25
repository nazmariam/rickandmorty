export default class Component {
    constructor(host, props = {}) {
        this.host = host;
        this.props = props;
        this.bindBeforeRender();
        this._render();
    }
    bindBeforeRender() {
        // this.updateState = this.updateState.bind(this);
    }

    _render(st) {
        this.host.innerHTML = "";
        let content = this.render(st);

        if (!Array.isArray(content)) {
            content = [ content ];
        }

        content.map(item => this._vDomPrototypeElementToHtmlElement(item)) // [string|HTMLElement] => [HTMLElement]
            .forEach(htmlElement => {
                this.host.appendChild(htmlElement);
            });
    }

    updateState(state) {
        const nextState = Object.assign({}, this.state, state);
        this.state = nextState;
        this._render(this.state);
        return nextState;
    }
    render() {
        return 'OMG! They wanna see me!';
    }





    _vDomPrototypeElementToHtmlElement(element) {
        if (typeof element === 'string') {
            let container;
            const containsHtmlTags = /[<>&]/.test(element);
            if (containsHtmlTags) {
                container = document.createElement('div');
                container.innerHTML = element;
            } else {
                container = document.createTextNode(element);
            }
            return container;
        } else {
            if (element.tag) {
                if (typeof element.tag === 'function') {

                    const container = document.createElement('ul');
                    new element.tag(container, element.props);

                    return container;
                } else {
                    // string
                    const container = document.createElement(element.tag);
                    if (element.content !== undefined) {
                        container.innerHTML = element.content;
                    }

                    // ensure following element properties are Array
                    ['classList', 'attributes', 'children'].forEach(item => {
                        if (element[item] && !Array.isArray(element[item])) {
                            element[item] = [element[item]];
                        }
                    });
                    if (element.classList) {
                        container.classList.add(...element.classList);
                    }
                    if (element.attributes) {
                        element.attributes.forEach(attributeSpec => {
                            container.setAttribute(attributeSpec.name, attributeSpec.value);
                        });
                    }

                    // process eventHandlers
                    if (element.eventHandlers){
                        element.eventHandlers.forEach(attributeSpec => {
                            container.addEventListener(attributeSpec.eventType, attributeSpec.eventMethod);
                        });
                    }

                    // process children
                    if (element.children) {
                        element.children.forEach(el => {
                            const htmlElement = this._vDomPrototypeElementToHtmlElement(el);
                            container.appendChild(htmlElement);
                        });
                    }

                    return container;
                }
            }
            return element;
        }
    }
}
