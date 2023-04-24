# PAGINATION 
---

### What is pagination
- Pagination is a technique used in web development to break up a large set of search results or data into smaller, more manageable pages. It allows users to navigate through content more easily and quickly by displaying a limited number of results on each page, with links to additional pages that display the remaining results

- For example, if a search on a website generates 100 results, it can be overwhelming to display all of them on a single page. Instead, pagination allows the results to be split into smaller groups, such as 10 results per page. This way, the user can quickly browse through the first 10 results and then click on a link to see the next 10 results, and so on

## Types of pagination implementation

- Load More Pagination: In this type of pagination, a button labeled "Load More" appears at the end of the page. When the user clicks on it, more content is loaded onto the page

- Infinite Scrolling: This type of pagination automatically loads more content as the user scrolls down the page. There are no visible page numbers, and the content appears to be endless.

- Alphabetical Pagination: Alphabetical pagination is used to navigate through large amounts of data that are organized alphabetically. For example, it might be used to navigate through a list of names or products

- Standard Pagination: This is the most common type of pagination that involves displaying page numbers at the bottom of the page, allowing users to click on the page number to navigate to a specific page

- Hybrid Pagination: Hybrid pagination is a combination of standard pagination and load more pagination. It displays page numbers, but also includes a "Load More" button to give users the option of seeing more content

- Date-Based Pagination: This type of pagination is used to navigate through content that is organized chronologically. For example, it might be used to navigate through a blog archive or a news website


- Cursor API pagination - A cursor is a piece of data that points to an element with the info to retrieve the previous and next items

                        - often used when dealing with very large datasets or when the order of the results needs to be preserved.
                        -  uses a cursor or marker to indicate the position in the dataset from which to retrieve the next set of results.


 - Keyset API Pagination -Keyset pagination is a technique for pagination that relies on using the values of one or more columns in a database table to determine the boundaries of the result set for each page of data

- Offset API Pagination - Offset API pagination is the most common form of API pagination, It’s also sometimes called page-based pagination. An API endpoint accepts a parameter for a page number and then returns that page

## [Resource for learnig pagination](https://nordicapis.com/understanding-5-types-of-web-api-pagination/)
















