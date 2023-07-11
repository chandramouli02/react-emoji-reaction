import './index.css'
import {Component} from 'react'

class EmojiReactionItem extends Component {
  render() {
    const {emojis, onEmoji} = this.props
    const {name, imageUrl} = emojis
    return (
      <li className="emoji-item">
        <div className="emoji-img-container">
          <img
            onClick={onEmoji}
            className="emoji"
            src={imageUrl}
            alt="love emoji"
          />
        </div>

        <p className="text">{name}</p>
      </li>
    )
  }
}

export default EmojiReactionItem
