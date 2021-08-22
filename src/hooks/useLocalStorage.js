import { useEffect, useState } from "react";
const {constants} = require('../constants')

export default function useLocalStorage(title){

    console.log("In uselocalstorage")
    const [content, setContent] = useState( ()=> {

        const localContent = localStorage.getItem(`${constants.APP_NAME}-${title}`)
        console.log('localcontent - ', localContent, typeof localContent)

        if(localContent !== null && localContent?.length>0){
            console.log("heyy")
            return JSON.parse(localStorage.getItem(`${constants.APP_NAME}-${title}`)) || ''
        }
        console.log("first tym")
        return '';
    })

    useEffect( ()=> {
        console.log("content - ", content)
        localStorage.setItem(`${constants.APP_NAME}-${title}`, JSON.stringify(content))
    }, [content, title])

    return [content, setContent]

}