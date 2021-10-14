import React from "react";
import { Button, IconButton } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ClassIcon from '@mui/icons-material/Class';
import PeopleIcon from '@mui/icons-material/People';
import "./style.css";

function SideBar() {
    return (
        <div className="SideBar">
            <div className="SideBar__button">
                <IconButton>
                    <AdminPanelSettingsIcon />
                    <Button size="large">
                        <h4>Teacher</h4>

                    </Button>
                </IconButton>
                <hr className="hr" />

            </div>
            <div>
                <IconButton>
                    <ClassIcon />
                    <Button size="large">
                        <h4>Class</h4>
                    </Button>
                </IconButton>
            </div>
            <div>
                <IconButton>
                    <PeopleIcon />
                    <Button size="large">
                        <h4>Students</h4>
                    </Button>
                </IconButton>
            </div>
        </div>
    );
}

export default SideBar;