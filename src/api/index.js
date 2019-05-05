const fetchData = (url) => {
    return fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error('Response is not ok')
                }
                return response.json()
            })    
}

export { fetchData }