import React from 'react'

export default function Slider() {
  return (
    <div class="container-fluid">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img  src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg" style={{height:"700px"}} className="d-block img-fluid m-auto w-100  " />
          </div>
          <div className="carousel-item" >
            <img src="https://www.ahstatic.com/photos/5394_rsr001_00_p_1024x768.jpg"  style={{height:"700px"}} className="d-block img-fluid m-auto w-100 "/>
          </div>
          <div className="carousel-item">
            <img  src="/images/1.jpg"style={{height:"700px"}} className="d-block img-fluid m-auto w-100 " />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only ">Previous</span>
        </a>
        <a className="carousel-control-next " href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only ">Next</span>
        </a>
      </div>
    </div>
  )
}
