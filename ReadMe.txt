CONTENTS OF THIS FILE
---------------------
* Introduction
* Requirements
* Pre-requisites
* Instructions to execute Script
* Test Cases

Introduction:
------------
This file contains instructions to execute the Javascript for the below given 
Search criteria on the data.js file.

Along with this file url contains below files.
a) A Data file named "data.js"  
b) A HTML Executable file named "index"
c) A Java Script File named " search.js"

Pre-requisites:
--------------
1) Code works in Chrome and Internet Explorer.
2) Both the browsers must be JavaScript enabled. 
3) Please follow the below instructions to enable Javascript in both browsers.

Chrome:
   a) To the right of the address bar, click the icon with 3 stacked horizontal lines.
   b) Select Settings.
   c) On the "Settings" page, click the Show advanced settings... link.
   d) In the "Privacy" section, click Content settings...
   e) Select Allow all sites to run JavaScript (recommended) in the "JavaScript" 
      section.
   f) Click Done.

Internet Explorer:

   a) From the Tools menu, select Internet Options. You see the Internet 
      Options dialog that provides a number of tabs that allow you to set 
      your browser preferences.
   b) To enable session cookies, click the Privacy tab.
   c) From the Settings section of the tab, click Advanced.
   d) Locate and click the checkbox next to Always allow session cookies
   e) To enable JavaScripting, click the Security tab.
   f) Locate the Custom area of the Security tab, and click the Custom 
      Level button.
   g) From the Security Settings dialog that opens, scroll through the options 
      until you see Scripting.
   h) Check the radio buttons next to Enable Active Scripting and Scripting 
      of Java applets.
   i) Click OK to accept scripting and cookie handling changes and close the 
      Security Settings window.		
   j) From the Internet Options dialog, click Apply to effect settings then OK 
      to close the dialog.


Requirements:
-------------
Create search routines to perform queries on a set of documents defined at 
https://gist.github.com/edhiley/fdf7793d3d2c9e838c11
adhering to the below acceptance criteria.

Input Content Manipulation:
---------------------------------------------------
|News article				|Reference|
|---------------------------------------|---------|
|June 5 , 2013 : The majority ...	|0	  |
|---------------------------------------|---------|
|July 9 , 2013 : The HSCIC has ...	|1	  |
---------------------------------------------------

Acceptance criteria: The acceptance criteria are shown below.

----------------------------------------------------------------------------
|Query					|Type of search	|Expected outcome: |
|					|		|document reference|
|---------------------------------------|---------------|------------------|
|Care Quality Commission		|OR		|0,1,2,3,4,5,6     |
|---------------------------------------|---------------|------------------|
|September 2004				|OR		|9		   |
|---------------------------------------|---------------|------------------|
|general population generally		|OR		|6,8		   |
|---------------------------------------|---------------|------------------|
|Care Quality Commission admission	|AND		|1		   |
|---------------------------------------|---------------|------------------|
|general population Alzheimer		|AND		|6		   |
----------------------------------------------------------------------------

Instructions to execute Script:
-------------------------------
1. Save files from github url provided at 
https://github.com/kranthirajm/document-search into a local folder.
2. Double click the 'index.html' in the folder. 
Note - Use Chrome or Internetexplorer. Javascript must be enabled. 
3. Searchbox, Search Type, and Search button will be displayed in first row.
4. Sample search results will be displayed from 3rd row.
5. Enter any word(s) from the acceptance criteria Query and select searchtype. 
6. Then Click on search button to get desired results. 
Note - 
(a) In addition to the acceptance criteria, the script is designed to search for 
any other word(s) present in the Input Data file provided.
(b) The script would not return any reference index for the word(s) outside 
the scope of the given input data. The data is case sensitive.


Test Cases:

---------------------------------------------------------------------------------------
|Test Case	|Input           	|Expected Result|Actual Result| Test Case Type|
|---------------|-----------------------|---------------|-------------|---------------|
|Search for a   |Care Quality Commission|Output will have|As Expected |Positive       |
|word present in|			|Query,Search	|	      |Positive	      |
|input data by  |  			|Type and index |	      |		      |
|typing it in 	|			|reference	|	      |		      |
|searchbox	|			|		|	      |		      |
|---------------|-----------------------|---------------|-------------|---------------|
|Search for a   |September 2004         |Output will have|As Expected |Positive       |
|word present in|			|Query,Search	|	      |Positive	      |
|input data by  |  			|Type 'OR 'and  |	      |		      |
|typing it in 	|			|index reference|	      |		      |
|searchbox with	|			|		|	      |		      |
|searchtype 'OR'|			|		|	      |		      |
|---------------|-----------------------|---------------|-------------|---------------|
|Search for a   |general population     |Output will have|As Expected |Positive       |
|word present in|Alzheimer		|Query,Search	|	      |Positive	      |
|input data by  |  			|Type 'AND' and |	      |		      |
|typing it in 	|			|index reference|	      |		      |
|searchbox with	|			|		|	      |		      |
|searchtype 'AND'|			|		|	      |		      |
|---------------|-----------------------|---------------|-------------|---------------|
|Search for any |Apple			|Output will have|As Expected |Positive       |
|word not present|			|Query,Search	|	      |Positive	      |
|in input data  |  			|Type and no    |	      |		      |
|by typing it in|			|index reference|	      |		      |
|searchbox      |			|		|	      |		      |
---------------------------------------------------------------------------------------

								