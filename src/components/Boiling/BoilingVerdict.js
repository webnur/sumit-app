export default function BoilingVerdict ({celsius = 0}) {
     
    if(celsius >= 100){
        return (
            <p>the woter would boiling</p>
        )
    }
    return <p>the woter would not boiling</p>
};

