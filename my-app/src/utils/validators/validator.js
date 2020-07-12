export const requiredField = (value) =>{
    //console.log(`requiredField active`)
    if(value){
        return undefined;
    } else {
        return 'Field is required!!'
    }
}

export const maxLengthCreator = (maxLength) => (value) =>{
    //console.log(`maxLengthCreator active`)
    if(value.length > maxLength){
        console.log(`Max length is ${maxLength} symbols`)
        return `Max length is ${maxLength} symbols`
    }
    return undefined;
}