import { useState } from 'react'
import './ContactUs.css'

const ContactUs =()=>{
    const [Form, setForm] = useState({
        Name: "",
        ContactNo: 0,
        Email: "",
        Message: ""
    })


    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleNameChange = (e)=> {
        setForm({...Form,Name:e.target.value})
    }

    const handleContactNoChange = (e)=> {
        setForm({...Form,ContactNo:e.target.value})
    }

    const handleEmailChange = (e)=> {
        setForm({...Form,Email:e.target.value})
    }

    const handleMessageChange = (e)=>{
        setForm({...Form,Message:e.target.value})
    }



    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("Form submitted")
        setIsSubmitted(true)
       
    }

    return (
        <>
            <div className="containerA">
                {!isSubmitted && 
                < div className="contact-body  gls_bg">
                    <h1 style={{marginLeft:'100px', fontFamily:'Cambria, Cochin, Georgia, Times, sans-serif', color:'maroon'}}>Contact Us</h1>
                    <h1 class="get" style={{marginLeft:'100px', fontFamily:'Cambria, Cochin, Georgia, Times, sans-serif'}}>Get in touch with US</h1>
                    
                   <form action="#" onSubmit={handleSubmit}>
                        <div className="name">
                            <label className="form__label1" for="Name"> Name: </label>
                            <input className="form__input1" type="text" id="Name" value={Form.Name} onChange={handleNameChange}  placeholder=" Enter your Name" required />
                        </div>
                        <div className="contactno">
                            <label className="form__label1" for="contactno">Contact No: </label>
                            <input type="tel" id="contactno" className="form__input1" value={Form.ContactNo} onChange={handleContactNoChange} placeholder=" Enter your Mobile no" maxLength={10} required/>
                        </div>
                        <div className="email">
                            <label className="form__label1" for="email">Email Id: </label>
                            <input type="tel" id="email" className="form__input1" value={Form.Email} onChange={handleEmailChange} placeholder="Enter your Email"required  />
                        </div>
                        <div className="msg">
                            <label className="form__label1" for="message">Message: </label>
                            <input className="form__input1" type="text" id="message" value={Form.Message} onChange={handleMessageChange} placeholder="Message" required  />
                        </div>


                        <button class="cont-btn">Contact Now</button>
                    </form>
                </div>}
                
                
                {isSubmitted && <div className="border border-2 border-success rounded-3 p-3" style={{color:'black'}}>
                    <h1>Your Details</h1>
                    <h4> Name: {Form.Name} </h4>
                    <h4>ContactNo: {Form.ContactNo}</h4>
                    <h4>Email: {Form.Email}</h4>
                    <h4>Message: {Form.Message}</h4>
                    <button className="btn btn-success" onClick={() => {
                        setIsSubmitted(false);
                        setForm({ Name: "", ContactNo: 0, Email: "", Message: "" })
                    }}>Back to Form</button>
                </div>}
            </div>
            
        </>

    )
}



export default ContactUs;
