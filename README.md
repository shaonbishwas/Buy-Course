# Some features of the Project

- when you select the course it will listed in right section.first-letter.

- If you select a course more then one you will get a toast/notification.

- You have limited credit hours.Because of that if you select courses more then 20 credit hours you will get a toast/notification.
- Your total cost of courses which is selected by you will show in right section.

# State Management

- I decleared most of state in the app component. because i need to send the value in child component to display data. One state i decleared in courses component to load data from coursedata.json file. cause i need to send the loaded data to child of courses not to sibling of courses. So i thought it will reduce the code complexity cause i all ready decleared so many state in app component. From courses component i send the course information to the course component. And there a course object recived the data and display it dynamically. In app component i decleared three state to manage course name, course credit and course price. From app component i send this three variables to coursecart component to display all the values in right section.
