import React, {useState} from 'react';
import data from '../utils/db.json'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import submitForm from '../functions/submitForm';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const FormComponent = () => {

    const initialState = {
        "full_name": "",
        "email": "",
        "birth_date": "",
        "country_of_origin": "",
        "terms_and_conditions": false
    };

    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false)

    const handleInputChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
        setErrors(validate({...form, [e.target.name]: e.target.value}))
    };

    const handleCheck = (e) => {
        setForm({...form, [e.target.name]: e.target.checked});
        setErrors(validate({...form, [e.target.name]: e.target.checked}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await submitForm(form);
        setForm(initialState);
        setShowModal(true);
    };

    const validate = (form) => {
        let errors = {};

        if(!form.full_name) errors.full_name = "Debe ingresar un nombre";
        if(!form.email) errors.email = "Debe ingresar un email";
        if(!form.birth_date) errors.birth_date = "Debe ingresar su fecha de nacimiento";
        if(!form.country_of_origin) errors.country_of_origin = "Debe seleccionar su pais de nacimiento";
        if(!form.terms_and_conditions) errors.terms_and_conditions = "Debe aceptar los Términos y Condiciones";

        return errors;
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                {data.items.map((d, i) => {
                    if (d.type == "select") {
                        return (
                            <Form.Group className="mb-3" key={i}>
                                <Form.Label>{d.label} {d.required && "*"}</Form.Label>
                                <Form.Select className='w-50' onChange={handleInputChange} name={d.name} key={i} value={form.country_of_origin} >
                                    <option value="" >Elige...</option>
                                    {d.options.map(o => <option key={o.label} value={o.value}>{o.label}</option>)}
                                </Form.Select>
                                <Form.Text className="text-danger ms-2" >{errors[d.name]}</Form.Text>
                            </Form.Group>

                        )
                    } else if (d.type == "checkbox") {
                        return (
                            <Form.Group className="mb-3" key={i}>
                                <InputGroup onChange={handleCheck} key={i} >
                                    <InputGroup.Checkbox checked={form.terms_and_conditions} name={d.name} />
                                    <InputGroup.Text >{d.label} {d.required && "*"}</InputGroup.Text>
                                </InputGroup>
                                <Form.Text className="text-danger ms-2" >{errors[d.name]}</Form.Text>
                            </Form.Group>
                        )
                    } else if (d.type == "submit") {
                        return (
                            <Form.Group className="mb-3" key={i} >
                                <Button className='w-25 btn-greydive' disabled={Object.keys(errors).length} type={d.type} onChange={handleInputChange} name={d.name} value={form[d.name]} >{d.label}</Button>
                                <Form.Text className="text-danger ms-2" hidden={!Object.keys(errors).length} >Falta completar campos obligatorios (*)</Form.Text>
                            </Form.Group>
                        )
                    } else {
                        return (
                            <Form.Group className="mb-3" key={i} >
                                <Form.Label>{d.label} {d.required && "*"}</Form.Label>
                                <Form.Control type={d.type} onChange={handleInputChange} name={d.name} value={form[d.name]} />
                                <Form.Text className="text-danger ms-2" >{errors[d.name]}</Form.Text>
                            </Form.Group>
                        ) 
                    }

                })}
            </Form>
            <Modal show={showModal} centered style={{color: "#242424"}}>
                <Modal.Title className='p-3'>
                    Respuesta guardada
                </Modal.Title>
                <Modal.Body>
                    ✓ Su respuesta ha sido guardada con éxito
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn-greydive' href='/#/answers'>Ver Respuestas</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default FormComponent;