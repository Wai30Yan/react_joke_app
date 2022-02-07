import axios from 'axios'


export const getJoke = async (custom, type, category, flags) => {
    
    const customArray = Object.keys(custom).filter((key) => custom[key])
    const parameter = customArray.join()

    const blackFlags = Object.keys(flags).filter((key) => flags[key])


    let url = "https://v2.jokeapi.dev/joke/Any"
    
    try {
        if (category !== "Any") {
            url = `https://v2.jokeapi.dev/joke/${parameter}`
        }

        const response = await axios.get(url, { params: { type: type, blacklistFlags: blackFlags.join() } })  
        console.log('blackFlags', blackFlags.join())
        //console.log(flags)
        console.log(response.data)
        return response.data
        
    } catch (error) {
        console.log(error)
    }
}

