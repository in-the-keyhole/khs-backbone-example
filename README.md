khs-backbone-example
====================

Example java script MVC web application built using the Backbone.js framework. 

About
-----
Provides a reference example at how rich client mobile application can be architected 
in a modular layered fashion.  

JSON server end points for the application defined in the example application. However, 
the application is primarily HTML5 and Java Script, so you an copy files located under 
the src/main/webapp to a web server. 


Getting Started
---------------
JSON Java End Points accessed by the example application are also included defined in this project which is 
defined as a Java Maven webapp structure. 

To build it clone then use Maven:

    $ git clone ...
	$ cd khs-backbone-example
	$ mvn install

Add WAR to application server an enter the following URL. 

	http://<server>/khs-backone-example/index.html
