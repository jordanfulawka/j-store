'use client';
import { useState, useRef, useEffect } from 'react';

function ImageBanner() {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    if (imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, []);
  return (
    <div className='banner-images'>
      <img
        className='low-res-img'
        src='low_res/banner.jpeg'
        alt='banner-low-res'
      />
      <img
        ref={imgRef}
        className='high-res-img'
        src='med_res/banner.png'
        alt='banner-high-res'
        style={{ opacity: isLoaded ? 1 : 0 }}
        onLoad={() => {
          setIsLoaded(true);
        }}
      />
      <div className='cta-btns-container'>
        <div>
          <div>
            <h3>Welcome to</h3>
            <h1>The J Store</h1>
          </div>
          <div>
            <button
              onClick={() => {
                console.log('test');
                window.scrollTo({
                  top:
                    document.getElementById('sticker-container').offsetTop -
                    250,
                  behavior: 'smooth',
                });
              }}
            >
              Shop stickers
            </button>
            <button
              onClick={() => {
                console.log('test');
                window.scrollTo({
                  top:
                    document.getElementById('planner-container').offsetTop -
                    250,
                  behavior: 'smooth',
                });
              }}
            >
              Shop planner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageBanner;
