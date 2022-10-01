import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
    ${tw`
    w-full
    p-6
    rounded-r-3xl
    `}

`

const Overview = () => {
  return (
    <Container>Overview</Container>
  )
}

export default Overview