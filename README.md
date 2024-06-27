# Intro

This project was build, in order to show my approach, to fixing certain coding challenge. 

## My explanation

This is my second solution to the problem, this time using React Context. 
I think I like it a little less, cause it seems more complicated and requires broader look at the
whole component tree, to get a clear view of what is the data flow. 

- App component serves strictly as a gateway to the app
- Container component makes the height needed to showcase the issue and solution, also holds the custom hook
- WideContentBox component is the one triggering expansion of the other component
- ExpandableContentBox component is the one changing its state (collapsed/expanded), depending on its position, relative to the triggering component

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
