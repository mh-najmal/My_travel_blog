import marker from '../images/marker.png'

export default function Entry (props)
{
    return(
        <article className='journal-entry'>
            <div className="main-image-container">
                <img className="main-image" src={props.img.src} alt={props.img.alt}/>
            </div>
            <div className="info-container">
                    <img src={marker} alt='location marker' className='marker' />
                    <span className='country'>{props.country}</span>
                    <a href='www.google.com'>{props.googleMapsLink}</a>
                    <h2 className='entry-title'>{props.title}</h2>
                    <p className='trip-date'>{props.dates}</p>
                    <p className='entry-text'>{props.text}</p>
            </div>
        </article>
    )
}