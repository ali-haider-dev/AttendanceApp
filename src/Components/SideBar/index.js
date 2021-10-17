import React, { useState } from "react";
import { Divider, Menu } from "antd";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ClassIcon from "@mui/icons-material/Class";
import "./style.css";
import { useHistory } from "react-router-dom";

const { SubMenu } = Menu;

function SideBar() {

    const [theme, setTheme] = useState("light");
    const [select, setSelect] = useState();
    const history = useHistory()
    const handleClick = (e) => {
        return setSelect(e.key);
    };

    return (
        <div className="SideBar">
            <Menu
                theme={theme}
                onClick={(e) => {
                    handleClick(e);
                }}
                style={{ width: 200, height: "100vh", marginTop: -42 }}
                defaultOpenKeys={["sub1"]}
                selectedKeys={select}
                mode="inline"
            >
                <Menu.Item onClick={() => history.push("/Teacher")} icon={<AdminPanelSettingsIcon />} key="1">
                    Teacher
                </Menu.Item>
                <Divider />
                <Menu.Item onClick={() => history.push("/Student")} icon={<PeopleAltIcon />} key="2">
                    Students
                </Menu.Item>
                <Divider />
                <Menu.Item onClick={() => history.push("/Class")} icon={<ClassIcon />} key="3">
                    Classes
                </Menu.Item>
            </Menu>
        </div>
    );
}
export default SideBar;