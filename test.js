/**
 *
 * @param array
 * @param start
 * @param end
 * @returns {any[]}
 */
function baseSlice(array,start,end){
    var index = -1,
        length = array.length;

    if(start < 0){
        start = -start > length ? 0 : (length + start);
    }

    end  = end > length ? length : end;

    var result = Array(length)

    while (++index < length){
        result[index] = array[index+start]
    }

    return result
}

var source = ['a',1,2,'b',{x:4}]

console.log(baseSlice( source ))

