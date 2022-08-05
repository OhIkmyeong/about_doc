export function makeDOM(TYPE, str=""){
    const $dom = document.createElement(TYPE);
    $dom.innerHTML = str;
    switch(TYPE){
        case "A" :
            $dom.setAttribute('href',str);
            $dom.setAttribute('target',"_blank");
            break;
    }
    return $dom;
}//makeDOM

export function appendAll($parent,rest = []){
    rest.forEach($dom => $parent.appendChild($dom));
}//appendAll