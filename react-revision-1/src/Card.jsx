import './Card.css'
import { Fragment } from 'react'

function Card() {
    return(
        <Fragment>

            <div>
                <h2 className="mustafa">Mustafa třetí</h2>

                <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas molestias dolor veritatis ut quo reiciendis minima suscipit deleniti eum quis nemo ratione repellendus, a eaque ipsa!</p>

                <a>https://cs.wikipedia.org/wiki/Mustafa_III.</a>


                {/* <ItemOne className="Who is Mustafa"/>

                <ItemTwo className="page"/>

                <ItemThree className="link"/> */}

            </div>

        </Fragment>
    )   
}

export default Card
