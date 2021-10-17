import React from "react";
import "./style.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Modal, Button } from "antd";
import { Form, Input } from "antd";

function CLasses() {
    const [visible, setVisible] = React.useState(false);
    const [className, setClassName] = React.useState([]);
    const [timing, setTiming] = React.useState([]);
    const [teacher, setTeacher] = React.useState([]);
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

    console.log(className);
    console.log(timing);
    console.log(teacher);

    return (
        <div className="Classes">
            <Button
                onClick={showModal}
                className="Classes__button"
                type="primary"
                shape="round"
            >
                <span style={{ marginRight: "5px" }}>Add Class</span> <AddCircleOutlineIcon fontSize="small" />{" "}
            </Button>
            <Modal
                title="Add Teacher"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <Form
                    className="Classes__form"
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
                        label="ClassName"
                        name="ClassName"
                        rules={[
                            {
                                required: true,
                                message: "Please input your ClassName!",
                            },
                        ]}
                    >
                        <Input onChange={(e) => setClassName(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        label="Timing"
                        name="Timing"
                        rules={[
                            {
                                required: true,
                                message: "Please input the Class Timing",
                            },
                        ]}
                    >
                        <Input onChange={(e) => setTiming(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        label="Teacher"
                        name="Teacher"
                        rules={[
                            {
                                required: true,
                                message: "Please input the Teacher Name",
                            },
                        ]}
                    >
                        <Input onChange={(e) => setTeacher(e.target.value)} />
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

export default CLasses;