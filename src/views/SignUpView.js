import React from 'react'

export const SignUpView = () => {
    return (
        <div className="signup">
            <h1>Sign Up</h1>
            <form action="" className="form">
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Juan Flores"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="juanita@example.com"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div className="form-button">
                    <button className="btn btn-primary">Sign in</button>
                </div>
                <div className="form-link">
                    <span>Don't have an Account?</span> <a href="#" >Sign Up</a>
                </div>
            </form>
        </div>
    )
}
