import React, { useEffect, useState } from 'react'

function Proj() {
    const [users, setUsers] = useState([])
    const fetchdata = async () => {
        try {
            let user = await fetch("https://6487fa170e2469c038fcb6e3.mockapi.io/panel/");
            let userData = await user.json();
            console.log()
            setUsers(userData)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        fetchdata();
    }, [])
    return (
        
        <div className="col-md-4"style={{paddingTop:"150px"}} >
            <h4 class="card-title"> Projects</h4>
            <table style={{paddingLeft:"150px"}} className='table' >
                <thead>
                    <tr>
                        <th>ProjectName</th>
                        <th>User</th>
                    </tr>
                </thead>
                <tbody>


                    {users.map((user, index) => {
                        return <tr key={index}>
                            <td>{user.project}</td>
                            <td>{user.user}</td>
                        </tr>

                    }
                    )}


                </tbody>
            </table>
        </div>
    )
}
export default Proj