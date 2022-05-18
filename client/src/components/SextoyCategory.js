import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { SexToyCategoryCard, HipsterButton } from '.'
import { Link } from 'react-router-dom'

const SextoyCategory = ({ tagsNextQuestion }) => {
  let url2 = `/api/v1/sextoy/tags?tags=${tagsNextQuestion.join(', ')}`

  const [categories, setCategories] = useState()

  const fetchData = async (url) => {
    await axios.patch('api/v1/counter')
    const response = await axios.get(url)

    setCategories(response.data)
  }

  useEffect(() => {
    fetchData(url2)
  }, [])

  if (categories?.count > 0) {
    return (
      <Wrapper>
        <p>
          {categories.count} catégorie{categories.count > 1 ? 's' : ''} trouvée{''}
          {categories.count > 1 ? 's' : ''}
        </p>
        {categories?.sextoys.map((category) => {
          return <SexToyCategoryCard key={category._id} category={category} />
        })}
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <div className="no-match-container">
          <p>Veuillez patienter, nous allons chercher votre catégorie...</p>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  .no-match-container {
    display: flex;
    justify-content: center;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--primary);

  padding: 2rem;
`
export default SextoyCategory
