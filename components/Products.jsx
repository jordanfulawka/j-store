'use client';

import { useState } from 'react';
import Modal from './Modal';
import { useProducts } from '@/context/ProductContext';

function Products({ planner, stickers }) {
  const [modalImage, setModalImage] = useState(null);

  const { handleIncrementProduct, cart } = useProducts();
  console.log(cart);

  if (!stickers.length || !planner) {
    return null;
  }
  return (
    <>
      {modalImage && (
        <Modal handleCloseModal={() => setModalImage(null)}>
          <div className='portal-content'>
            <img
              className='img-display'
              src={`med_res/${modalImage}.jpeg`}
              alt={`${modalImage}-high-res`}
            />
          </div>
        </Modal>
      )}
      <div className='section-container'>
        <div className='section-header'>
          <h2>Shop our Selection</h2>
          <p>From organization or accessorization</p>
        </div>
        <div className='planner-container'>
          <div>
            <button
              className='img-button'
              onClick={() => setModalImage('planner')}
            >
              <img src='low_res/planner.jpeg' alt='high-res-planner' />
            </button>
          </div>
          <div className='planner-info'>
            <p className='text-large planner-header'>
              Medieval Dragon Month Planner
            </p>
            <h3>
              <span>$</span>14.99
            </h3>
            <p>
              Step into a realm of fantasy and organization with our{' '}
              <strong>Medieval Dragon Month Planner</strong>! This
              high-resolution PNG asset combines the fierce elegance of dragons
              with intricate medieval designs to create a planner that's not
              only functional but also a work of art. Whether you&apos;re
              jotting down quests, planning battles, or just scheduling your
              weekly grocery run, this planner is your ultimate companion.
            </p>
            <ul>
              <li>
                <strong>Epic Dragon Artwork:</strong> Stunning hand-drawn dragon
                motifs and medieval-inspired borders make every month feel
                legendary.
              </li>
              <li>
                <strong>Fully Printable:</strong> Designed at ultra-high
                resolution, it&apos;s perfect for printing on any size paper,
                from A4 to poster-sized displays.
              </li>
            </ul>
            <div className='purchase-btns'>
              <button
                onClick={() => {
                  const plannerPriceId = planner.default_price;
                  handleIncrementProduct(plannerPriceId, 1, planner);
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='section-container'>
        <div className='section-header'>
          <h2>Or Collect Your Favourite Tech</h2>
          <p>Choose from our custom designed tech logos</p>
        </div>
        <div className='sticker-container'>
          {stickers.map((sticker, stickerIndex) => {
            const stickerName = sticker.name;
            const stickerImgUrl = sticker.name
              .replaceAll(' Sticker.png', '')
              .replaceAll(' ', '_');
            return (
              <div key={stickerIndex} className='sticker-card'>
                <button
                  className='img-button'
                  onClick={() => setModalImage(stickerImgUrl)}
                >
                  <img
                    src={`low_res/${stickerImgUrl}.jpeg`}
                    alt={`${stickerImgUrl}-low-res`}
                  />
                </button>
                <div className='sticker-info'>
                  <p className='text-medium'>
                    {stickerName.replaceAll('_', ' ')}
                  </p>
                  <p>{sticker.description}</p>
                  <h4>
                    <span>$</span>
                    {sticker.prices[0].unit_amount / 100}
                  </h4>
                  <button
                    onClick={() => {
                      const stickerPriceId = sticker.default_price;
                      handleIncrementProduct(stickerPriceId, 1, sticker);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
