function Footer() {
    return (
        <>
            <div className="bg-light text-center py-4 mt-5">
                {/* Social Icons */}
                <div className="mb-3">
                    <a href="#" className="text-dark mx-2 fs-4">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="text-dark mx-2 fs-4">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="text-dark mx-2 fs-4">
                        <i className="bi bi-tiktok"></i>
                    </a>
                </div>

                {/* Navigation Links */}
                <div className="mb-2">
                    <a href="#" className="text-dark mx-3 text-decoration-none">
                        Shipping costs
                    </a>
                    <a href="#" className="text-dark mx-3 text-decoration-none">
                        Privacy policy
                    </a>
                    <a href="#" className="text-dark mx-3 text-decoration-none">
                        Terms and conditions
                    </a>
                    <a href="#" className="text-dark mx-3 text-decoration-none">
                        Contact
                    </a>
                </div>

                {/* Bottom Text */}
                <p className="text-muted small mb-0">
                    A website created in the WebWave website builder.
                </p>
            </div>
        </>
    )
}
export default Footer;