import axios from 'axios';
import React, { useEffect, useState } from 'react'



function useDatos() {
    const [element, setElement] = useState([]);

    useEffect(
        () => {
            fetch('http://localhost:4000/api/users/')
        .then(res => res.json())
        .then(datos  => {
            (setElement(datos ))
    })
    }, [])

console.log("acc" , element)

return element
}

function reload() {
    window.location.reload();
}


function deleteUser(event, id) {

    if (id === "617b3436d940c941d04c4f1b") {
        alert("Ese usuario es ADMIN, no se puede borrar")
    } else {
        if (window.confirm("Esta seguro de borrar el usuario?")) {
            axios.delete(`http://localhost:4000/api/users/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        } else {

        }
    }
    reload()
}

function Admin() {

    const element = useDatos()
    console.log("acc" , element)
    return (
        <div>
            <table class="table table-bordered border-primary ">
                    <tr class="table-dark ">
                    <th scope="row">#Id</th>
                    <th scope="row">Nombre</th>
                    <th scope="row">Email</th>
                    <th scope="row">NickName</th>
                    <th scope="row">Rol</th>
                    </tr>
            {element.map(item => (

                <tr key={item._id} >
                <td>{item._id}</td>
                <td>{item.fullName}</td>
                <td>{item.email}</td>
                <td>{item.username}</td>
                <td>{item.role}</td>
                <button type="button" class="btn btn-danger mt-4" onClick={(e) => {
                    deleteUser(e, item._id)}}>Borrar Usuario</button>
                <hr/>
                </tr>

            ))}
            </table>
        </div>
    )
}

export default Admin;