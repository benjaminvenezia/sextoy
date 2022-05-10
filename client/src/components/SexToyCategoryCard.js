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
  background-color: var(--black);
  border: 2px solid var(--primary);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);

  h2 {
    animation-name: example;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-delay: 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-direction: alternate;
  }

  @keyframes example {
    from {
    }
    to {
      color: var(--primary);
      text-shadow: 0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93, -2px 1px #cdd2d5,
        -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93, -4px 3px #cdd2d5;
    }
  }

  @media (max-width: 992px) {
    width: 90%;

    h2 {
      font-size: smaller;
    }

    p {
      font-size: smaller;
    }
  }
`

export default SexToyCategoryCard
