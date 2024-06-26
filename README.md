# Intro

This project was build, in order to show my approach, to fixing certain coding challenge. 

You can view this project on Code Sandbox under this link:
https://codesandbox.io/p/github/dzikdrums/Aleph-Zero/main?import=true&workspaceId=09d32525-a1df-4470-9a0d-5c1ce8db7e4c

## Instructions for the challenge

The purpose of this task is to enable the presentation of a broad range of skills and knowledge related to frontend development, as well as an individual approach to problem-solving, tool selection, methodologies, and effectiveness in task completion. There is not a single correct answer to this task - it can be solved in many satisfying ways. Some choices made during the task may depend on conditions not listed in the description - we would be happy to discuss such cases when reviewing the solution, or you can leave a note in the code or even provide all the alternative implementations, along with an explanation of their intention.

The task involves creating a React.js component, a universal "container" for arbitrary content, fixed relative to the viewport, that can exist in one of two states:
closed/collapsed,
opened/extended, showing the entire content, which should be accepted as a prop.
The state should depend on the position relative to another specified, reference element, following this principle: if the element being built overlaps with the reference element, it opens; otherwise, it remains closed:



The following are up to you (an explanation of particular choices is welcome - either written, or discussed during the following meeting):
the building/development tooling,
whether to use vanilla apis or libraries,
the level of visual and UX refinement,
the api of the component, as long as it follows the listed requirements and generally makes a practical sense.
When making the decisions about the above, guide yourself by the same principles you would apply when developing a component for a real-world application.

The solution can be delivered in any developer-friendly and review-friendly way: be it a GH repository, a StackBlitz/CodeSandbox/etc. project, or any other, as long as we can access it and run effortlessly.

## My explanation

I choose to pick solution with most clarity and best performance in my opinion. 
 
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