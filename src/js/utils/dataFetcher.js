const dataFetcher = async function(url=null){

    if(url===null) {
        return "error"
    } else {
        const response = await fetch(url)
        const toDoJSON = await response.json()
        
        return toDoJSON
    }
}

export default dataFetcher