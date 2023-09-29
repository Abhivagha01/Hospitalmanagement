import React from 'react';
import { Form, Input, Button } from 'antd';


class Practice extends React.Component {

    handleFormSubmit = (event, requestType, articleID) => {
        //event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        console.log(title, content);
    }

    render() {
        return (
            <div>
                <Form
                    onSubmit={event =>
                        this.handleFormSubmit(
                            event,
                            this.props.requestType,
                            this.props.articleID
                        )
                    }
                >
                    <Form.Item label="Title">
                        <Input name="title" placeholder="Enter a Title" />
                    </Form.Item>
                    <Form.Item label="Content">
                        <Input name="content" placeholder="Enter the content of the announcement here" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
};

export default Practice;