# AWS-Coding-Assignment

### Hi there

Here is my finalized git repo for my AWS Coding Assignment.

The goals of this assignment were:

 1. To create a Lambda function that converts phone numbers to vanity numbers and saves the best 5 resulting vanity numbers and the caller's number to a DynamoDB table.
 2. To create an Amazon Connect contact flow that looks at the caller's phone number and says the 3 best vanity possibilities that come back from the Lambda function.

 ## For the experience of the contact flow that I created, please call 1-877-697-0094. 

I am happy to say that I was successfully able to complete those tasks, but I would like to give some insight into why I did things the way that I did them.  This was the first time that I had ever worked with AWS, so I am quite proud of what I was able to learn and accomplish in the time that I spent on this assignment.

I set the limit for vanity numbers that coule be generated to 25.  I did this to avoid an endless loop, and because I thought getting 25 results would give a large variety of results to choose the best from.  To generate the vanity numbers, I used a switch statement within a loop.  The switch statement had cases for each number in the string.  At each index, I used Math.random() to generate a letter for that number.  Doing it this way allowed me to make sure that only the correct letters have the possibility of getting assigned for each number.  To determine which vanity numbers were the best, I counted how many vowels were in each number.  The ones with the most numbers got pushed into an array.  The reason that I chose vowel count to determine which numbers were the best is because since most words have at least one vowel, I figured it was a good way to make it more likely for the number to actually contain a real word.  If I had more time to work on this project, I might have looked into integrating a API to help come up with or verify real words that could be part of the number.

I wanted my code for the vanityNumbers lambda to be easily readible.  However, I feel like it might have been possible to have condensed the code some, but I didn't have time to figure out what the best way to refactor it for that would have been.

The biggest challenge for me in this assignment was definitely working with DynamoDB.  This is the first time I worked with a NoSQL database, and I found querying it to be vastly more complicated and confusing since I could not query it with the simplicity of SQL.  I originally had the parition key on my table called 'number.'  However, as I was trying to query the database, I run into trouble since "number" was a reserved word for DynamoDB.  I was having trouble using Expression Attribute Names to work around this, so I took the shortcut of just creating a new table and changing "number" to "pnumber."  This might not have been good practice for production, but it was the easiest way that I could work around my problem in the time that I had.  I also feel that I might have chosen some more specific varibale names if this was a product that I was working on for production, so it would be easier for the client to understand it.  As many programmers know, it is hard to find good variable names.

The great news is that I was able to create a fully functional Amazon Connect Contact Flow that invoked both of these lambda functions.  You can test it out by calling 1-877-697-0094.  Here is a high-level overview of my contact flow.![Screenshot (559)](https://user-images.githubusercontent.com/75149451/124851998-751ec900-df58-11eb-9a99-51cd3a70c5e5.png)

It was quite a challenge working with Amazon Connect at first.  My biggest struggle was figuring out how to pass the phone number that was being called from down to the function, but I was able to do that by accessing the event parameter in the lambda function and setting the number from the event to a variable.  It was also a struggle to figure out how to get the contact flow to return the data from the functions.  I was able to find out through googling how to return the data from the functions as attributes in the voice prompts in the contact flow.  Once I got used to working with Amazon Connect, fine-tuning my contact flow came naturally to me.  However, one thing I would have liked to have done is to have the vanity numbers played back at a slower rate.  Due to time constraints, I wasn't able to do that.  Also of note is that in my lambda that generated the vanity numbers, I put a space between every character in the vanity numbers so that the voice on the contact flow would read things out one character at a time.  Occasionally the voice will read out the wrong character, like saying "dot" instead of whatever letter it is supposed to read.  I was unfortenately not able to find a solution in time for this.  The JSON for the contact flow is in the get-vanity-numbers file in this repo.


To view my code for the vanityNumbers lambda, you can check out the vanityNumbers.js file in this repo.
To view my code for the getVanityNumbers lambda, you can check out the getVanityNumbers.js file in this repo.

If you have any other questions, just let me know.
