import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {

    const handlesubmit = () => {
        // alert("Form submit");
        // toast.success('Form summitted successfully');
        toast.error('Form summitted successfully');


    }
    return (

        <>
            <ToastContainer autoClose={3000}></ToastContainer>

            {/* Section Heading */}
            <div
                className="text-center py-5"
                style={{ backgroundColor: "rgb(242, 242, 242)" }}
            >
                <h2 className="fw-bold mb-2" style={{ color: "#333" }}>Contact</h2>
                <p className="text-muted">We’d love to hear from you</p>
            </div>

            <div className="container my-5">
                <div className="row g-4 justify-content-center align-items-stretch">

                    {/* Left Side - Form */}
                    <div className="col-lg-7">
                        <div className="card shadow-lg border-0 rounded-4 h-100">
                            <div className="card-body p-5">
                                <h3 className="mb-4 text-black color-black ">Send us a Message</h3>
                                <form onSubmit={handlesubmit} >
                                    {/* Name */}
                                    <div className="mb-3">
                                        <label htmlFor="Name" className="form-label fw-semibold">Name</label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3"
                                            id="Name"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="mb-3">
                                        <label htmlFor="Email" className="form-label fw-semibold">Email</label>
                                        <input
                                            type="email"
                                            className="form-control rounded-3"
                                            id="Email"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>

                                    {/* Question */}
                                    <div className="mb-3">
                                        <label htmlFor="Question" className="form-label fw-semibold">Question</label>
                                        <textarea
                                            className="form-control rounded-3"
                                            id="Question"
                                            rows="4"
                                            placeholder="Write your question..."
                                            required
                                        ></textarea>
                                    </div>

                                    {/* Checkbox */}
                                    <div><input type="checkbox" />  I consent to the processing of my personal data.</div>



                                    {/* Submit Button */}
                                    <div className="d-grid">
                                        <button
                                            type="submit"
                                            className="btn fw-semibold text-white rounded-3 py-2"
                                            style={{ background: "linear-gradient(135deg, #327c35, #4caf50)" }}

                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div >
                    </div >


                    {/* Right Side - Contact Info */}

                    < div className="col-lg-4" >
                        <div
                            className="h-100 p-4 text-black rounded-4 shadow-lg"
                            style={{ background: "linear-gradient(135deg,  rgb(242, 242, 242), rgb(242, 242, 242);)" }}
                        >
                            <h4 className="fw-bold mb-4">Get in Touch</h4>

                            <div className="d-flex align-items-center mb-4">
                                <img src="/phone-call.png" alt="phone" width="40" className="me-3" />
                                <div>
                                    <h6 className="mb-0">123456789</h6>
                                    <small className="opacity-75">Call us</small>
                                </div>
                            </div>

                            <div className="d-flex align-items-center">
                                <img src="/mail-inbox-app.png" alt="mail" width="40" className="me-3" />
                                <div>
                                    <h6 className="mb-0">Ee@gmail.com</h6>
                                    <small className="opacity-75">Write to us</small>
                                </div>
                            </div>
                        </div>
                    </div >

                </div >
            </div >
            <div className="container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d109768.06830477285!2d76.60758307619231!3d30.711311482500474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390fef3ff2abcfc3%3A0xb20cbbd260b75130!2sPlot%20no%20298F%2C%20Phase%208B%2C%20Industrial%20Area%2C%20Sector%2074%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140307!3m2!1d30.7113375!2d76.6899844!5e0!3m2!1sen!2sin!4v1757672253051!5m2!1sen!2sin"
                    width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>





        </>
    )
}
export default Contact;