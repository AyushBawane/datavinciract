import { ImTable2 } from 'react-icons/im';
import { LuLayoutDashboard } from 'react-icons/lu';
import ListItem from '../utils/ListItem';
import '../index.css'
import ListItemCollapsed from '../utils/ListItemCollapsed';
import { useEffect, useState } from 'react';
import ListItemMobile from '../utils/ListItemmobile';

const SideBarMobile = () => {

    // const [collapse, setCollapse] = useState(false)
    // const [width, Setwidth] = useState(0)

    // // const windowWidthRedux = useSelector((store) => store.WindowWidth.value);

    // window.addEventListener('resize', () => {
    //     let windowInnerWidth = window.innerWidth;
    //     Setwidth(window.innerWidth)
    //     if (windowInnerWidth > 900) {
    //         setCollapse(false)
    //     } else {
    //         setCollapse(true)
    //     }
    // })

    // useEffect(() => {
    //     Setwidth(window.innerWidth)
    //     let windowInnerWidth = window.innerWidth;
    //     if (windowInnerWidth > 900) {
    //         setCollapse(false)
    //     } else {
    //         setCollapse(true)
    //     }
    // }, [])

    return (
        <div style={{
            border: '0px solid red',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            // justifyContent: 'center',
            flexDirection: 'row'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                marginRight:20
                // marginTop: 15,
                // marginBottom: 40,
            }} id='logo'>
                <img className='mainlogo' src='mainlogo.png' />
            </div>
            <ListItemMobile link='/'><LuLayoutDashboard className='iconcollapsed' /></ListItemMobile>
            <ListItemMobile link='/tables'><ImTable2 className='iconcollapsed' /></ListItemMobile>
        </div>
    )
}

export default SideBarMobile