import './HeaderAndLogo.style.css'
import Logo from './logo.svg'


function HeaderAndLogo (){
    return(
        <div className={'header'}>
            <div className={'title'}>
                <img src={Logo} className={'logo'}/>
            </div>
            <div className={'title'}>
                <div className={'searchBox'}>
                    <input type={'text'} id={'search'} placeholder={'Search Contacts'}/>
                    <div className={'searchbtn'}>Search</div>
                </div>
            </div>
        </div>
    );
}


export default HeaderAndLogo;