import './style.css'


function Header() {
    return(
            <>
            <div className='container header'>
                <div className='row d-flex align-items-center'>
                    <div className='col-12 col-sm-7 col-md-8 col-lg-8'>
                       <div className='row'>
                            <div className='col-12 col-md-12'>
                                <div className='text-left title fs-1'>Full Stack Developer</div>
                            </div>
                            <div className='text-left title fs-2 '>EDUCATION</div>

                            <div className='col-9 offset-0  offset-sm-1 col-md-12 '>
                                <ul>
                                    <li className='d-flex my-2'>
                                        <div className='text-success fw-bold fs-5 title mx-2'>2018-2023</div> - 
                                        <div className='title text-dark mx-3'>VIT&nbsp;University&nbsp;&nbsp;&nbsp;&nbsp; <br />
                                            B.Tech-IT <br />
                                            73.4 % <br />
                                            Vellore
                                        </div>
                                    </li>
                                    <li className='d-flex my-2'>
                                        <div className='text-success fw-bold fs-5 title mx-2'>2017-2018</div> - 
                                        <div className='title text-dark mx-3'>Govt.Hr.Sec.School <br />
                                            12th Standard <br />
                                            93.25 % <br />
                                            Melmalayanur
                                        </div>
                                    </li>
                                    <li className='d-flex my-2'>
                                        <div className='text-success fw-bold fs-5 title mx-2'>2015-2016</div> - 
                                        <div className='title text-dark mx-3'>Govt.Hr.Sec.School <br />
                                            10th Standard <br />
                                            97.8 % <br />
                                            Melmalayanur
                                        </div>
                                    </li>
                                </ul>
                            </div>
                       </div>
                    </div>
                    <div className='col-12 col-sm-5 col-md-4 col-lg-4'>
                        <img src="prakash.JPG" alt="myphoto" className='photo' />
                    </div>
                </div>
            </div>

            </>
    )
    
}

export default Header