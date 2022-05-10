import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { SexToyCategoryCard, HipsterButton } from '.'
import { Link } from 'react-router-dom'

const SextoyCategory = ({ tagsNextQuestion }) => {
  let url2 = `/api/v1/sextoy/tags?tags=${tagsNextQuestion.join(', ')}`

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
        <>
          <p>
            Malheureusement, aucune catégorie n'a matché avec vos conditions! 🥺{' '}
            <br />
            Nous oeuvrons actuellement pour augmenter le champs des possibles! Merci
            de réessayer prochainement!
            <HipsterButton as="a" href="/">
              Revenir à la homepage
            </HipsterButton>
          </p>
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  p {
    color: var(--primary);
  }
  padding: 2rem;
`
export default SextoyCategory
