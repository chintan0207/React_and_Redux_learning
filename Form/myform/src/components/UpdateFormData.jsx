/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Formcontext from "../context/formcontext";

const UpdateFormData = () => {

    const { id } = useParams()
    const context = useContext(Formcontext);
    const { findFormDataById } = context

    const [uData, setUData] = useState({});

    useEffect(() => {
        //  findFormDataById(id).then(res => setUData(res))
        const fetchData = async () => {
            try {
                const res = await findFormDataById(id);
                setUData(res);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

    }, [id]);

    return (

        <>
            <p>{uData.name} from {uData.address}</p>
        </>
    )
}

export default UpdateFormData