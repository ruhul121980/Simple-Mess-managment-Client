const getBookInfo2=()=>{
    const storedBookInfo2=localStorage.getItem('stored-Book-Info2')
    if(storedBookInfo2){
        return JSON.parse(storedBookInfo2)
    }
    return [];
}


const saveBookInfo2=(id)=>{
    const storedBookInfo2=getBookInfo2();
    const exists=storedBookInfo2.find(bookId=>bookId===id)
    if(!exists){
        storedBookInfo2.push(id)
        localStorage.setItem('stored-Book-Info2',JSON.stringify(storedBookInfo2))
    }
}
export{saveBookInfo2,getBookInfo2}