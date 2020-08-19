export function create(Cls, attribute, ...children) {
    let o;

    if (typeof Cls === 'string') {
        o = new Wrapper(Cls)
    }else{
        o = new Cls({a:1});
    }
    
    for (let name in attribute) {
        // o[name] = attribute[name]
        o.setAttribute(name, attribute[name])
    }
    let visit = (children)=>{
        for (let child of children) {
            // o[name] = attribute[name]
            if ( child instanceof Array) {
                visit(child)
                continue
            }
            if (typeof child === 'string') {
                child = new Text(child)
            }
            o.appendChild(child)
        }

    }
    visit(children)
    

    return o;
}


export class Text{
    constructor(text){
        this.root = document.createTextNode(text)
    }
    mountTo(parent){
        parent.appendChild(this.root)
    }
}

export class Wrapper{
    constructor(type){
        this.root = document.createElement(type);
        this.children = []
    }
    set class(v){
        console.log('Parent::class', v);
        
    }
    set id(v){
        console.log('Parent::id', v);
        
    }
    get style(){
        return this.root.style
    }
    setAttribute(name, value){
        console.log(name, value);
        this.root.setAttribute(name, value)
    }
    appendChild(child){
        // child.mountTo(this.root);

        this.children.push(child)
        
    }
    addEventListener(type, fun){
        this.root.addEventListener(type, fun)
    }
    
    mountTo(parent){
        parent.appendChild(this.root)
        for (let child of this.children) {
            child.mountTo(this.root)
        }
    }
}