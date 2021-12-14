import React,{useState,useContext,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
import {Formik, useFormik} from 'formik';
import * as yup from 'yup';

function AddStudent(props) {

    let navigate = useNavigate();
   
    
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            mobile:'',
            degree:'',
            dept:''
        },
        validationSchema: yup.object(
            {
                name:yup.string().required('Required'),
                email:yup.string().email('Invalid email address').required("Required"),
                mobile:yup.string().matches(/^\d{10}$/, "Mobile Number not valid").required('Required'),
                degree:yup.string(),
                dept:yup.string(),
                
            }),

        onSubmit:values=>{
           
            handleSave(values)
        }
    })

    let handleSave = async(data)=>{
    try{
    let res =  await axios.post('https://614eabf8b4f6d30017b482ba.mockapi.io/admin',data)
   console.log(res)
   navigate('/all-student')
    }  
    catch(error)
    {
       console.log(error)
    }
    }


    return (
        <div>
            <h1>Add Student</h1>
            <form onSubmit={formik.handleSubmit}>
                <label for="name">Name</label>
                <input 
                    id="name"
                    name="name"
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name?(<div style={{color:"red"}}>{formik.errors.name}</div>):null}
            
            
            <label for="mobile">Mobile</label>
                <input 
                    id="mobile"
                    name="mobile"
                    type="mobile"
                    class="form-control"
                    placeholder="Mobile"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mobile}
                />
                {formik.touched.mobile && formik.errors.mobile?(<div style={{color:"red"}}>{formik.errors.mobile}</div>):null}
            
                <label for="email">Email</label>
                <input 
                    id="email"
                    name="email"
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email?(<div style={{color:"red"}}>{formik.errors.email}</div>):null}
            
                <label for="degree">Degree</label>
                <input 
                    id="degree"
                    name="degree"
                    type="degree"
                    class="form-control"
                    placeholder="Degree"
                    onChange={formik.handleChange}
                    value={formik.values.degree}
                />

                <label for="dept">Deptartment</label>
                <input 
                    id="dept"
                    name="dept"
                    type="dept"
                    class="form-control"
                    placeholder="Deptartment"
                    onChange={formik.handleChange}
                    value={formik.values.dept}
                />

                <button type="submit" class="btn btn-primary">
                Submit
                </button>
            </form>
        </div>
    )
}

export default AddStudent