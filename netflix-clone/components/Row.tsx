import React from 'react'
import { Movie } from '../typings'
//1:43:41


interface Props {
    title: string
    movies: Movie[]
}


function Row({ title, movies }: Props) {
  return (
    <div>Row</div>
  )
}

export default Row