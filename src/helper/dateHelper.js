Number.prototype.padLeft = function(base,chr){
    var  len = (String(base || 10).length - String(this).length)+1;
    return len > 0? new Array(len).join(chr || '0')+this : this;
}

export const getCurrentDateStr = () => {
    const d = new Date()
    let dformat = [d.getFullYear(), 
                    (d.getMonth()+1).padLeft(),
                    d.getDate().padLeft()].join('-') + ' ' +
                  [d.getHours().padLeft(),
                    d.getMinutes().padLeft()].join(':')

    return dformat
}