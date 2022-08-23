// import { Link } from '@remix-run/react';

export interface IPropertyProps {
  title: string
  price: number
  rooms: number
  baths: number
  size: number
  url: string
  image: string
}


export const Property = (props: IPropertyProps) => {
  const { title, price, rooms, baths, size, url, image } = props

  return (
    <div className='property'>
      <div>
        <img className='property-pic' src={image} alt='house'/>
      </div>
      <div className='property-description'>
        <h3 className='property-title'>{title}</h3>
        <h4 className='property-price'>{price}</h4>
        <hr className='horizontal-divider'/>
        <div className='property-details'>
          <div className='detail-info'>
            {rooms}
          </div>
          <div className='detail-info'>
            {baths}
          </div>
          <div className='detail-info'>
            {`${size} m2`}
          </div>
        </div>
      </div>
    </div>
  )
}