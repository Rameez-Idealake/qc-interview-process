import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
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
                    <Form.Control type="file" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

    );
};

export default SubmitTest;