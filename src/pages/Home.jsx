import React from "react";
import { Container } from 'react-bootstrap'
import FormComponent from '../components/FormComponent.jsx'

const Home  = () => {

    return (
        <>
            <Container className='mt-5'>
                <FormComponent />
            </Container>
        </>
    )
};

export default Home;