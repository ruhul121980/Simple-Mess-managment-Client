const getBookInfo=()=>{
    const storedBookInfo=localStorage.getItem('stored-Book-Info')
    if(storedBookInfo){
        return JSON.parse(storedBookInfo)
    }
    return [];
}


const saveBookInfo=(id)=>{
    const storedBookInfo=getBookInfo();
    const exists=storedBookInfo.find(bookId=>bookId===id)
    if(!exists){
        storedBookInfo.push(id)
        localStorage.setItem('stored-Book-Info',JSON.stringify(storedBookInfo))
    }
}
export{saveBookInfo,getBookInfo}