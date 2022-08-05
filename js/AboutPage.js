import { makeDOM, appendAll } from "./fn.js";

export class AboutPage{
    constructor(DATA){
        this.DATA = DATA;
        this.init();
    }//constructor

    init(){
        this.DATA.forEach(data =>{
            const {title,url,idpw} = data;
            const $tbl = document.createElement('TABLE');
            //caption(title)
            this.make_caption(title,$tbl)
        
            //colgroup
            this.make_colgroup($tbl);
        
            //url
            this.make_url(url,$tbl);
        
            //idpw
            idpw && this.make_idpw(idpw, $tbl);
        
            //append all
            document.body.appendChild($tbl);
        });
    }//init

    make_caption(title,$tbl){
        const $caption = makeDOM("CAPTION", title);
        $tbl.appendChild($caption);
    }//make_caption

    make_colgroup($tbl){
        const $colgroup = makeDOM("COLGROUP");
        const cols = [];

        for(let i=0; i<6; i++){
            const $col = makeDOM("COL"); 
            if(i % 2 == 0){
                $col.style.setProperty('width', "13%");
            }else{
                $col.style.setProperty('width', "20.3%");
            }
            cols.push($col);
        }

        appendAll($colgroup,cols);
        $tbl.appendChild($colgroup);
    }//make_colgroup

    make_url(url,$tbl){
        const $tr = makeDOM("TR");
        const $th = makeDOM("TH","주소");
        $tr.appendChild($th);
        const a  = makeDOM("A", url);
        const $td = makeDOM("TD");
        $td.setAttribute("colspan",5);
        $td.appendChild(a);
        $tr.appendChild($td);
        $tbl.appendChild($tr);
    }//make_url

    make_idpw(idpw, $tbl){
        idpw.forEach(info => {
            const $tr = makeDOM("TR");
            const {title,id,pw} = info;
            const $thTitle = makeDOM("TH","권한");
            const $tdTitle = makeDOM("TD",title);
            const $thID = makeDOM("TH","ID");
            const $tdID = makeDOM("TD",id);
            const $thPW = makeDOM("TH","PASSWORD");
            const $tdPW = makeDOM("TD",pw ?? "");
            appendAll($tr, [$thTitle,$tdTitle,$thID,$tdID,$thPW,$tdPW]);
            $tbl.appendChild($tr);
        });
    }//make_idpw
}//AboutPage