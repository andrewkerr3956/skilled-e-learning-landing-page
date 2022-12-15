interface IProps {
    icon?: string;
    iconAlt?: string;
    title: string;
    gradientBg?: boolean;
    largeTitle?: boolean;
    showLink?: boolean;
    body?: string;
}

const Card = (props: IProps) => {
    const { icon, iconAlt, title, gradientBg, largeTitle, showLink, body } = props;

    return (
        <figure className={`card ${!body ? "popular-card" : null} relative h-[322px]`}>
            {icon && <img className="left-[32px] -top-[26px] absolute card-icon rounded-full z-10 w-[56px] h-[56px]" src={icon ? icon : "#"} alt={iconAlt ? iconAlt : ""} />}
            <figcaption className={`relative h-full rounded-[10px] md:rounded-[15px] pt-[64px] pb-[40px] px-[32px] bg-${gradientBg ? "orange-gradient" : "white"}`}>
                {title ? largeTitle ? <h3 className={`card-title ${gradientBg ? "text-white" : null}`}>{title}</h3> : <h4 className="card-title">{title}</h4> : <h4>Untitled</h4>}
                {body && <p className="pg-md card-body mt-[24px]">{body}</p>}
                {showLink && <a className="absolute bottom-[40px] font-bold text-hot-pink" href="#">Get Started</a>} 
            </figcaption>
        </figure>
    )
};

export default Card;