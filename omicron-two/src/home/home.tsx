import React from 'react'
import Button from '@material-ui/core/Button'
import { getCharacter } from '../../../swapi'

const Home = () => {
  const onClickHandler = () => {
    getCharacter(2, (name: string) => {
      alert(name)
    })
  }

  return (
    <Button
      variant='contained'
      color='primary'
      onClick={() => onClickHandler()}
    >
      Get Character
    </Button>
  )
}

export { Home }
