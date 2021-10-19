const dataFetcher = function(url=null){

    if(url===null) {
        return "error"
    } else {
        const data = fetch(url)
        .then(res=>res.json())
        .then(data=>data)
        
        return data
    }
}

export default dataFetcher