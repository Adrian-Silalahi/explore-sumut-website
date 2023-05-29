import { Component, Fragment } from "react";
import "./Index-tentang.css"

class Tentang extends Component {
    render() {
        return (
            <Fragment>
                <div className="Tentang" id="About">
                    <h1 className="title">ABOUT</h1>
                    <p ><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075918.3059840463!2d94.37894349104485!3d1.8307340002077814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd7f95aeb721c87%3A0xaca73e8109d7cb0b!2sSumatera%20Utara!5e1!3m2!1sid!2sid!4v1662277250787!5m2!1sid!2sid" width="90%" height="500" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="myFrame"></iframe></p>
                    <p className="text-muted description">North Sumatra or North Sumatra (abbreviated as Sumut) is a province in Indonesia located in the northern part of the island of Sumatra. The capital city of this province is Medan City, with an area of 72,981.23 km2. North Sumatra is the province with the fourth largest population in Indonesia, after the provinces of West Java, East Java, and Central Java, and the largest on the island of Sumatra. In 2021 the population of North Sumatra is 15,136,522 people, with a population density of 207.40 people/km2</p>
                    <div className="letakGeografis">
                        <h4>Geographical location</h4>
                        <p className="text-muted">North Sumatra Province is located between 10
                             -40
                             North latitude and 980
                             -1000 East Longitude.
                             The area of North Sumatra Province reaches 71,680.68 km2 or 3.72% of the total area
                             Republic of Indonesia. North Sumatra Province has 162 islands, namely 6 islands on the East Coast and
                             156 islands on the West Coast.
                             The boundaries of the province of North Sumatra include the province of Aceh in the north, the province of
                             Riau and West Sumatra to the south, the Indian Ocean to the west, and the Straits of Malacca
                             on the East. The geographical location of North Sumatra Province is on a strategic shipping route
                             Malacca Strait International which is close to Singapore, Malaysia and Thailand. </p>
                    </div>
                    <div className="iklimDanCuaca">
                        <h4>Climate and Weather</h4>
                        <p className="text-muted">The climate in North Sumatra includes a tropical climate which is influenced by the Passat winds and
                             monsoons. Average air humidity 78%-91%, rainfall (800-4000) mm/year and
                             sunlight 43%.</p>
                    </div>
                </div>
            </Fragment>

        )
    }
}

export default Tentang;