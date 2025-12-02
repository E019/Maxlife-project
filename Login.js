import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Login({ onLogin }) {

    const staticEmail = "ekta@gmail.com";
    const staticPassword = "Pass@123";



    const { id } = useParams();

    console.log('id', id);


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const handlesubmit = (e) => {

        e.preventDefault();

        //   axios.post('https://dummyjson.com/login', email , password)
        //             .then(response => {
        //     toast.success('Form summitted successfully');

        //             })
        //             .catch(error => {
        //                 console.error('Error fetching products:', error);
        // toast.error('form submitted succesfully')
        //             });

        if (email === staticEmail && password === staticPassword) {
            toast.success('Form summitted successfully');
            setTimeout(() => {
                onLogin();
            }, 1000);
            navigate('/');
        } else {
            toast.error('invalid email and password')
        }

    }




    return (
        <>


            <ToastContainer autoClose={3000}></ToastContainer>


            {/* login */}
            <div className="log">
                <div className="login-1 d-flex justify-content-center align-items-center vh-100 ">
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="card shadow-lg border-0 rounded-4">
                            <div className="card-title text-center border-bottom">
                                <h2 className="p-4 fw-bold text-dark">Login</h2>

                            </div>
                            <div className="card-body p-4">
                                <form onSubmit={handlesubmit}>
                                    {/* Username / Email */}
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label fw-semibold">
                                            Username / Email
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3"
                                            id="username"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    {/* Password */}
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label fw-semibold">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control rounded-3"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>

                                    {/* Remember Me + Forgot Password */}


                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div className="form-check align-item-center ">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="remember"
                                            />
                                            <label className="form-check-label align-items-center" htmlFor="remember">
                                                Remember Me
                                            </label>
                                        </div>
                                        <a href="#" className="text-decoration-none small text-primary">
                                            Forgot Password?
                                        </a>
                                    </div>




                                    {/* Submit */}
                                    <div className="text-center ">
                                        <button
                                            type="submit"
                                            className="btn btn-primary rounded-3 fw-semibold py-2"
                                        >
                                            Login
                                        </button>
                                    </div>

                                    {/* Register */}
                                    <p className="text-center mt-3 small">
                                        Don’t have an account?{" "}
                                        <a href="#" className="text-primary fw-semibold">
                                            Register
                                        </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div >
                </div >
            </div>



        </>
    )
}
export default Login;