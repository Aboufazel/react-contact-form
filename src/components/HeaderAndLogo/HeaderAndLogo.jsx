import './HeaderAndLogo.style.css'
import Logo from './logo.svg'


function HeaderAndLogo (){
    return(

        <div className={'container , header'}>
            <div className={'leftSide'}>
                <div className={'title'}>
                    <img src={Logo} className={'logo'}/>
                </div>
            </div>
            <div className={'rightSide'}>
                searchbox
            </div>
        </div>

    );
}


export default HeaderAndLogo;