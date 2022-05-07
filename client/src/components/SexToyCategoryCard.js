import styled from 'styled-components'
import { SextoyArticle } from '.'

const SexToyCategoryCard = ({ category }) => {
  return (
    <Wrapper>
      <h2>{category.name}</h2>
      <p>{category.description}</p>

      <p>
        {category.articles.map((article) => {
          return <SextoyArticle article={article} />
        })}
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 2rem;
  background-color: aliceblue;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
`

export default SexToyCategoryCard
