export default function Text({addEmoji, addBracket }){
    let text = 'I am Javascript Programing Lanuage.'

    if(addEmoji){
        text = addEmoji(text, '💜')
    }
    if(addBracket) {
        text = addBracket(text)
    }
    return <div>{text}</div>

}