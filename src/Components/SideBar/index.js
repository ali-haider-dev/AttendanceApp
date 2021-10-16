import React from 'react';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import { Menu } from 'antd';

const { SubMenu } = Menu;

class SideBar extends React.Component {
    state = {
        theme: 'dark',
        current: '1',
    };


    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <>

                <Menu

                    theme={this.state.theme}
                    onClick={this.handleClick}
                    style={{ width: 256, height: '100vh', marginTop: -42 }}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[this.state.current]}
                    mode="inline"
                >

                    <Menu.Item icon key="1">Teachers</Menu.Item>
                    <Menu.Item key="2">Classes</Menu.Item>
                    <Menu.Item key="3">Students</Menu.Item>
                </Menu>
            </>
        );
    }
}
export default SideBar