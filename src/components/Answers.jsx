import React, { useEffect, useState } from "react";
import { Placeholder, Table } from "react-bootstrap";
import getAnswers from "../functions/getAnswers";

const Answers = () => {

    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        getAnswers()
        .then(res => setAnswers(res))
    })

    return (
        <>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th className="text-color-greydive" >Full Name</th>
                    <th className="text-color-greydive" >Email</th>
                    <th className="text-color-greydive" >Fecha de Nacimiento</th>
                    <th className="text-color-greydive" >Pais de Origen</th>
                </tr>
            </thead>
            <tbody>
                {answers.length ?
                    answers.map(a => {
                        return (
                            <tr>
                                <td>{a.full_name}</td>
                                <td>{a.email}</td>
                                <td>{a.birth_date}</td>
                                <td>{a.country_of_origin}</td>
                            </tr>
                        )
                    }) :
                    <>
                        <td><Placeholder bg="light" xs={10}/></td>
                        <td><Placeholder bg="light" xs={10}/></td>
                        <td><Placeholder bg="light" xs={10}/></td>
                        <td><Placeholder bg="light" xs={10}/></td>
                    </>
                }
            </tbody>
        </Table>
        </>
    )
};

export default Answers