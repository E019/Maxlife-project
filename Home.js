import React, { Component, useEffect } from "react";
import './App.css';
import { click } from "@testing-library/user-event/dist/click";
// import Home from './Home';
import AOS from "aos";
import "aos/dist/aos.css";


function Home() {


    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
            once: true,     // whether animation should happen only once
        });
    }, []);
    return (

        <>

            {/* <audio controls>
                <source src="song.mp3" type="audio/mpeg" />
            </audio>

            <video width="400px" controls>
                <source src="video.mp4" type="video/mp4" />
            </video> */}

            {/* carousel */}
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://otlgdi.yourbrand.studio/files/dynamicContent/sites/otlgdi/images/en/webpage_14/m67nq6gj/element_150/1/rwdMode_1/1200x513/bags001.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://otlgdi.yourbrand.studio/files/dynamicContent/sites/otlgdi/images/en/webpage_14/m67nq6gj/element_150/0/rwdMode_1/1200x513/bags002.jpg" class="d-block w-100" alt="..." />
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


            {/* card */}
            <div className="container my-5">
                <div className="row text-center">
                    {/* Box 1 */}
                    <div className="col-md-3 col-6 mb-4" data-aos="zoom-out-down" data-bs-toggle="modal" data-bs-target="#productModal">
                        <div className="card shadow-sm border-0">
                            <img
                                src="https://otlgdi.yourbrand.studio/files/dynamicContent/sites/otlgdi/images/en/productpage_4/m67nq81v/element_209/rwdMode_1/340x340/BAGS024.webp"
                                className="card-img-top"
                                alt="Box 1"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Bag sandra</h5>
                                <p className="card-text">60 USD</p>
                            </div>
                        </div>
                    </div>
                    {/* model */}
                    <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">

                                <div class="modal-header">
                                    <h5 class="modal-title" id="productModalLabel">Bag Sandra</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div class="modal-body text-center">
                                    <img
                                        src="https://otlgdi.yourbrand.studio/files/dynamicContent/sites/otlgdi/images/en/productpage_4/m67nq81v/element_209/rwdMode_1/340x340/BAGS024.webp"
                                        class="img-fluid mb-3"
                                        alt="Bag Sandra"
                                    />
                                    <p><strong>Price:</strong> 60 USD</p>
                                    <p>This is a stylish Sandra bag, perfect for casual use.</p>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Buy Now</button>
                                    <button type="button" class="btn btn-primary">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Box 2 */}
                    <div className="col-md-3 col-6 mb-4" data-aos="zoom-out-down" data-bs-toggle="modal" data-bs-target="#productModal1">
                        <div className="card shadow-sm border-0">
                            <img
                                src="https://otlgdi.yourbrand.studio/files/dynamicContent/sites/otlgdi/images/en/productpage_8/m67nq7k7/element_209/rwdMode_1/340x340/BAGS008.webp"
                                className="card-img-top"
                                alt="Box 2"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Backpack Sandra</h5>
                                <p className="card-text">80 USD</p>
                            </div>
                        </div>
                    </div>

                    {/* Modal */}
                    <div
                        className="modal fade"
                        id="productModal1"
                        tabIndex="-1"
                        aria-labelledby="productModalLabel1"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="productModalLabel1">
                                        Bag Sandra
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>

                                <div className="modal-body text-center">
                                    <img
                                        src="https://otlgdi.yourbrand.studio/files/dynamicContent/sites/otlgdi/images/en/productpage_8/m67nq7k7/element_209/rwdMode_1/340x340/BAGS008.webp"
                                        className="img-fluid mb-3"
                                        alt="Bag Sandra"
                                    />
                                    <p>
                                        <strong>Price:</strong> 80 USD
                                    </p>
                                    <p>This is a stylish Sandra bag, perfect for casual use.</p>
                                </div>

                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        data-bs-dismiss="modal"
                                    >
                                        Buy Now
                                    </button>
                                    <button type="button" className="btn btn-primary">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Box 3 */}
                    <div className="col-md-3 col-6 mb-4" data-aos="zoom-out-down" >
                        <div className="card shadow-sm border-0">
                            <img
                                src="https://otlgdi.yourbrand.studio/files/dynamicContent/sites/otlgdi/images/en/productpage_3/m67nq7wx/element_209/rwdMode_1/340x340/BAGS11.webp"
                                className="card-img-top"
                                alt="Box 3"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Backpack Natalie</h5>
                                <p className="card-text">80 USD</p>
                            </div>
                        </div>
                    </div>



                    {/* Box 4 */}
                    <div className="col-md-3 col-6 mb-4" data-aos="zoom-out-down">
                        <div className="card shadow-sm border-0">
                            <img
                                src="https://otlgdi.yourbrand.studio/files/dynamicContent/sites/otlgdi/images/en/productpage_2/m67nq7se/element_209/rwdMode_1/340x340/BAGS014.webp"
                                className="card-img-top"
                                alt="Box 4"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Backpack Lily</h5>
                                <p className="card-text">80 USD</p>
                            </div>
                        </div>
                    </div>
                </div >
            </div >

            <div className="container my-5">
                <div className="row text-center">
                    {/* Box 1 */}
                    <div className="col-md-3 col-6 mb-4" data-aos="zoom-out-down">
                        <div className="card shadow-sm border-0">
                            <img
                                src="https://otlgdi.yourbrand.studio/files/dynamicContent/sites/otlgdi/images/en/productpage_5/m67nq6tm/element_209/rwdMode_1/340x340/BAGS025.webp"
                                className="card-img-top"
                                alt="Box 1"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Backpacs sandra</h5>
                                <p className="card-text">80 USD</p>
                            </div>
                        </div>
                    </div>

                    {/* Box 2 */}
                    <div className="col-md-3 col-6 mb-4" data-aos="zoom-out-down">
                        <div className="card shadow-sm border-0">
                            <img
                                src="https://otlgdi.yourbrand.studio/files/dynamicContent/sites/otlgdi/images/en/productpage_7/m67nq7b1/element_209/rwdMode_1/340x340/BAGS018.webp"
                                className="card-img-top"
                                alt="Box 2"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Bag jenny</h5>
                                <p className="card-text">60 USD</p>
                            </div>
                        </div>
                    </div>

                    {/* Box 3 */}
                    <div className="col-md-3 col-6 mb-4" data-aos="zoom-out-down">
                        <div className="card shadow-sm border-0">
                            <img
                                src="https://otlgdi.yourbrand.studio/files/dynamicContent/sites/otlgdi/images/en/productpage_3/m67nq7wx/element_209/rwdMode_1/340x340/BAGS11.webp"
                                className="card-img-top"
                                alt="Box 3"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Backpack Natalie</h5>
                                <p className="card-text">80 USD</p>
                            </div>
                        </div>
                    </div>

                    {/* Box 4 */}
                    <div className="col-md-3 col-6 mb-4" data-aos="zoom-out-down">
                        <div className="card shadow-sm border-0">
                            <img
                                src="https://otlgdi.yourbrand.studio/files/dynamicContent/sites/otlgdi/images/en/productpage_2/m67nq7se/element_209/rwdMode_1/340x340/BAGS014.webp"
                                className="card-img-top"
                                alt="Box 4"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Backpack Lily</h5>
                                <p className="card-text">80 USD</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row text-center">
                    {/* Box 1 */}
                    <div className="col-md-3 col-6 mb-4" data-aos="zoom-out-down">
                        <div className="card shadow-sm border-0">
                            <img
                                src="https://otlgdi.yourbrand.studio/files/dynamicContent/sites/otlgdi/images/en/productpage_4/m67nq81v/element_209/rwdMode_1/340x340/BAGS024.webp"
                                className="card-img-top"
                                alt="Box 1"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Bag sandra</h5>
                                <p className="card-text">60 USD</p>
                            </div>
                        </div>
                    </div>

                    {/* Box 2 */}
                    <div className="col-md-3 col-6 mb-4" data-aos="zoom-out-down">
                        <div className="card shadow-sm border-0">
                            <img
                                src="https://otlgdi.yourbrand.studio/files/dynamicContent/sites/otlgdi/images/en/productpage_8/m67nq7k7/element_209/rwdMode_1/340x340/BAGS008.webp"
                                className="card-img-top"
                                alt="Box 2"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Backpack Sandra</h5>
                                <p className="card-text">80 USD</p>
                            </div>
                        </div>
                    </div>

                    {/* Box 3 */}
                    <div className="col-md-3 col-6 mb-4" data-aos="zoom-out-down">
                        <div className="card shadow-sm border-0">
                            <img
                                src="https://otlgdi.yourbrand.studio/files/dynamicContent/sites/otlgdi/images/en/productpage_3/m67nq7wx/element_209/rwdMode_1/340x340/BAGS11.webp"
                                className="card-img-top"
                                alt="Box 3"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Backpack Natalie</h5>
                                <p className="card-text">80 USD</p>
                            </div>
                        </div>
                    </div>

                    {/* Box 4 */}
                    <div className="col-md-3 col-6 mb-4">
                        <div className="card shadow-sm border-0" data-aos="zoom-out-down">
                            <img
                                src="https://otlgdi.yourbrand.studio/files/dynamicContent/sites/otlgdi/images/en/productpage_2/m67nq7se/element_209/rwdMode_1/340x340/BAGS014.webp"
                                className="card-img-top"
                                alt="Box 4"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Backpack Lily</h5>
                                <p className="card-text">80 USD</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* carousel */}
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://otlgdi.yourbrand.studio/files/dynamicContent/sites/otlgdi/images/en/webpage_14/m67nq6gj/element_153/1/rwdMode_1/1199x636/bags003JPG.JPG" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://otlgdi.yourbrand.studio/files/dynamicContent/sites/otlgdi/images/en/webpage_14/m67nq6gj/element_153/0/rwdMode_1/1199x636/BAGS6548JPG.JPG" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>





        </>

    )
}

export default Home;








