import '../../App.css';
import Tabs from './Tabs'

export default function Aside() {
    return (
        <div className="aside">
            <div>
                <h1>TypeSpeed</h1>
                <p>with a spice of zoomies</p>
            </div>
            
            <Tabs 
                link={'/'}
                name={'Type'}
                />
            <Tabs 
                link={'/profile'}
                name={'Profile'}
            />
        </div>
    )
}