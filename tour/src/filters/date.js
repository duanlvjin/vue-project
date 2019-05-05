export const date=(time)=>{
    let fillzero = n => n <10? '0'+n : ''+n;
    let d = new Date();
    d.setTime(time*1000);
    return `${d.getFullYear()}-${fillzero(d.getMonth()+1)}-${fillzero(d.getDate())} ${fillzero(d.getHours())}:${fillzero(d.getMinutes())}`
}
