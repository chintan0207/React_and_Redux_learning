import { useContext } from "react"
import Formcontext from "../context/formcontext";
import { useNavigate } from "react-router-dom";

const Card = () => {
    const context = useContext(Formcontext);
    const { fData, deleteFormDataById } = context;
    const navigate =useNavigate();
    return (
        <>
            <div className="table-responsive-sm p-5 pb-0">
                <table className="table ">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Hobbies</th>
                            <th scope="col">Address</th>
                            <th scope="col">Country</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fData.map((item) => {
                            return (
                                <tr className="" key={item._id}>
                                    <td scope="row">{item.name}</td>
                                    <td scope="row">{item.email}</td>
                                    <td scope="row">{item.gender}</td>
                                    <td scope="row">{item.hobbies.join(', ')}</td>
                                    <td scope="row">{item.address}</td>
                                    <td scope="row">{item.country}</td>
                                    <td scope="row"><div className="d-grid gap-2">
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() => deleteFormDataById(item._id)} >
                                            Delete
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={() => navigate(`/update/${item._id}`)}
                                        >
                                            Update
                                        </button>
                                    </div>
                                    </td>


                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Card