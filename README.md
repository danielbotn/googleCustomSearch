<div align="center">

![Google Logo](https://avatars0.githubusercontent.com/u/1342004?v=3&s=96)

[Click here to go to Live Demo](http://stale-acoustics.surge.sh/)

</div>

<p align="center" color="#6a737d">
  This is a google custom search app written in Svelte.
</p>

<div align="center">

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/makes-people-smile.svg)](http://forthebadge.com)
</div>

<div align="center">

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

</div>

A very simple custom search app written in Svelte

- [Svelte](https://svelte.dev/) front end JavaScript framework
- [Tailwindcss](https://tailwindcss.com) for a utility first CSS workflow.

---

## Prerequisites

- [Node and NPM](https://nodejs.org/)

## Running locally

```bash
# install the project dependencies
npm install

# run the build and server locally
npm run env:dev

```

## Deployment

```bash
# Here we are using surge for deployment
# path http://stale-acoustics.surge.sh/ --> name stale-acoustics.surge.sh

# build browserify
browserify app.js -t [envify --DAYS_SECRET_KEY my-super-secre-key --DAYS_SECRET_PASSWORD my-super-secret-password] > bundle.js

# build
npm run build

# For production deployment on surge
surge dist
```