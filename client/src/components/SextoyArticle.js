import styled from 'styled-components'
import { HipsterButton } from './Buttons'

const SextoyArticle = ({ article }) => {
  return (
    <Wrapper>
      <h3>{article.name_shop}</h3>
      <div className="buttons-container">
        <HipsterButton as="a" href={article.url_category}>
          Visiter la catégorie
        </HipsterButton>
        <HipsterButton as="a" href={article.url_product}>
          {article.name_shop} vous recommande ce produit!
        </HipsterButton>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  box-shadow: 0px 0px 5px white;
  background-color: var(--black);
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 10px;

  .buttons-container {
    display: flex;
  }
`

export default SextoyArticle
