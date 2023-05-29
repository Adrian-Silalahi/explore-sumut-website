import React, { Fragment, Component } from 'react';
import ContainerDestination from '../../../Components/Atoms/Container-destination/Index-container';
import { connect } from 'react-redux';
import "./Index-destinasi.css";
import Carousel from "react-elastic-carousel";
import { FaQuoteLeft } from "react-icons/fa"
import { getApi } from "../../../Config/Redux/Action/Index-action.js"


class Destinasi extends Component {
  constructor(props) {
    super(props)
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
      { width: 850, itemsToShow: 3 },
      { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
      { width: 1450, itemsToShow: 5 },
      { width: 1750, itemsToShow: 6 },
    ]
  }

  componentDidMount() {
    this.props.getData();
  }


  render() {
    return (
      <Fragment>
        <div className="destinasi" id="Destination">
          <h1>DESTINATION</h1>
          <div className="quote">
            <div className="layarDalam">
              <p><FaQuoteLeft />Nature paints for us, day after day, gives infinite beauty</p>
            </div>
          </div>

          <div className="container">
            <Carousel breakPoints={this.breakPoints} className="Carousel">
              {
                this.props.data1.map(post => {
                  return <ContainerDestination post={post} key={post.id} />
                })
              }
            </Carousel>
            <p className='paragraph text-muted'>Known as one of the largest provinces in Indonesia, North Sumatra has truly enchanting tourism potential. You can find a variety of tourist charms, ranging from nature, culture, history, to culinary specialties. All of these things you can certainly feel while on vacation in North Sumatra.

              Not only does it offer an amazing charm, each of the tourist attractions above also has an interesting story and uniqueness to know.</p>
          </div>


        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  data1: state.data1
})

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getApi())
})

export default connect(mapStateToProps, mapDispatchToProps)(Destinasi)