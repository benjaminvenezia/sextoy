import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { SexToyCategoryCard } from '.'

const SextoyCategory = ({ tagsNextQuestion }) => {
  let url2 = `http://localhost:5004/api/v1/sextoy/tags?tags=${tagsNextQuestion.join(
    ', '
  )}`

  const [categories, setCategories] = useState()

  const fetchData = async (url) => {
    const response = await axios.get(url)

    setCategories(response.data)
  }

  useEffect(() => {
    fetchData(url2)
  }, [])

  return (
    <Wrapper>
      {categories?.count > 0 ? (
        ((<p>{categories?.count} catégorie de sextoy trouvée!</p>),
        categories?.sextoys.map((category) => {
          return <SexToyCategoryCard key={category._id} category={category} />
        }))
      ) : (
        <p>Malheureusement, aucune catégorie n'a matché avec vos conditions! 🥺</p>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 2rem;
`
export default SextoyCategory
