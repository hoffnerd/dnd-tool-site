import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useContext } from 'react';
// import styles from '../styles/pages/home.module.css'

const AnimatedCard = ({id, header, description, pathTo, outsideLink, columnSizes = {lg:4, md:6, sm:12, xs:12}, btnText = "Read More", image = 'EABMoneyShot.jpg', imageAlt = "Testing Image"}) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    return (
        <div className={`resource-card-holder col-lg-${columnSizes && columnSizes.lg ? columnSizes.lg : 4} col-md-${columnSizes && columnSizes.md ? columnSizes.md : 6} col-sm-${columnSizes && columnSizes.sm ? columnSizes.sm : 12} col-xs-${columnSizes && columnSizes.xs ? columnSizes.xs : 12}`}>
            <div className="resource-card" >
                <div id={`image-div-${id}`} className="resource-card-img">
                    <div className='image-container fill-width'>
                        <Image
                            src={`${baseUrl}images/${image}`}
                            alt={imageAlt}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
                <div className="resource-card-animation">
                    <div className="resource-card-text-header">
                        <h5>{header}</h5>
                    </div>
                    <div className="resource-card-description">
                        <p>{description}</p>
                    </div>
                    {pathTo ? <Link href={pathTo}><a className="resource-card-button btn btn-block btn-success">{btnText}</a></Link> : ""}
                    {outsideLink ? <a className="resource-card-button btn btn-block btn-success" href={outsideLink}>{btnText}</a> : ""}
                </div>
            </div>
        </div>
    )
}
export default AnimatedCard;