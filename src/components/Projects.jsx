import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';

function Projects() {

    return(
        <>
        
        <div className='container projects'>
            <div className='row'>
                <div className='text-center'>
                    <dir className='title fs-2 '>MY PROJECTS</dir>
                </div>
            </div>

            <ul className="nav nav-pills mb-3 d-flex justify-content-evenly " id="pills-tab" role="tablist">
                <li className="nav-item  " role="presentation">
                    <button className="nav-link active border border-1 w-100" id="pills-travel-tab" data-bs-toggle="pill" data-bs-target="#pills-travel" type="button" role="tab" aria-controls="pills-travel" aria-selected="true">Travel</button>
                </li>
                <li className="nav-item " role="presentation">
                    <button className="nav-link border border-1 w-100" id="pills-ticketbooking-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Ticket&nbsp;Booking</button>
                </li>
                <li className="nav-item " role="presentation">
                    <button className="nav-link border border-1 w-100" id="pills-social-tab" data-bs-toggle="pill" data-bs-target="#pills-social" type="button" role="tab" aria-controls="pills-social" aria-selected="false">Social&nbsp;Media</button>
                </li>
                <li className="nav-item  " role="presentation">
                    <button className="nav-link border border-1 w-100" id="pills-academy-tab" data-bs-toggle="pill" data-bs-target="#pills-academy" type="button" role="tab" aria-controls="pills-academy" aria-selected="false">Academy</button>
                </li>
            </ul>
        
            <div className="tab-content container" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-travel" role="tabpanel" aria-labelledby="pills-travel-tab">
                    <div className='row g-5 justify-content-center'>
                        <div className='col-11 col-sm-6 col-md-4 col-lg-4'>
                            <div className='box border border-1 border-secondary rounded-top'>
                                <div className="title text-center fs-4">METRO CALL TAXI</div>
                                <img src="public\metrocalltaxi.png" alt="myphoto" className='photo' />
                                <div className='d-flex icon  bg-success p-2'>
                                    <a href="https://www.metrocalltaxi.com/" className='offset-2 w-50'><LinkIcon className='text-white'/></a>
                                    <a href="https://www.behance.net/gallery/195404109/Metro-Call-Taxi" className='w-50'><VisibilityIcon className='text-white'/></a>
                                    <a href="https://github.com/animeprakash/metrocalltaxi" className='w-50'><GitHubIcon className='text-white'/></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-11 col-sm-6 col-md-4 col-lg-4'>
                            <div className='box border border-1 border-secondary rounded-top'>
                                <div className="title text-center fs-4">MAKCRUISE</div>
                                <img src="public\makcruise.png" alt="myphoto" className='photo' />
                                <div className='d-flex icon  bg-success p-2'>
                                    <a href="https://www.makcruise.com/Andhaman/indexform.php" className='offset-2 w-50'><LinkIcon className='text-white'/></a>
                                    <a href="https://www.behance.net/gallery/195411767/Makcruise" className='w-50'><VisibilityIcon className='text-white'/></a>
                                    <a href="https://github.com/animeprakash/makcruise" className='w-50'><GitHubIcon className='text-white'/></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-11 col-sm-6 col-md-4 col-lg-4'>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className='row g-5 justify-content-center'>
                        <div className='col-11 col-sm-6 col-md-4 col-lg-4'>
                            <div className='box border border-1 border-secondary rounded-top'>
                                <div className="title text-center fs-4">RHYTHM AGENCIES</div>
                                <img src="public\rhythmagencies.png" alt="myphoto" className='photo' />
                                <div className='d-flex icon  bg-success p-2'>
                                    <a href="https://www.rhythmagencies.com/Lottery/mainpage.php" className='offset-2 w-50'><LinkIcon className='text-white'/></a>
                                    <a href="https://www.behance.net/gallery/195412881/Rhythm-Agencies" className='w-50'><VisibilityIcon className='text-white'/></a>
                                    <a href="https://github.com/animeprakash/rhythmagencies" className='w-50'><GitHubIcon className='text-white'/></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-11 col-sm-6 col-md-4 col-lg-4'>
                        </div>
                        <div className='col-11 col-sm-6 col-md-4 col-lg-4'>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-social" role="tabpanel" aria-labelledby="pills-social-tab">
                    <div className='row g-5 justify-content-center'>
                        <div className='col-11 col-sm-6 col-md-4 col-lg-4'>
                            <div className='box border border-1 border-secondary rounded-top'>
                                <div className="title text-center fs-4">ANIME PRAKASH</div>
                                <img src="public\animeprakash.png" alt="myphoto" className='photo' />
                                <div className='d-flex icon  bg-success p-2'>
                                    <a href="https://animeprakash.com/" className='offset-2 w-50'><LinkIcon className='text-white'/></a>
                                    <a href="https://www.behance.net/gallery/195414615/Anime-Prakash" className='w-50'><VisibilityIcon className='text-white'/></a>
                                    <a href="https://github.com/animeprakash/animeprakash" className='w-50'><GitHubIcon className='text-white'/></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-11 col-sm-6 col-md-4 col-lg-4'>
                        </div>
                        <div className='col-11 col-sm-6 col-md-4 col-lg-4'>
                        </div>
                    </div>
                </div>


                <div className="tab-pane fade" id="pills-academy" role="tabpanel" aria-labelledby="pills-academy-tab">
                    <div className='row g-5 justify-content-center'>
                        <div className='col-11 col-sm-6 col-md-4 col-lg-4'>
                            <div className='box border border-1 border-secondary rounded-top'>
                                <div className="title text-center fs-4">JOIN ONLINE ACADEMY</div>
                                <img src="public\joinonlineacademy.png" alt="myphoto" className='photo' />
                                <div className='d-flex icon  bg-success p-2'>
                                    <a href="https://www.joinonlineacademy.com/" className='offset-2 w-50'><LinkIcon className='text-white'/></a>
                                    <a href="https://www.behance.net/gallery/195415969/Join-Online-Academy" className='w-50'><VisibilityIcon className='text-white'/></a>
                                    <a href="https://github.com/animeprakash/joinonlineacademy" className='w-50'><GitHubIcon className='text-white'/></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-11 col-sm-6 col-md-4 col-lg-4'>
                            <div className='box border border-1 border-secondary rounded-top'>
                                <div className="title text-center fs-4">MV PEDAGOGY</div>
                                <img src="public\mvpedagogy.png" alt="myphoto" className='photo' />
                                <div className='d-flex icon  bg-success p-2'>
                                    <a href="https://i2globalacademy.com/register/mvpedagogy/" className='offset-2 w-50'><LinkIcon className='text-white'/></a>
                                    <a href="https://www.behance.net/gallery/195416927/MV-Pedagogy" className='w-50'><VisibilityIcon className='text-white'/></a>
                                    <a href="https://github.com/animeprakash/mvpedagogy" className='w-50'><GitHubIcon className='text-white'/></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-11 col-sm-6 col-md-4 col-lg-4'>
                            <div className='box border border-1 border-secondary rounded-top'>
                                <div className="title text-center fs-4">RAM'S ELEARNING HUB</div>
                                <img src="public\ramselearninghub.png" alt="myphoto" className='photo' />
                                <div className='d-flex icon  bg-success p-2'>
                                    <a href="https://i2globalacademy.com/register/ramselearninghub/" className='offset-2 w-50'><LinkIcon className='text-white'/></a>
                                    <a href="https://www.behance.net/gallery/195417875/Rams-E-Learning-Hub" className='w-50'><VisibilityIcon className='text-white'/></a>
                                    <a href="https://github.com/animeprakash/ramselearninghub" className='w-50'><GitHubIcon className='text-white'/></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-11 col-sm-6 col-md-4 col-lg-4'>
                            <div className='box border border-1 border-secondary rounded-top'>
                                <div className="title text-center fs-4">EDUMENTOR</div>
                                <img src="public\edumentor.png" alt="myphoto" className='photo' />
                                <div className='d-flex icon  bg-success p-2'>
                                    <a href="https://www.edumentor.in" className='offset-2 w-50'><LinkIcon className='text-white'/></a>
                                    <a href="https://www.behance.net/gallery/195418769/Edumentor" className='w-50'><VisibilityIcon className='text-white'/></a>
                                    <a href="https://github.com/animeprakash/edumentor" className='w-50'><GitHubIcon className='text-white'/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
    
}

export default Projects