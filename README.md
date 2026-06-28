# Simple Harmonic Motion 
<table>
<tr>
<td>

<img src="https://cdn.hackclub.com/019f0f62-f816-7e99-a4dd-0bc1bb01e9cb/files%20for%20shm.png" width="300" alt="file structure">

</td>
<td>

**note for the reviewer:**
only the files listed in the given picture belong to this project. if any other files appear in tracked time, pls ignore them - hackatime has been glitching and pulling unrelated files.

**ai usage:** a bit of css code generation (custom slider styling after following [this W3Schools tutorial](https://www.w3schools.com/howto/howto_js_rangeslider.asp)), some math values, and bug fixes in javascript.

**timeline:** project created on 29 April. wave motion was added later as an update, with more similar topics planned and coming soon!

</td>
</tr>
</table>

## what is this?
an interactive diagram of simple harmonic motion! the green dot moves around 
the circle, the white dot shows its projection on the x-axis (that's the actual 
SHM part), and all the connecting lines update with time.
[![Demo](https://github.com/user-attachments/assets/9fde0553-13e3-41a2-b956-8ea1adb99dc4)](https://github.com/user-attachments/assets/9fde0553-13e3-41a2-b956-8ea1adb99dc4)

## why does this exist?
i was studying physics, got bored, and thought what if i just built this instead? XD
turns out animating particles with trigonometry teaches you SHM better than 
any textbook diagram ever could.

also i think we should make more sites like this. small, personal, just for fun.

## why this is special to me
this project is very raw, and i kept it that way for two specific reasons:
*   you don't need 100mb of dependencies to make something cool. otherwise i originally thought about reaching for react or threejs.
*   i wanted this to be a clean starting point for people starting with frontend. if you know a little js and some high school math, you can read this source code and actually understand it.
    
### what’s inside
it has the shm diagram (pure js + css), some notes on what shm actually is, a custom cursor i made (i love drawing), an animation(in a canvas) of a travelling wave with controls for amplitude, frequency, and wavelength using the live equation `v = fλ` updating as you change values and of course my love for physics!!

### what you can learn from this repo
*   **js trigonometry:** see `math.sin()` and `math.cos()` this is the secret sauce for making anything move in a circle
*   **advanced css:** no "basic" properties here, we're talking about dynamic transforms, relative positioning tricks, and smooth transitions.
*   **dom manipulation:** handling real-time updates and animating particles without a virtual dom.

## made for
specifically for **#horizons** on [Hack Club](https://hackclub.com)!!

## say hi

if you're coming from the hack club workspace and want to suggest something,
wanna learn too, or just talk about physics:
- slack: **@Alisha**
