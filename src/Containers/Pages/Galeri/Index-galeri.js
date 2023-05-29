import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import "./Index-galeri.css";

export class Galeri extends Component {
  state = {
    post: [],
    image: "http://localhost:3000/Image/G_Fishing2.jpg",
    paragraph : "This photo was taken in Silalahi Village, Silahisabungan sub-district, Dairi Regency at a fishing spot on the shores of Lake Toba. There are a lot of people who come here to fish. In fact, most of these people come from outside the Silalahi village. fishing is usually just for fun or hobbies. The fish that can be obtained are varied, there are carp, baboon, tilapia, tilapia, and the most common lately is pest fish, namely red devil fish / fresh louhan."
  }
  
  handleClick = (e) => {
    const thumb = document.querySelectorAll(".images")
    thumb.forEach(thumb => {
      thumb.className = "images"
    });
    e.target.classList.add("active");
    console.log(e.target);
    this.setState({
      image: e.target.src,
      paragraph : e.target.title
    })

  }



  render() {
    return (
      <div >
        <Fragment>
          <div className="galeri" id='Gallery'>
            <h1>GALLERY</h1>
            <div className="content">
              <img src={this.state.image} alt="" className='gambar' />
              <p className='text-muted'>{this.state.paragraph}</p>
            </div>
            <div className="box">
              {
                this.props.data2.map(post => {
                  return <img src={post.img_url} alt={""} className={post.id === 13? 'images active':"images"} title={post.paragraph} onClick={(e) => this.handleClick(e)} />
                })
              }
            </div>
          </div>
        </Fragment>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data2 : state.data2
})


export default connect(mapStateToProps)(Galeri)