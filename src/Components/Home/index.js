import { Button } from 'antd';
import React from 'react'
import "./style.css"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Home() {
    return (
        <div className="home">
            <Button type="primary" shape="round" className="home__Button">  Add Teacher <AddCircleOutlineIcon fontSize="small" /></Button>

        </div>
    )
}

export default Home
