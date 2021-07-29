#Lusha Assignment 

## Assumptions:

* API returns a consistent set of data; an array consisting of object with the properties url, description and likes
* Corresponding data types are correct (haven't implemented correct error checking)
* The API will retrieve a subset of the images according to a query param (see Imporvements below)
* image URLs are correct and there is no need for a placeholder/fallback


## Improvements 

* The biggest impovement that can be made relates to the API fetching;
by fetching a large amount of reconds and caching them, 
we can reduce the amount of API calls, improving the user experience while scrolling.

* styled-components - A correct file structure/architecture needs to be designed and maintained.
* File names need a refactor to be more specific (e.g. Wrapper)
* SVG can be hosted in a bucket or fetched via CDN.
* config file needs to be maintained, lots of variables are written inline.

