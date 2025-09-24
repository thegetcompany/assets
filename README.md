# assets

**Repo untuk semua assets yang digunakan di seluruh platform GetGoing**

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/node.js-20-brightgreen.svg)](https://nodejs.org/en/)


## Table of Contents

- [Description](#description)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)


## Description

This repository provides all assets utilized across various GetGoing platforms.  It's a centralized location for images (PNG, SVG) specifically optimized for React Native projects.  This ensures consistency and simplifies asset management across all our projects.


## Features

- Provides a centralized repository for all GetGoing project assets.
- Includes PNG and SVG images.
- Generates PNG assets from SVGs optimized for React Native.


## Requirements

- Node.js v20 or higher
- npm or yarn


## Installation

1. Clone the repository: `git clone u003crepository_urlu003e`
2. Navigate to the project directory: `cd assets`
3. Install dependencies: `npm install`


## Usage

**For Developers:**

1. Install dependencies: `npm install`
2. Run build scripts: `npm run scripts`
3. Build the assets: `npm run build`
4. Create a symbolic link: `npm link`
5. Link the assets to your project: `npm link thegetcompany-assets` (replace `thegetcompany-assets` with the actual package name if different)

**For Publishing:**

1. Follow steps 1-3 from the "For Developers" section.
2. Log in to npm: `npm login`
3. Increment the version: `npm version patch`
4. Publish the package: `npm publish --access public`