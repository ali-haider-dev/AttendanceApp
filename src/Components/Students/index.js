import React from "react";
import "./style.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Modal, Button } from "antd";
import { Form, Input } from "antd";

function Students() {
    const [visible, setVisible] = React.useState(false);
    const [name, setName] = React.useState([]);
    const [className, setClassName] = React.useState([]);
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
    console.log(className)

    return (
        <div className="Student">
            <Button
                onClick={showModal}
                className="Student__button"
                type="primary"
                shape="round"
            >
                <span style={{ marginRight: "5px" }}>Add Student</span><AddCircleOutlineIcon fontSize="small" />{" "}
            </Button>
            <Modal
                title="Add Student"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <Form
                    className="Student__form"
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
                        label="Name"
                        name="Name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Name!",
                            },
                        ]}
                    >
                        <Input onChange={(e) => setName(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        label="Phone No :"
                        name="Phone Number"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Phone Number!",
                            },
                        ]}
                    >
                        <Input onChange={(e) => setNumber(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        label="Class :"
                        name="Class"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Class Name!",
                            },
                        ]}
                    >
                        <Input onChange={(e) => setClassName(e.target.value)} />
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

export default Students;