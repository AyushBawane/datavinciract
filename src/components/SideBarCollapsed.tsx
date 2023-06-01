import { ImTable2 } from 'react-icons/im';
import { LuLayoutDashboard } from 'react-icons/lu';
import ListItem from '../utils/ListItem';
import '../index.css'
import ListItemCollapsed from '../utils/ListItemCollapsed';
import { useEffect, useState } from 'react';

const SideBarCollapsed = () => {

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
            padding: '20px 15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 15,
                marginBottom: 40,
            }} id='logo'>
                <img className='mainlogo' src='mainlogo.png' />
            </div>
            <ListItemCollapsed link='/'><LuLayoutDashboard className='iconcollapsed' /></ListItemCollapsed>
            <ListItemCollapsed link='/tables'><ImTable2 className='iconcollapsed' /></ListItemCollapsed>
        </div>
    )
}

export default SideBarCollapsed