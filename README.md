This repository contains Chrome plugin which adds following hotkeys
(they can be remapped in `chrome://extensions/shortcuts`):

| hotkey | action |
| --- |  --- |
| <ctrl+b> | go to `about:blank` |
| <ctrl+q> | go to `chrome://extensions` |
| <alt+x> | go to `chrome://flags` |
| <ctrl+m> | go to `chrome://chrome-urls` |

### Why not use already existing hotkey plugins for chrome?

The most popular one / first one to show up in search (as of now) hsa following problems:
- it cannot define hotkeys for something like `chrome://extensions`, which
I might need in future (chrome also doesnt allow redirection to links which start with `chrome://` as they
are considered local)
- you cannot define a hotkey for opening a url in a new tab - its either just opening a new tab
or opening a url if not already opened
- if you open new tab by custom hotkey and then close it, you dont go to previously opened tab
but rather to the last tab in left-to-right direction, which is annoying, because it doesnt 
correlate with default Chrome behaviour

After encountering this many problems with the most popular "custom hotkey" plugin I could only
imagine how many problems are there with the rest of them. And also I dont have enough attention span
to try anything after the first suggested plugin.

### What is the point of having a dedicated hotkey for opening a blank page?

Let's say Im reading some webdev tutorial, and, to sharpen my skills, I want to sketch some html page.
A blank page is the best option for that
