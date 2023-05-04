import {Component} from 'react'
import ButtonItem from '../ButtonItem'
import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultilingualGreetings extends Component {
  state = {active: languageGreetingsList[0].id}

  changeLanguage = id => {
    this.setState({active: id})
  }

  render() {
    const {active} = this.state
    const language = languageGreetingsList.filter(each => active === each.id)
    console.log(active)

    return (
      <div className="main-container">
        <h1 className="greeting-heading">Multilingual Greetings</h1>
        <ul className="unOrderList">
          {languageGreetingsList.map(each => (
            <ButtonItem
              each={each}
              key={each.id}
              isActive={each.id === active}
              changeLanguage={this.changeLanguage}
            />
          ))}
        </ul>
        <img
          src={language[0].imageUrl}
          alt={language[0].imageAltText}
          className="image"
        />
      </div>
    )
  }
}

export default MultilingualGreetings
