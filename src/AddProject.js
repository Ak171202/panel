import React from 'react'
import {  useFormik } from 'formik'
import axios from 'axios'



function AddProject() {
    const formik = useFormik({
        initialValues: {
            project: "",
            user: ""
        },
        onSubmit: async values => {
        try {
           await  axios.post("https://6487fa170e2469c038fcb6e3.mockapi.io/panel/", values
              
    
            )
            alert("Data saved")
        }
        catch (error) {
            console.log(error);
        }
    
    }
    })
    return (
        <div><br /><br /><br /><br />
            <div className='container'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='row'>

                        <div className='col-lg-6'>
                            <label>ProjectName</label>
                            <input type='text' name="project" placeholder="projectName"className='form-control'
                                onChange={formik.handleChange}
                                value={formik.values.project} />
                        </div>
                        <div className='col-lg-6'>
                            <label>User</label>
                            <input type="text" name="user" placeholder='user' className='form-control'
                                onChange={formik.handleChange}
                                value={formik.values.user} />
                        </div>
                        <div className='col-lg-6'><br /><br />
                            <input type='submit' className='btn btn-primary' />
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}


export default AddProject


