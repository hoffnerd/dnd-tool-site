import { Fragment } from 'react';
import Image from 'next/image'
import Link from 'next/link'

const MenuCard = ({display, description, path, frontImage, backImage = "menu/menu_neutral.png", columnSizes = {lg:3, md:6, sm:12, xs:12}, disabledReason = false, largeTitle = false}) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    if(display === "empty"){
        return<div className={`col-lg-${columnSizes && columnSizes.lg ? columnSizes.lg : 4} col-md-${columnSizes && columnSizes.md ? columnSizes.md : 6} col-sm-${columnSizes && columnSizes.sm ? columnSizes.sm : 12} col-xs-${columnSizes && columnSizes.xs ? columnSizes.xs : 12} menu-col`}></div>
    }
    return (
        <div className={`col-lg-${columnSizes && columnSizes.lg ? columnSizes.lg : 4} col-md-${columnSizes && columnSizes.md ? columnSizes.md : 6} col-sm-${columnSizes && columnSizes.sm ? columnSizes.sm : 12} col-xs-${columnSizes && columnSizes.xs ? columnSizes.xs : 12} menu-col`}>
            <Link href={`${baseUrl}${path}`} className="menu-card">
                <div className="menu-card-image-grid">
                    <div className={`menu-card-image menu-card-image-grid__side ${disabledReason ? `menu-card-image-grid__side--${disabledReason}` : "menu-card-image-grid__side--front"}`}>
                        <Image
                            alt={display}
                            src={`/images/${frontImage}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                        />
                    </div>
                    <div className={`menu-card-image menu-card-image-grid__side ${disabledReason ? `menu-card-image-grid__side--${disabledReason}` : "menu-card-image-grid__side--back"}`}>
                        <Image
                            alt={disabledReason ? `/images/menu/menu_${disabledReason}.png` : `/images/${backImage}`}
                            src={disabledReason ? `/images/menu/menu_${disabledReason}.png` : `/images/${backImage}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={backImage === "menu/menu_neutral.png" ? true : false}
                        />
                    </div>
                </div>
                <div className={`menu-card-title ${disabledReason ? disabledReason : "active"} ${largeTitle ? "text-large" : ""}`}>
                    <span className={`menu-card-title-text ${disabledReason ? disabledReason : ""} ${largeTitle ? "text-large" : ""}`}>{display}</span>
                    {disabledReason && 
                        <Fragment>
                            <br/>
                            <span className={"menu-card-title-text future_subtext"}>{disabledReason === "future" ? "Future Content!" : "Coming Soon!"}</span>
                        </Fragment>
                    }
                </div>
                <div className="menu-card-content">
                    <span className="menu-card-content-text">{description}</span>
                </div>
            </Link>
        </div>
    )
}
export default MenuCard;