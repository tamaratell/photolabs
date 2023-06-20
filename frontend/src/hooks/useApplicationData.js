import { useState, useEffect } from 'react';
import axios from 'axios';

const useApplicationData = () => {
  const [state, setState] = useState({
    favPhotoIds: [],  // List to store favorite photo IDs
    selectedPhoto: null, // Photo currently selected
    photoDetailsModalOpen: false, // If the photo details modal is open or not
    photoDetailsModalData: {},
    photos: [], // Array to store all the photos
    topics: [] //Array to store all the topics
  });

  const updateToFavPhotoIds = (photoId) => {
    // Toggle the favorite status of the photo
    setState(prev => ({
      ...prev,
      favPhotoIds: prev.favPhotoIds.includes(photoId)
        ? prev.favPhotoIds.filter(id => id !== photoId) // Remove from fav if already in
        : [...prev.favPhotoIds, photoId], // Add to fav if not in
    }));
  };

  const setPhotoSelected = (photo) => {
    // Update the state when a photo is selected
    setState(prev => ({
      ...prev,
      selectedPhoto: photo,
      photoDetailsModalOpen: true,
      photoDetailsModalData: {
        key: photo.id,
        id: photo.id,
        location: photo.location,
        imageSource: photo.imageSource,
        username: photo.username,
        profile: photo.profile,
        similar_photos: photo.similar_photos
      }
    }));
  };

  const onClosePhotoDetailsModal = () => {
    // Update the state to close the photo details modal
    setState(prev => ({
      ...prev,
      selectedPhoto: null,
      photoDetailsModalOpen: false,
      photoDetailsModalData: null
    }));
  };

  useEffect(() => {
    axios.all([
      axios.get('http://localhost:8001/api/photos'),
      axios.get('http://localhost:8001/api/topics')
    ])
      .then(axios.spread((photosRes, topicsRes) => {
        setState(prev => ({
          ...prev,
          photos: photosRes.data,
          topics: topicsRes.data
        }));
      }))
      .catch(error => {
        console.error(error);
      });

    // Clean up any subscriptions or resources if needed
    return () => {
      // Cleanup code
      // ...
    };
  }, []);

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
