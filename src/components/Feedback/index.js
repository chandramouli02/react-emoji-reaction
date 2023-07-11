import './index.css'
import {Component} from 'react'
import EmojiReactionItem from '../EmojiReactionItem'

class Feedback extends Component {
  state = {isEmojiClicked: false}

  onEmoji = () => {
    this.setState({isEmojiClicked: true})
  }

  render() {
    const {isEmojiClicked} = this.state

    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="main-container">
        {!isEmojiClicked && (
          <div className="elements-container">
            <h1 className="heading">
              How satisfied are you with our customer support preformance?
            </h1>
            <ul className="emojis-container">
              {emojis.map(eachItem => (
                <EmojiReactionItem
                  key={eachItem.id}
                  emojis={eachItem}
                  onEmoji={this.onEmoji}
                />
              ))}
            </ul>
          </div>
        )}
        {isEmojiClicked && (
          <div className="elements-container">
            <img className="love-img" src={loveEmojiUrl} alt="love emoji" />
            <h1 className="thankyou-heading">Thank You!</h1>
            <p className="thankyou-msg">
              we will use your feedback to improve our customer support
              performance..
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
