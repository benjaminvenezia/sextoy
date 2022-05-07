import styled from 'styled-components'

const SextoyArticle = ({ article }) => {
  return (
    <Wrapper>
      <h3>{article.name_shop}</h3>
      <a className="btn" target="_blank" href={article.url_category}>
        Visiter la catégorie!
      </a>
      <a className="btn" target="_blank" href={article.url_product}>
        {article.name_shop} vous recommande ce produit!
      </a>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: lightgray;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 10px;
`

export default SextoyArticle
