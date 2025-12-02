import { useParams } from "react-router-dom";

function Aboutus() {

    // const { id } = useParams();
    // console.log('id', id);
    return (
        <>

            <div className="heading">Aboutus</div>
            <div className="container my-5">
                <div className="row text-center"></div>
            </div>
            {/* Image + Paragraph Side by Side */}
            <div className="row align-items-center">
                {/* Left Side Image */}
                <div className="col-md-6 text-center">
                    <img
                        src="https://otlgdi.yourbrand.studio/files/dynamicContent/sites/otlgdi/images/en/webpage_15/m67nq5nc/element_156/rwdMode_1/520x319/About.webp"
                        alt="About Us"
                        className="img-fluid rounded shadow"
                    />
                </div>

                {/* Right Side Paragraph */}
                <div className="col-md-6">
                    <p className="lead text-muted text-justify">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
                        vulputate, fermentum pellentesque feugiat aenean fringilla torquent
                        malesuada. Taciti fames vehicula aliquam arcu nascetur habitasse
                        dictum conubia eleifend, proin netus magna mollis pulvinar nostra
                        habitant suscipit quisque, eu molestie fusce et mi in adipiscing ad.
                    </p>
                    <p className="text-muted">
                        Commodo efficitur ac quisque in taciti arcu volutpat condimentum a
                        tortor, malesuada facilisi etiam congue dictum finibus nulla nisi
                        lorem, metus inceptos cras ridiculus curabitur. Erat eget ante
                        vulputate. Consectetur felis finibus nibh eleifend curae rutrum
                        class ultrices velit.
                    </p>
                    <button className="btn btn-primary mt-3">Learn More</button>
                </div>
            </div>
            <div className="containerr text-center my-5">
                <h2>Our Team</h2>
            </div>
            {/* Box 1 */}
            <div className="container mt-5">
                <div className="row">

                    <div className="col-md-3 col-6 mb-4">
                        <div className="card shadow-sm border-0 text-center img-2">
                            <img

                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQY9OL38FHPKucWTlkXqHdwd4__RhbYgEOIw&s"
                                className="card-img-top  about_img"
                                alt="Box 1"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Mr.Aniket</h5>
                                <p className="card-text">Chief Executive Officer (CEO)</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-6 mb-4  text-center">
                        <div className="card shadow-sm border-0 img-2">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/030/767/986/non_2x/handsome-business-man-isolated-on-white-png.png"
                                className="card-img-top about_img2"
                                alt="Box 1"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Mr.Arvind</h5>
                                <p className="card-text">Vice President (VP)</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-3 col-6 mb-4">
                        <div className="card shadow-sm border-0 img-2">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQY9OL38FHPKucWTlkXqHdwd4__RhbYgEOIw&s"
                                className="card-img-top about_img"
                                alt="Box 1"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Mr.Anil</h5>
                                <p className="card-text">Senior Manager</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-3 col-6 mb-4">
                        <div className="card shadow-sm border-0 img-2">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/041/642/170/non_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png"
                                className="card-img-top about_img2"
                                alt="Box 1"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Mr.Ashok</h5>
                                <p className="card-text">Manager</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>




        </>
    )
}

export default Aboutus;