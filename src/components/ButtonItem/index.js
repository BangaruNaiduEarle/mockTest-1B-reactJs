import './index.css'

const ButtonItem = props => {
  const {each, isActive, changeLanguage} = props

  const {buttonText, id} = each

  const styledColor = isActive ? 'bg-color' : ''

  const onClickBtnLanguage = () => {
    changeLanguage(id)
  }

  return (
    <li className="button-item">
      <button
        type="button"
        className={`button-style ${styledColor}`}
        onClick={onClickBtnLanguage}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default ButtonItem
