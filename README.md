# 2025-New-Dashboard
This is the new dashboard that is made in TypeScript with preact and bootstrap.

# How to use
To use it, you need to do the following:
  -Connect to the robot, which needs to be running code that sends the required NT topics (2025-Robot, for example)
  -Run the executable, or put it into the FRC Dashboards folder and rename it to "dashboard.exe" and run the driverstationn, which will auto-launch it
  -If it launches a terminal, DO NOT CLOSE IT. I will eventually enclose a terminal-less version, but for now just minimize it.
  -Resize it to be taking all the space above the driverstaion, or use a tool like PowerTools FancyZones to do this for you
  -Check that all the values are updating, and if they aren't read the terminal to see if it's connected.

# How to build and deploy
Once you have made edits to the code, you can't just run the exe to run the changes. This is how you use the deno cli to test and then compile your updated code:<br><br>
You need to install deno if you haven't already, then run the command `deno run --allow-all index.ts` to run the updated code. It will auto-compile when you run this, and may take some time to download libraries if you havent run it before. If you are testing without an active connection to a robot, run `deno run --allow-all index.ts ignore-nt` to get fake values for some spots on the dashboard. If you need to test how it will look in the executable, run `deno run --allow-all index.ts production`, which will make it launch the chrome app window. 
<br><br>
Finally, once you are ready to commit, you need to run `deno run --allow-all compile.ts` to make the new dashboard.exe so that people don't have to install deno and the whole repo to use the dashboard. If for some reason the compiler isn't working, you can run `deno run --allow-all indexTemp.ts production` to test the version with the public folder included. If that works, run `deno compile --allow-all --no-check -o dashboard --icon public/favicon.ico indexTemp.ts production` to make an executable and get all the errors from the compile inside the terminal.

# Random Bits:

* ### Socket Protocol (Client)
  socket protocol has different modes for different endpoints of data being sent to the backed, which are accessed through prefixes:
  * No Prefix: send/recieve from SmartDashboard nt
  * "`" Prefix: send/recieve from root nt
  * "::" Prefix: send/recieve from backend, not related to nt