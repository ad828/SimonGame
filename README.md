# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Anthony Detorfino

Time spent: **6** hours spent in total

Link to project: 

## Required Functionality

The following **required** functionality is complete:

* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![X]https://i.imgur.com/Zvxo1MC.gif
![X]https://i.imgur.com/zxDOFrP.gif (showing strike system, 3 strikes results in a loss)


1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[I had checked for things on w3schools to help with some of the optional features. I had some background information on HTML, CSS, and a bit of JS so I mostly just followed along with the tutorial and if I had any questions I worked it out with w3schools.]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[A challenge that I encountered during this was handling some of the javascript. Specifically, working with javascript arrays to randomize the guesses took me a while to understand how arrays parse in javascript and how it differs from the other languages I know. In the end, I wound up doing many different tests in various javascript editors because I didn't want to work on my main site until I knew I had a method that worked. I had tried several different variations including modifying the initial array which was giving me trouble, in the end, I created a new array and filled it while I was parsing through the initial array of patterns, so that way I could keep the unedited array for testing purposes and then change it to the new array when I had a method that worked. In addition to this, the method that I devised allows me to create a new array of patterns with the same amount of elements as the original array without using hardcoded values. I tried to avoid using hardcoded values as that's generally bad practice, which is why in order to speed up the game in subsequent rounds I used the variable for number of rounds as a baseline number in order to decrease the delay between lights. All in all, I learned alot about Javascript and how to create code using best practices, which is something I am still working on and hope to do more projects in which I can learn better practices for coding in a practical sense. Many of the classes I am taking focus on a model of doing smaller projects, and bringing them together later however this was exciting because it introduced the concepts as I was doing the project and I was able to procedurally put together what I needed to do and how to do it. ]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[My biggest question about web development is how I could make the site more professional. I would have liked to conform the site more to current web standards and that means I would have to change the basic layout of the site and how they work. I think using a framework like react or Angular would go a long way towards improving the layout and create a more seamless and responsive site. I want to know what type of other methods could you use to create a more concise, and lighter version of the site that would be more optimal for different types of users. The goal of making a site in my opinion is to improve upon the experience of something or to create a new experience so I wonder what other methods I could take to redo this from the ground up.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. 

[I would definitely work more on custom assets, I couldn't really find assets that I thought would have fitted and looked good stylistically so I did not include any. If I would have had the time I would have liked to update the user experience of the site by making some of the sounds smoother than just tones, and eliminating the alerts on game win and game lose with another method because I think just using a browser alert is not the optimal. In addition to this, I would like to make the visual aspects more appealing. To me, it looks like a beta version of what would be a very good finished product. The backbone of the site has been established with working on javascript and a basic layout, but I think a lot of things could be improved further in terms of the look and feel. I would like to also control the placement of the elements as well, because for now, it responds to the page size rather than having a defined layout, so it would be different and potentially messy on different sized screens. These types of things can go a long way towards improving how a site looks and feels for people with varying ways of accessing it.]


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.<!