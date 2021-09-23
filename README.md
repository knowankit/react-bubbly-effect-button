# react-bubbly-effect-button

## Intro

<p align="center">
  <img width="400" src="https://github.com/knowankit/react-bubbly-effect-button/blob/develop/demo.gif">
</p>

## Install

```bash
npm install react-bubbly-effect-button --save
```

If you prefer yarn then

```bash
yarn react-bubbly-effect-button
```

## Props

| Property      | Type | Default | Description
| ----------- | ----------- | ----------- | ----------- |
| text      | string       | 'Dummy       | Button text      |
| bgColor      | string       | #ff2e2e       | Button and particle color       |
| color   | string        | white       | Button text color       |
| onClick   | func        | null       | Callback for on click for the button    |


## Usage

Check out the [demo](https://knowankit.github.io/react-bubbly-effect-button/) to see in action

```jsx
import React from 'react'
import ReactBubblyEffectButton from "react-bubbly-effect-button";

const onClick = () => {
  console.log('Clicked')
}

const BubblyButton = () => {
  return <ReactBubblyEffectButton text="Click here" color='#fff' bgColor='#ff0081' onClick={onClick} />
}

export default BubblyButton;
```

## Info

This module was bootstrapped with [build-react-npm](https://github.com/knowankit/build-react-nom).

## License

MIT © [Ankit Kumar](https://github.com/knowankit)

Support my OSS work by <a href="https://twitter.com/knowankit">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
