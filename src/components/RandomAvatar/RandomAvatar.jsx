import Avatar from "react-avatar";
import './RandomAvatar.style.css'

function RandomAvatar ({name}){
    return(
        <>
            <Avatar className={'avatarStyle'} name={name} />
        </>
    );
}



export default RandomAvatar;