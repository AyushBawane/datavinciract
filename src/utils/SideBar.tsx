import { ImTable2 } from 'react-icons/im';
import { LuLayoutDashboard } from 'react-icons/lu';
import ListItem from './ListItem';
import '../index.css'

const SideBar = () => {


    return (
        <div style={{
            border: '0px solid red',
            padding: 20
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 15,
                marginBottom: 40,
            }} id='logo'>
                <img className='mainlogo' src='mainlogo.png' />
                <h1 className='datavinci' style={{
                    fontSize: '1.5em',
                    marginLeft: 10,
                    color: 'white'
                }}>DataVinci</h1>
            </div>
            <ListItem link='/'><LuLayoutDashboard className='icon' />Dashboard</ListItem>
            <ListItem link='/tables'><ImTable2 className='icon' />Tables</ListItem>
        </div>
    )
}

export default SideBar