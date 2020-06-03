function match(selector, ele) {
    let selecters = selector.split(' ');
    
    //当前元素
    if (!matchSelector(selecters[selecters.length - 1], ele)) {
        return false
    } 
    let node = ele.parentNode;
    for (let i = selecters.length - 2; i >= 0; i--) {
        while (node) {
            if (node.tagName === 'HTML') {
                return false;
            }
            if (matchSelector(selecters[i], node)) {
                break;
            }
            node = node.parentNode;
        }
    }
    return true
}

function matchSelector(selector, ele){
    let id = selector.match(/#([a-zA-Z0-9_-]+)/);
    if (id && ele.id !== id[1]) {
        return false
    } 
    let className = selector.match(/\.([a-zA-Z0-9_-]+)/);
    if(className && !Array.prototype.includes.call(ele.classList, className[1])){
        return false
    }
    let attr = selector.match(/\[([a-zA-Z]+)=([a-zA-Z]+)\]/);
    if (attr && ele[attr[1]] !== attr[2]) {
        return false
    }
    let tag = selector.match(/^[a-zA-Z]+/);
    if (tag && ele.tagName !== tag[0].toUpperCase()) {
        return false
    }
    return true
}