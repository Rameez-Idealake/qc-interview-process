import Form from 'react-bootstrap/Form'
import { Button, Upload } from 'antd'
import "antd/dist/antd.css"

const SubmitTest = () => {
    return (
        <div className='container'>

            <h1>Upload Defect Sheet</h1>
            <Form>
                <Form.Group className="mb-3" controlId="EnterName">
                    <Form.Label>Enter Name <span className='text-danger'>*</span></Form.Label>
                    <Form.Control type="text" placeholder="Enter Name *" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="EnterEmail">
                    <Form.Label>Enter Email Id <span className='text-danger'>*</span></Form.Label>
                    <Form.Control type="text" placeholder="Enter Email Id *" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="EnterEmail">
                    <Form.Label>Upload the defect sheet created <span className='text-danger'>*</span></Form.Label>
                    <br />
                    <Upload.Dragger accept='.doc, .docx'>
                        Please Choose your file &nbsp;
                        <Button>Upload</Button>
                    </Upload.Dragger>

                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

    );
};

export default SubmitTest;