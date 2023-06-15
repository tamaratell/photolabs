# PhotoLabs
PhotoLabs is a React-based single-page application (SPA) that allows users to view photos in different contexts. We will use a pre-existing API to build a frontend user experience for users to interact with photos!

### Functional Requirements:
- The client-side consists of the development of a React single page application (SPA) called PhotoLabs
- The server and persistence layer given as follows:
- The data layer consists of MongoDB database
- The API server consists of a Node Express.js server application
- The server/persistence layer may require modifications for stretch goals
- The client will communicate with the API over HTTP using the JSON format

### Behavioral Requirements
- A user can view photos from the homepage loaded from the API.
- The user can navigate to different photo categories, also called topics.
- The user can click on a photo to view a larger version of the photo and relevant / similar photos.
- The user can like a photo from anywhere within the application where the photo is displayed.
- The user can view a heart icon with a notification in the navigation if there are liked photos.
- The navigation will consist of different topics and heart icon.
- The client-side application will make API requests to load and persist data (i.e. relevant data is not lost after a session restarts, so after a browser refresh).


## Data
Images loaded from the API. 

## Seed Data
MongoDB database creates data layer. 


## Structure
- Header
  - Logo
  - Navigation menu
- Main content area
  - Photo grid
  - Photo thumbnails
    - Favourite button
    - Modal window trigger
      - Modal window
        - Photo preview
        - Suggestion photos

### HTML
- body
  - nav
    - Photolabs Logo
    - Nav Menu UL 
      - a Photo Topic
      - a Photo Topic
      - a Photo Topic
      - a Photo Topic
      - a Heart Icon (when favourites exist)
  - main
    - Div PhotoCard Container (3x photoCard per row)
      - article photoCard (3x per row)
        - img
        - button Heart Icon (post to favourites)
        - modal trigger photoCardPopup on click
          - photoCardPopup header
            - button X (close popup)
          - photoCard preview
          - p Similar Photos
          - div photoCardSuggestion container (2x photoCard per row)
            - article photoCard 
              - img 
              - button Heart Icon (post to favourites)

### Components
- App
  - Header
    - Logo
    - NavigationMenu
      - NavigationMenuItem (multiple, by topic)
  - MainContent
    - PhotoGrid
      - PhotoCard (multiple, three cards per row)
        - FavouriteButton
        - ModalWindow
          - PhotoCard (for PhotoPreview)
            - FavouriteButton
          - SuggestionPhotos
            - PhotoCard (multiple, with two cards per row)
            - FavouriteButton


#### Component Explanations
- App: The top-level component that acts as the container for the entire application.
  - Header: Represents the header section of the app, which includes the logo and navigation menu.
    - Logo: Renders the logo for the application.
    - NavigationMenu: Renders the navigation menu with photo topics.
      - NavigationMenuItem: Represents an individual menu item in the navigation menu. Clicking on a menu item will navigate the user to a page showing photos with that specific topic.
  - MainContent: Contains the main content area of the app.
    - PhotoGrid: Displays the grid of photo cards.
      - PhotoCard: Represents an individual photo card.
        - FavouriteButton: Renders the button to mark a photo as a favorite.
        - ModalWindow: Represents the modal window that displays a larger photo preview and suggestion photos.
          - PhotoCard (for PhotoPreview): Represents the photo card within the modal window for the photo preview.
            - FavouriteButton: Renders the button to mark the previewed photo as a favorite.
          - SuggestionPhotos: Represents the section within the modal window that displays suggested photos.
            - PhotoCard (multiple, with two cards per row): Represents individual suggestion photos.
            - FavouriteButton: Renders the button to mark a suggestion photo as a favorite.

### Component Data

#### Props

- **NavigationMenu** component:
  - `topics` (array): The list of photo topics/categories to be displayed in the navigation menu.

- **NavigationMenuItem** component:
  - `topic` (string): The specific photo topic/category for each menu item.

- **PhotoGrid** component:
  - `photos` (array): The list of photos to be displayed in the grid.
  - `likedPhotos` (array): The list of liked photos stored in the application state.

- **PhotoCard** component:
  - `photo` (object): The details of an individual photo.
  - `isLiked` (boolean): Indicates whether the photo is liked or not.

- **FavouriteButton** component:
  - `photoId` (string): The unique identifier of the photo that the button belongs to.
  - `isLiked` (boolean): The like status of the photo.

- **PhotoPreview** component:
  - `photo` (object): The details of the selected photo for preview.
  - `isLiked` (boolean): Indicates whether the photo is liked or not.

- **SuggestionPhotos** component:
  - `photos` (array): The list of suggested photos to be displayed.

#### States

- **App** component:
  - `likedPhotos` (array): The list of liked photos stored in the application state.

- **Header** component:
  - `hasLikedPhotos` (boolean): Indicates whether there are liked photos or not.

- **NavigationMenu** component:
  - `hasLikedPhotos` (boolean): Indicates whether there are liked photos or not.


### Helper functions!
fetchPhotos: A function to make an API request to fetch photos from the homepage. This function can be called when the application loads or when the user navigates to the homepage.

fetchPhotosByTopic: A function to make an API request to fetch photos based on a specific topic. This function can be called when the user navigates to a particular topic/category.

fetchPhotoDetails: A function to make an API request to fetch the details of a specific photo, including its larger version and relevant/similar photos. This function can be called when the user clicks on a photo to view its details.

likePhoto: A function to handle the action of liking a photo. This function can be invoked when the user clicks on the like button for a photo. It can make an API request to persist the like status of the photo on the server.

fetchLikedPhotos: A function to make an API request to fetch the liked photos for the currently authenticated user. This function can be called when the application loads or when needed to display the heart icon with a notification.

persistData: A function to persist relevant data (such as liked photos) locally, so that it is not lost after a session restarts or browser refresh. This function can be called when the application state changes or during specific events to store the required data.


