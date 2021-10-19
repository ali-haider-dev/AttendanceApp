import React from "react";
import "./style.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Modal, Button } from "antd";
import { Form, Input } from "antd";

function Home() {
    const [visible, setVisible] = React.useState(false);
    const [name, setName] = React.useState([]);
    const [age, setAge] = React.useState([]);
    const [role, setRole] = React.useState([]);
    const [number, setNumber] = React.useState([]);
    const [confirmLoading, setConfirmLoading] = React.useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log("Clicked cancel button");
        setVisible(false);
    };

    const onFinish = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    console.log(name);
    console.log(number);
    console.log(role);
    console.log(age);

    return (
        <div className="home">
            <Button
                onClick={showModal}
                className="home__button"
                type="primary"
                shape="round"
            >
                <span style={{ marginRight: "5px" }}>Add Faculty</span>
                <AddCircleOutlineIcon fontSize="small" />{" "}
            </Button>
            <Modal
                title="Add Teacher"
                visible={visible}
                onOk={handleOk}
                okText="Save"
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <Form
                    className="home__form"
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        style={{ width: "150%" }}
                        name="Name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Name!",
                            },
                        ]}
                    >
                        <Input
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        style={{ width: "150%" }}
                        name="Age"
                        rules={[
                            {
                                required: true,
                                message: "Please Enter Your Age",
                            },
                        ]}
                    >
                        <Input
                            placeholder="Age"
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        style={{ width: "150%" }}
                        name="Phone Number"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Phone Number!",
                            },
                        ]}
                    >
                        <Input
                            placeholder="Phone Number"
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        style={{ width: "150%", marginBottom: -50 }}
                        name="Role"
                        rules={[
                            {
                                required: true,
                                message: "Please Enter Teacher Role",
                            },
                        ]}
                    >
                        <Input
                            placeholder="Role"
                            onChange={(e) => setRole(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    ></Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default Home;