import Carousel from './Card2'
import './Dashboard.css'
import { IoStatsChartSharp,IoInformationCircleSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
function Dashboard() {
    return (
        <div className='container dg'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1 className='fw-bold'>General dashBoard</h1>
                </div>
                <div className='col-lg-6 d-flex gap-2 mx-auto'>
                        <button class="btn border border-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            May 31(2022) - June 29(2022)
                        </button>
                    <button className='btn btn-dark' type="button">Download</button>
                    <button className='btn btn-dark' type="button">Share Board</button>
                </div>
            </div>
            <div className='row card1 mx-auto'>
                <div className='col-lg-4 col-12 text-center mx-auto mt-4'>
                    <h4>Since joined</h4>
                    <h1>Performance <br/>Overview</h1>
                </div>
                <div className='card incard col-lg-4 col-12 mx-auto mt-4'>
                    <div className='card-body'>
                        <div className='fs-2 d-flex justify-content-between'>
                            <IoStatsChartSharp/>
                            <IoInformationCircleSharp/>
                        </div>
                        <h5 className='mt-3 p-3' >Total Revenue</h5>
                    </div>
                    <div className='card-body'>
                        <h1>$999,999</h1>
                    </div>
                </div>
                <div className='card incard col-lg-4 col-12 mx-auto mt-4'>
                    <div className='card-body'>
                        <div className='fs-2 d-flex justify-content-evenly'>
                            <FaShoppingCart/>
                            <IoInformationCircleSharp/>
                        </div>
                        <h5 className='mt-3'>Total Items Orders</h5>
                    </div>
                    <div className='card-body'>
                        <h1>230,355</h1>
                    </div>
                </div>
            </div>


            <div className='card1 mt-3 mx-auto'>
                <div className='d-flex justify-content-between'>
                    <h3 className='fw-bold'>Top Placements</h3>
                </div>
                <div className='row mx-auto'>
                    <div className='card icards col-lg-5 col-12 mx-auto'>
                        <img src="https://m.media-amazon.com/images/I/61tH1osluML._SL1200_.jpg" alt="OOP's image might be deleted..." />
                        <div className='card-body'>
                            <p className='card-text'>$3,000,467</p>
                            <h3 className='card-title'>Vaccum Cleaners</h3>
                        </div>
                    </div>

                    <div className='col-lg-7 col-12 mt-4'>
                        <div className='row ms-5'>
                            <div className='card icards2 mx-auto col-lg-5 col-12 mt-4'>
                                <img src="https://5.imimg.com/data5/SELLER/Default/2020/12/DZ/DD/UO/41103561/ankita-hair-comb-500x500.jpg" className='bimage' alt="OOps this image might be deleted..." />
                                <div className='card-body'>
                                    <p className='card-text'>$324,467</p>
                                    <h3 className='card-title'>Hair comb</h3>
                                </div>
                            </div>
                            <div className='card icards2 mx-auto col-lg-5 col-12 mt-4'>
                                <img src="https://www.ikea.com/in/en/images/products/vimle-2-seat-sofa-saxemara-light-blue__0949423_pe799729_s5.jpg?f=s" className='bimage' alt="OOps this image might be deleted..." />
                                <div className='card-body'>
                                    <p className='card-text'>$322,467</p>
                                    <h3 className='card-title'>Sofa</h3>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-5 ms-5'>
                            <div className='card icards2 col-lg-5 mx-auto mt-4'>
                                <img src="https://www.ulcdn.net/images/products/402990/slide/666x363/Cassiope_Upholstered_Storage_Bed_Size_King_Colour_Grey_1.jpg?1633084191" alt="OOps this image might be deleted..." />
                                <div className='card-body'>
                                    <p className='card-text'>$30,467</p>
                                    <h3 className='card-title'>Bed</h3>
                                </div>
                            </div>
                            <div className='card icards2 col-lg-5 mx-auto mt-4'>
                                <img src="https://m.media-amazon.com/images/I/61-Th9Ai7-L._SX679_.jpg" className='b-image' alt="OOps this image might be deleted..." />
                                <div className='card-body'>
                                    <p className='card-text'>$112,591</p>
                                    <h3 className='card-title'>Pillows</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card1 bg-dark mx-auto'>
                <h1 className='text-light fw-bold'>Learn more <br />about<i className='fw-lighter'> Commission <br />and Exposure</i></h1>
                <p className='text-light fw-light'>Subscribe to get exclusive deals, item recommendations,<br />and shopping inspirations right into your inbox</p>
                <button className='btn  mt-4'>Read more</button>
            </div>
            <Carousel/>
        </div>
    )
}

export default Dashboard