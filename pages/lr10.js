import styles from "../styles/Lrs.module.css";
import PageHead from "../components/head";
import style from "../styles/style.module.css";
import Link from "next/link";
import classNames from "classnames";
import Image from "next/image";
import leftBiceps from "../public/mainPageLabs/leftBiceps.png";
import rightBiceps from "../public/mainPageLabs/rightBiceps.png";
import lr1 from '../styles/lr1.module.css'
import lr10 from '../styles/lr10.module.css'
import bigInt from "big-integer";
import RSAa from "../MyScripts/RSA";


let alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и',
    'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т',
    'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ',
    'э', 'ю', 'я',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' ']


const rsa = (encMessage = document.querySelector("#message").value) =>{
    function IsSimple(n) {
        if (n < 2)
            return false;

        if (n === 2)
            return true;

        for (let i = 2; i < n; i++)
            if (n % i === 0)
                return false;

        return true;
    }

    let message = encMessage
    let enc = ""
    let p = document.querySelector("#P").value
    let q = document.querySelector("#Q").value
    let n = p * q
    let m = (p-1)*(q-1)
    let d = m - 1
    for (let i = 2; i <=m ; i++) {
        if((m % i === 0) && (d % i ===0)){
            d--
            i = 1
        }
    }
    let exp = 2
    while(true){
        if((exp * d) % m === 1)
            break
        else
            exp++
    }
    let result = []
    for (let i = 0; i < message.length; i++) {
        let index = alphabet.indexOf(message[i])
        let bi = BigInt(index)
        bi = bigInt(bi).pow(exp)
        bi = bigInt(bi).mod(BigInt(n))
        result.push(bi)
    }
    for (let i = 0; i < result.length; i++) {
        enc += result[i] + " "
    }

    let D = document.querySelector("#D")
    let N = document.querySelector("#N")
    D.value = d
    N.value = n
    return enc


}

const ex1_enc = () =>{
    document.querySelector("#rsa").value = rsa()
    let MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}
    let message = document.querySelector("#message").value
    document.querySelector("#md5_rsa") .value = rsa(MD5(message))
}

const ex1_dec = () => {
    let D = document.querySelector("#D_dec").value
    let N = document.querySelector("#N_dec").value
    let mes_rsa = document.querySelector("#mes_rsa").value
    let arr = mes_rsa.split(" ")
    let result = ""
    for (let i = 0; i < arr.length; i++) {
        let bi = BigInt(Number(arr[i]))
        bi = bigInt(bi).pow(Number(D))
        bi = bigInt(bi).mod(BigInt(N))
        let index = Number(String(bi))
        if (index < alphabet.length){
            result += alphabet[index]
        }
    }
    document.querySelector("#dec_mes_rsa").value = result

    let mes_md5 = document.querySelector("#mes_md").value
    let arr_md = mes_md5.split(" ")
    let result_md5 = ""
    for (let i = 0; i < arr_md.length; i++) {
        let bi = BigInt(Number(arr_md[i]))
        bi = bigInt(bi).pow(D)
        bi = bigInt(bi).mod(BigInt(N))
        let index = Number(String(bi))
        if (index < alphabet.length){
            result_md5 += alphabet[index]
        }
    }

    document.querySelector("#md_res").value = result_md5.toUpperCase()
}


function test(){
    let D = 191
    let N = 221



}

test()





export default function LR10() {
    return (
        <div className={styles.wrapper}>
            <PageHead title={"Лабораторная работа 10"}/>
            <header className={style.header}>
                <div className={style.header_inner}>
                    <Link href={"/"} className={classNames(style.button, style.button_header)}>
                        На главную
                    </Link>
                    <div className={style.header_logo}>
                        <Image className={style.Biceps} src={leftBiceps} width={80} height={80} alt="left"/>
                        <div className={style.header_logotext}>54 тп</div>
                        <Image className={style.Biceps} src={rightBiceps} width={80} height={80} alt="rigth"/>
                    </div>
                    <Link href={"#"} className={classNames(style.button, style.button_header)}>
                        Документация
                    </Link>
                </div>
            </header>
            <main className={style.main}>
                <div className={style.lab_title}>Лабораторная работа №10</div>
                <div className={lr1.labWorkinArea}>
                    <div className={style.ex_count}>Задание 1</div>
                    <div className={lr10.container}>
                        <input type="text" className={classNames(lr1.input, lr10.input, "m-auto", "mb-4")} id={"message"} placeholder={"Сообщение"}/>
                        <div className={lr10.input_blocks}>
                            <div className={lr10.input_block}>
                                <div className={lr10.input_desc}>p=</div>
                                <input type="text" className={classNames(lr1.input, lr10.input)} id={"P"}/>
                            </div>
                            <input type="text" className={classNames(lr1.input, lr10.input)} id={"rsa"}/>
                        </div>
                        <div className={lr10.input_blocks}>
                            <div className={lr10.input_block}>
                                <div className={lr10.input_desc}>q=</div>
                                <input type="text" className={classNames(lr1.input, lr10.input)}  id={"Q"}/>
                            </div>
                            <input type="text" className={classNames(lr1.input, lr10.input, "p-3")} id={"md5_rsa"}/>
                        </div>
                        <div className={lr10.input_block}>
                            <div className={lr10.input_desc}>D=</div>
                            <input type="text" className={classNames(lr1.input, lr10.input)}  id={"D"}/>
                        </div>
                        <div className={lr10.input_block}>
                            <div className={lr10.input_desc}>N=</div>
                            <input type="text" className={classNames(lr1.input, lr10.input)}  id={"N"}/>
                        </div>
                        <button onClick={ex1_enc} className={"p-3 w-50"}>Сгенерировать</button>
                        <div className={lr10.rasshifrovka}>
                            <div className={classNames(lr10.input_block, "mt-5")}>
                                <div className={lr10.input_desc}>D=</div>
                                <input type="text" className={classNames(lr1.input, lr10.input)}  id={"D_dec"}/>
                            </div>
                            <input type="text" className={classNames(lr1.input, lr10.input)} id={"mes_rsa"} placeholder={"Сообщение"}/>
                            <input type="text" className={classNames(lr1.input, lr10.input)} id={"dec_mes_rsa"} placeholder={"Расшифровка"}/>
                            <div className={lr10.input_block}>
                                <div className={lr10.input_desc}>N=</div>
                                <input type="text" className={classNames(lr1.input, lr10.input)}  id={"N_dec"}/>
                            </div>
                            <input type="text" className={classNames(lr1.input, lr10.input)} id={"mes_md"} placeholder={"Сообщение"}/>
                            <input type="text" className={classNames(lr1.input, lr10.input)} id={"md_res"} placeholder={"Расшифровка"}/>
                            <button onClick={ex1_dec} className={"p-3 w-50"}>Расшифровать</button>
                        </div>
                    </div>


                    <hr className={lr1.devision_line}/>
                    <div className={style.ex_count}>Задание 2</div>
                    <div className={classNames(lr10.container, "text-center")}>
                        Ну там надо че-то скачать я скачал честное слово
                    </div>
                </div>
            </main>
        </div>
    )
}
