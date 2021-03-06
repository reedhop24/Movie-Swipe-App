# Movie Swipe App

#### My wife had seen a post on instagram that read something to the effect of, "What if there was an app that was like tinder but instead of swiping between people, you and your significant other would be swiping between possible movies to watch." I thought that this would be an interesting portfolio project and I set out to build this mobile app. This project is built using React Native, Expo, Node.js, Express, and makes use of RapidAPI's new to Amazon Prime API. Note: ideally this project would display Netflix's movie data; however, they have removed their API and I did not want to do any web scraping. Therefore, the movies being displayed by this API are all terrrible and no one would probably ever want to watch them.

#### The app is broken down into 3 pages. The first of which is the Swipe page where users are displayed different movie titles and their ratings and can either like or dislike by pressing the button or swiping right or left respectively.

![44700](https://user-images.githubusercontent.com/40578449/97604864-2ed99900-19cb-11eb-8e0c-91104bc409ee.jpg)

#### From the swipe portion you can view the queue of movies that you have chosen to like by pressing the list view between the dislike and like buttons.

![40256](https://user-images.githubusercontent.com/40578449/97605044-69dbcc80-19cb-11eb-908f-c2c11c899624.jpg)

#### Or you can view details about each of the movies by pressing the green triangle on each movie. 

![4521](https://user-images.githubusercontent.com/40578449/97605169-8ed03f80-19cb-11eb-9e80-5a2fd8876a21.jpg)

#### On the back end my code is pretty simple (it is all in the services folder). I am just making an API call to RapidAPI where it gives me the IMDB_ID for each movie. Then I take that id and make another GET for details about that movie from the movie DB API and return an Array of Objects with each Object being a movie.
