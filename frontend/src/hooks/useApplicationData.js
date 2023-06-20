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

  // New state variable for the current topic
  const [currentTopic, setCurrentTopic] = useState(null);

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

  const fetchPhotosByTopic = async (topic_id) => {
    //Update topic id and fetch photos for that topic
    setCurrentTopic(topic_id);
    try {
      const response = await axios.get(`http://localhost:8001/api/topics/photos/${topic_id}`);
      setState(prev => ({ ...prev, photos: response.data }));
    } catch (error) {
      console.error('Error fetching photos by topic', error);
    }
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('http://localhost:8001/api/photos');
        setState(prev => ({ ...prev, photos: response.data }));
      } catch (error) {
        console.error('Error fetching photos', error);
      }
    };

    if (!currentTopic) {
      fetchPhotos();
    }

    axios.get('http://localhost:8001/api/topics')
      .then(response => {
        setState(prev => ({ ...prev, topics: response.data }));
      })
      .catch(error => {
        console.error('Error fetching topics', error);
      });
  }, [currentTopic]);

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    fetchPhotosByTopic
  };
};

export default useApplicationData;
