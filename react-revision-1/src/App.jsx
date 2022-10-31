import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './Card'
import CardDynamic from './CardDynamic'

function App() {
  return(
    <Fragment>
      <Card/>
      <CardDynamic title="Mustafa třetí" content="https://cs.wikipedia.org/wiki/Mustafa_III." text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, suscipit quidem et ut ad, reiciendis at cumque maiores, eum asperiores unde modi voluptatem fugit vero rem doloribus."/>
    </Fragment>
  )
}
export default App


