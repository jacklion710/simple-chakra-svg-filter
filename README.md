# Simple SVG Filter Component README

## Project Title
Simple SVG Filter Component

## Introduction
This project provides a simple yet powerful React component for applying SVG filters to images. Developed using Next.js, Chakra UI, and TypeScript, it allows for easy integration and customization of SVG filters in web applications.

## Table of Contents
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Dependencies](#dependencies)
6. [Configuration](#configuration)
7. [Examples](#examples)
8. [Troubleshooting](#troubleshooting)
9. [Contributors](#contributors)
10. [License](#license)

## Installation
To use this component in your project, follow these steps:

1. Ensure you have a React project setup with Next.js and Chakra UI.
2. Clone this repository or copy the files directly into your project.
3. Import the component where needed.

## Usage
Import and use the `SVGFilter` component or the `applySvgFilter` function in your React components to apply color filters to SVG images. Specify a path to a vector file `/path-to-image.svg`, allocate a unique ID `filterId` and provide a hex value for color `#hexcolor`. You can also apply any standard chakra prop.

```jsx
import { applySvgFilter } from 'path-to-SVGFilter';

// In your component
applySvgFilter('/path-to-image.svg', 'filterId', '#hexcolor', { /* other props */ });
```

## Features
- Simple and easy to integrate SVG filter component.
- Customizable filter color and additional props.
- Compatibility with Next.js and Chakra UI for modern web development.

## Dependencies
- Next.js
- Chakra UI
- TypeScript
- React

## Configuration
Next JS and Chakra UI should be configured. I have not tested it in Vue, Angular, etc... But it could work anywherere with a little extra effort. 

## Examples
The `Page.tsx` provides examples of how to use the `applySvgFilter` function to apply different color filters to SVG images.

## Troubleshooting
For any issues, first ensure that all dependencies are properly installed. Check if the SVG paths and filter IDs are correctly specified.

## Contributors
This project was developed solely by myself, Jacob Leone.

# License

MIT License

Copyright (c) 2024 Jacob Leone

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


---

This README provides a basic overview. For further customization and details, refer to the component source code.