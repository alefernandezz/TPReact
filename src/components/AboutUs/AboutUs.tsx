
const AboutUs = () => {
  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-auto">
                <h2> About us </h2>
                <p>  We are a team of passionate individuals who love to create amazing things. 
                    Our mission is to provide high-quality services and products that exceed our customers' expectations.
                </p>
                
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 col-12">
                <div className="card">
                    <img 
                    className="card-img-top" 
                    src="https://images.pexels.com/photos/615003/pexels-photo-615003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="aboutUsCard1" 
                    />
                    <div className="card-body">
                        <div className="card-title h5"> Feature 1 </div>
                        <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        </p>
                    </div>  
                </div>
            </div>

            <div className="col-md-4 col-12">
                <div className="card">
                    <img 
                    className="card-img-top" 
                    src="https://images.pexels.com/photos/1670770/pexels-photo-1670770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="aboutUsCard1" 
                    />
                    <div className="card-body">
                        <div className="card-title h5"> Feature 1 </div>
                        <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        </p>
                    </div>  
                </div>
            </div>

            <div className="col-md-4 col-12">
                <div className="card">
                    <img 
                    className="card-img-top" 
                    src="https://images.pexels.com/photos/4210860/pexels-photo-4210860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="aboutUsCard1" 
                    />
                    <div className="card-body">
                        <div className="card-title h5"> Feature 1 </div>
                        <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        </p>
                    </div>  
                </div>
            </div>

        </div>



    </div>
  );
};

export default AboutUs;
