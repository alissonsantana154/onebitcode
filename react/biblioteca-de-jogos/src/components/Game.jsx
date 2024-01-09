import Proptypes from "prop-types"

Game.propTypes = {
  title: Proptypes.string,
  cover: Proptypes.string,
  onRemove: Proptypes.func
}

export default function Game({ title, cover, onRemove }) {
  return (
    <div>
      <img src={cover} alt="" />
      <div>
        <h2>{title}</h2>
        <button onClick={onRemove}>Remover</button>
      </div>
    </div>
  )
}
