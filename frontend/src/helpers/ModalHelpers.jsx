import React from 'react';

import { createPhotoList, createPhotoListItem } from './PhotoListHelpers';


// import PhotoListItem from '../components/PhotoListItem';
// import PhotoFavButton from '../components/PhotoFavButton';

// const createModalBannerItem = (data) => {
//   console.log("banner data", data);
//   return <article >
//     < PhotoFavButton id={data.id} key={data.id} onFavClick={data.handleFavClick} />
//     <img className='photo-details-modal__image' src={data.imageSource} alt="image" />
//     <div className='photo-details-modal__photographer-details'>
//       <img src={data.profile} alt="user profile" className="photo-list__user-profile" />

//       <div className="photo-list__user-info">{data.username}

//         <p className="photo-list__user-location">
//           {data.location.city}, {data.location.country}
//         </p>

//       </div>

//     </div>
//   </article >;
// };



// const createModalPhotoItem = (photo, handleFavClick) => {
//   return (
//     <PhotoListItem
//       key={photo.id}
//       id={photo.id}
//       location={photo.location}
//       imageSource={photo.imageSource}
//       username={photo.username}
//       profile={photo.profile}
//       onFavClick={handleFavClick}
//     />
//   );
// };


// const createSuggestedList = (photos, onFavClick) => {
//   return photos.map((photo) => {
//     return createModalPhotoItem(photo, onFavClick);
//   });
// };


// export { createSuggestedList, createModalPhotoItem, createModalBannerItem };