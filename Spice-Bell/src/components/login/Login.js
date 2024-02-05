
import { useState } from "react"
import './Login.css'
const Login = () => {
    const [profile, setProfile] = useState({
        mobileNo: 0,
        password: ''
    })
    const [isSubmitted, setIsSubmitted] = useState(false)


    const handleMobileNoChange = (e) => {
        setProfile({ ...profile, mobileNo: e.target.value })
    }

    const handlePasswordChange = (event) => {
        console.log("Password is changed" + event.target.value)
        setProfile({ ...profile, password: event.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Login Successfully")
        setIsSubmitted(true)
    }
    return (
        <>
            <div class="main-container">
                {<div class="container6">
                    <h2 class="log">Login</h2>
                    <div>
                        <form action="#" onSubmit={handleSubmit}>
                            <div class="login">
                                <label class="form-label-1">Mobile: </label>
                                <input class="form-control-1" value={profile.MobileNoChange} type="tel" onChange={handleMobileNoChange} required pattern="[0-9]{10}" maxLength={10} />
                            </div>


                            <div className="login">
                                <label class="form-label-1">Password: </label>
                                <input class="form-control-1" value={profile.password} type="password" onChange={handlePasswordChange} required />
                            </div>

                            <input class="sub" type="submit" value="Log In" />
                        </form>
                    </div>
                </div>}
            </div>

        </>
    )
}

export default Login