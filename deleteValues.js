function deleteValues(object,value){
    if(Array.isArray(object)){
        if(Array.isArray(value)){
            return object.filter(item1 => !value.includes(item1));
        }else{
           let newArray = array.filter(item => item != value)
           console.log(newArray)
           return newArray
        }
        
    }else{
        if(typeof(object) == 'object'){
            try{
                if(Array.isArray(value)){
                    value.forEach(key => {
                        delete object[key];
                    });
                    return object
                }else{
                    delete object[value]
                    return object
                }
            }catch(error){
                throw Error(error)
            }
            
        }
    }
    
    console.log('OTHER')
    
}


module.exports = {
    deleteValues:deleteValues
};