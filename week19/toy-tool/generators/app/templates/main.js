
import { create, Text, Wrapper} from "../lib/createElement.js";



class Carousel{
    constructor(config){
        this.root = document.createElement('div');
        this.children = [];
        this.attributes = new Map();
    }
    // set class(v){
        // console.log('Parent::class', v);
        // this.root.classList.add(v)
        // return v
    // }
    // 
    // set id(v){
        // console.log('Parent::id', v);
        
    // }
    setAttribute(name, value){
        this.attributes.set(name, value)
        this[name] = value
    }
    appendChild(child){
        this.children.push(child)
    }

    render(){
        let children = this.data.map(i=>{
            let ele = <img src={i} />;
            ele.addEventListener('dragstart', e=>e.preventDefault())
            return ele
        })
        let root =  <div class={this.attributes.get('class')}>
                {children}
            </div>

        let position = 0;

        let timer = null;

        let nexPic =  ()=>{
            let nextPostion = ( position + 1) % this.data.length;

            let current = children[position];
            let next = children[nextPostion];

            current.style.transition  = "ease 0s";
            next.style.transition  =  "ease 0s";
        
            current.style.transform  = `translateX(${ -100 * position}%)`;
            next.style.transform  = `translateX(${ 100 -100 * nextPostion}%)`;

            setTimeout(() => {
                current.style.transition  = "ease 0.5s";
                next.style.transition  =  "ease 0.5s";
            
                current.style.transform  = `translateX(${-100 -100 * position}%)`;
                next.style.transform  = `translateX(${-100 * nextPostion}%)`;

                position = nextPostion;
            }, 16);
            timer = setTimeout(nexPic, 3000)
        }
        timer = setTimeout(nexPic, 3000)

        
        root.addEventListener('mousedown', e => {
            timer&&clearTimeout(timer)
            let startX = e.clientX, startY = e.clientY;
            let nextPostion = ( position + 1) % this.data.length;
            let lastPostion = ( position - 1 + this.data.length) % this.data.length;

            let current = children[position];
            let last = children[lastPostion];
            let next = children[nextPostion];

            current.style.transition  = "ease 0s";
            next.style.transition  = "ease 0s";   
            last.style.transition  = "ease 0s";   

            current.style.transform  = `translateX(${-500 * position}px)`;
            next.style.transform  = `translateX(${-500 -500 * nextPostion}px)`;
            last.style.transform  = `translateX(${500 -500 * lastPostion}px)`;

            
            let move = e=>{
                current.style.transform  = `translateX(${e.clientX - startX - 500 * position}px)`;
                last.style.transform  = `translateX(${e.clientX - startX - 500 - 500 * lastPostion}px)`;
                next.style.transform  = `translateX(${e.clientX - startX + 500 - 500 * nextPostion}px)`;
            }
            let up = e=>{
                let offset = 0;
                
                if (e.clientX - startX > 250) {
                    offset = 1;
                } else if(e.clientX - startX < -250){
                    offset = -1;
                }

                current.style.transition  = "ease 0.5s";
                next.style.transition  = "ease 0.5s";   
                last.style.transition  = "ease 0.5s";   

                current.style.transform  = `translateX(${offset * 500  - 500 * position}px)`;
                last.style.transform  = `translateX(${offset * 500  - 500 - 500 * lastPostion}px)`;
                next.style.transform  = `translateX(${offset * 500  + 500 - 500 * nextPostion}px)`;

                position = ( position - offset + this.data.length) % this.data.length;

                timer = setTimeout(nexPic, 3000)
                document.removeEventListener("mousemove", move);
                document.removeEventListener("mouseup", up);
            }
            document.addEventListener("mousemove", move);
            document.addEventListener("mouseup", up);
            
        })

        return root
    }

    mountTo(parent){
        this.render().mountTo(parent)
    }
}
// class MyComponent{
//     constructor(config){
//         this.root = document.createElement('div');
//         this.children = [];
//         this.attributes = new Map();
//     }
//     set class(v){
//         console.log('Parent::class', v);
        
//     }
//     set id(v){
//         console.log('Parent::id', v);
        
//     }
//     setAttribute(name, value){
//         this.attributes.set(name, value)
//         this.root.setAttribute(name, value)
//     }
//     appendChild(child){
//         // child.mountTo(this.root);
//         // this.slot.appendChild(child)
//         this.children.push(child)
        
//     }

//     render(){
//         return <article>
//             <h1>{this.attributes.get('title')}</h1>
//             <header>I'm a header</header>
//             {this.slot}
//             <footer>I'm a footer</footer>
//         </article>
        
//     }

//     mountTo(parent){
//         this.slot = <div></div>
//         // parent.appendChild(this.root)
//         for (let child of this.children) {
//             this.slot.appendChild(child)
//             // child.mountTo(this.slot)
//         }
//         this.render().mountTo(parent)
//     }
// }



// class Child{
//     constructor(config){
//         console.log(config);
//         this.root = document.createElement('div')
//     }
//     set class(v){
//         console.log('Parent::class', v);
        
//     }
//     set id(v){
//         console.log('Parent::id', v);
        
//     }
//     setAttribute(name, value){
//         console.log(name, value);
//         this.root.setAttribute(name, value)
//     }
//     appendChild(child){
//         child.mountTo(this.root)
        
//     }
//     mountTo(parent){
//         parent.appendChild(this.root)
//     }
// }

// let component = <div id="a" class="b" style="width:100px; height:100px; background:red">
//                     <div>1</div>
//                     <div>2</div>
//                     <div>3</div>
//                 </div>
// let component = <Div id="a" class="b" style="width:100px; height:100px; background:red">
//                     <Div></Div>
//                     <Div></Div>
//                     <Div></Div>
//                 </Div>
let component = <Carousel class='carousel' data={[
    "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
    "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
    "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
    "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
]}></Carousel>
       component.mountTo(document.body)

// console.log(component);
// component.setAttribute("id", "a")
// alert(111)