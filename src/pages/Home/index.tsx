import { Navbar } from '../../shared/components'
import { listMenu } from './utils'
export const Home = () => {



    return (
        <div>
            <Navbar props={listMenu} />
        </div>
    )


}