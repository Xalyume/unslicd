# Unslic'd

Live Site: [Unslic'd](https://unslicd.herokuapp.com/)

## Welcome to Unslic'd!
Unslic'd, based off of the Untappd social media application/website with the theme of pizza, is an application designed to allow users to create stores and pizza slices and be able to create check-ins with a picture, review, and rating.

## Application Stack
This application uses a PERN stack, with the front-end being created through React with Redux as the state management system and the backend Postgres database being accessed through Express.
<br>
* [React](https://www.google.com)
* [Redux](https://redux.js.org/)
* [Postgres](https://www.postgresql.org/docs/)
* [Express](https://expressjs.com/)
* [Node](https://nodejs.org/en/docs/)

## Usage

* After signing up or logging in, the user should be redirected to their homepage that displays their current check's as well as tabs to add a store/slice as well as to show all stores/slices

![login_page](https://cdn.discordapp.com/attachments/904438142063501353/909906360991354930/unknown.png)
![signup_page](https://cdn.discordapp.com/attachments/904438142063501353/909906440452452412/unknown.png)
![user_homepage](https://cdn.discordapp.com/attachments/904438142063501353/909907247491076157/unknown.png)

* The user can click on Add a New Slice or Add a New Store to be redirected to the relevant form page

![newslice_form_page](https://cdn.discordapp.com/attachments/904438142063501353/909907757149327520/unknown.png)

* Users can also click on the All Slices or All Stores button to be redirected to the relevant page that contains all of slices or stores created by every user. If the logged in user is the one who created the slice/store, they are able to edit and delete the item from these pages as well.
  * The edit and delete options will bring up their respective modals that provide an edit form or a confirmation if the user wishes to proceed with deleting the 

![all_slice_page](https://cdn.discordapp.com/attachments/904438142063501353/909909663850565682/unknown.png)
<img src="https://cdn.discordapp.com/attachments/904438142063501353/909910845847396362/unknown.png" alt="edit_modal" width="40%">
<img src="https://cdn.discordapp.com/attachments/904438142063501353/909910909349150800/unknown.png" alt="delete_modal" width="40%">

* Users can click on the Check In! button that brings up a modal with a form for users to create their own check-in
  * After creating the checkin, users are able to edit and delete their check-in through the frontpage.

<img src="https://cdn.discordapp.com/attachments/904438142063501353/909911294897954877/unknown.png" alt="checkin_modal" height="25%">

## Future Plans for Additional Features
* Implementing AWS for user's check-in photos.
* Allow users to upload/update their own profile pictures
* Global tab that shows checkins from all users
* Remove delete buttons for pizza slices and stores
