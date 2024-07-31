import {ResponsiveAppBar} from '@/widgets/header/header'
import page from './../../shared/assets/icon/not-found-error-alert-svgrepo-com.svg'

export const Page404 = () => (
    <div>
        <ResponsiveAppBar/>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img src={page} alt={'404'}/>
        </div>
    </div>

)

