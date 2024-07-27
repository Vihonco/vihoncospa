import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { allBanner } from '../../Redux/Action/index'; // Ajusta la ruta si es necesario

const Banner = () => {
  const dispatch = useDispatch();
  const banners = useSelector((state) => state.banners); // Obtiene los banners del estado
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      await dispatch(allBanner());
      setIsLoading(false);
    };
    fetchBanners();
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <Carousel>
      {banners.map((banner) => (
        <Carousel.Item key={banner._id}>
          <img
            className="d-block w-100"
            src={banner.img}
            alt={banner.name}
            style={{ height: '400px', objectFit: 'cover' }} // Ajusta la altura y el ajuste de imagen
          />
          <Carousel.Caption>
            <h3>{banner.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
