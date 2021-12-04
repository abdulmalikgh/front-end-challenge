import menuItems from '../helpers/menuItems'
import MenuList from './MenuList'

export default function SidebarNav() {
    return (
        <div className="side_nav">
            <ul>
                {
                   menuItems.map( item => (
                       <MenuList item={item} key={item.id} />
                   )) 
                }
            </ul>
        </div>
    )
}
