# Lecture-73_Annis-Monadjem

PROBLEM: When external JS file is connected (<script></script>) via HTML, it stops app.js server from performing navigation between different routes. Even when linking an Empty JS file, it makes app.js server to malfunction. Without a JS file, when clicking `office` or `users` links, server properly navigates into '/' route (renders 'office.html') or '/user' route (renders 'users.html'. When JS file is externally linked (in a script src element inside HTML file) app.js server fails to navigate routes. The JS files functionality works well, but app.js navigation breaks.

EXPECTED ‌‌‌‌BEHAVIOR: When clicking `office` link, server should navigate into '/' route and render 'office.html', while when clicking `users` link, server should navigate into '/user' route and render 'users.html'.

OBSERVED BEHAVIOR: When clicking `office` link, server properly remains in '/' route and correctly renders 'office.html', but when clicking `users` link, server does NOT change into '/user' route and does NOT render 'users.html', instead it continues rendering `office.html`.  
