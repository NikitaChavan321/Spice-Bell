import { useState } from "react"
import './Signup.css'


const SignUp = () => {
    const [profile, setProfile] = useState({
        name: '',
        mobileNo:0,
        emailId:"",
        password:''
    })
    const [isSubmitted,setIsSubmitted] = useState(false)

    const handleNameChange = (event) => {
        console.log("Name is changed" + event.target.value)
        setProfile({ ...profile, name: event.target.value })

    }

    const handleMobileNoChange = (e) => {
        setProfile({ ...profile, mobileNo:e.target.value })
    }

    const handleEmailIdChange = e=>{ setProfile({...profile,emailId:e.target.value})}

    const handlePasswordChange = (event) => {
        console.log("Password is changed" + event.target.value)
        setProfile({ ...profile, password: event.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Sign In successfully")
        setIsSubmitted(true)
    }
    return (
        <>
            { <div className="container-5">
                <h2 class="sign">Sign Up</h2>
                <div>
                    <form action="#" onSubmit={handleSubmit}>
                        <div class="signin">
                            <label class="form-label-a ">Full Name:  </label>
                            <input class="form-control" value={profile.name} onChange={handleNameChange} required />
                        </div>
                        
                        <div class="signin">
                            <label class="form-label-a">Mobile: </label>
                            <input class="form-control" value={profile.MobileNoChange} type="tel" onChange={handleMobileNoChange} required pattern="[0-9]{10}" maxLength={10} />
                        </div>

                        <div class="signin">
                            <label class="form-label-a">Email Id: </label>
                            <input class="form-control" value={profile.emailId} type="email" onChange={handleEmailIdChange} required />
                        </div>

                        <div class="signin">
                            <label class="form-label-a">Password: </label>
                            <input class="form-control" value={profile.password} type="password" onChange={handlePasswordChange} required />
                        </div>                

                        <button class="sub-a" type="submit">Sign Up</button>
                        <button class="sub-a" type="reset" onClick={()=>setProfile({name:"",mobileNo:0,emailId:""})}>Reset</button>
                    </form>
                    </div>

            </div>}
            
          
        </>
    )
}

export default SignUp