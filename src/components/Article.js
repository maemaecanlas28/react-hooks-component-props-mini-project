import React from "react";

function Article ( { title, date="January 1, 1970", preview, minutes } ) {
    function time () {
        let remMins = minutes
        let emojis = ""
        if (remMins < 30) {
            while (remMins > 0) {
                emojis += "☕️"
                remMins -= 5
            }
        }
        else {
            while (remMins > 0) {
                emojis += "🍱"
                remMins -= 10
            }
        }
        
        return emojis + `${minutes} mins read`
    }
    
    return (
        <article>
            <h3>
                { title }
            </h3>
            <small>
                { date } { time() }
            </small>
            <p>
                { preview }
            </p>
        </article>
    )
}

export default Article

