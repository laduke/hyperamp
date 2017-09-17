var html = require('choo/html')
var button = require('../button')
var buttonStyles = require('../button/styles')
var Component = require('nanocomponent')
var Range = require('../range')
var css = require('csjs-inject')

var styles = css`
  .volumeGroup {
    flex: 1 1 30%;
    max-width: 110px;
    min-width: 80px;
  }
  .volumeButton { padding-right: 0 }
  .range {
    width: 100%;
    padding: 0 3px;
  }
  .volumeSlider {
    position: relative;
    cursor: default;
    display: inline-block;
    vertical-align: middle;
    -webkit-app-region: no-drag;
    margin: 0 5px;
    width: 100%;
  }
`

class Volume extends Component {
  constructor (opts) {
    if (!opts) opts = {}
    super(opts)
    this._opts = Object.assign({
      min: 0,
      max: 1,
      default: 0.5,
      step: 0.01
    }, opts)

    // State
    this._emit = null
    this._volume = 0
    this._muted = false

    // Bound Methods
    this._changeVolume = this._changeVolume.bind(this)
    this._toggleMute = this._toggleMute.bind(this)

    // Owned Children
    this._volumeSlider = new Range(this._opts)
  }

  _changeVolume (volume) {
    this._volume = volume
    if (this._emit) this._emit('player:changeVolume', volume)
  }

  _toggleMute () {
    if (this._muted) this._emit('player:unmute')
    else this._emit('player:mute')
  }

  createElement (state, emit) {
    var { muted, volume } = state.player
    this._muted = muted
    this._volume = volume
    this._emit = emit
    return html`
      <div class="${buttonStyles.btnGroup} ${styles.volumeGroup}">
        ${button({
          onclick: this._toggleMute,
          iconName: muted ? 'entypo-sound-mute' : 'entypo-sound',
          className: styles.volumeButton
        })}
        ${button({ className: styles.range },
          this._volumeSlider.render({
            onchange: this._changeVolume,
            value: volume,
            className: styles.volumeSlider
          })
        )}
      </div>
    `
  }

  update (state) {
    var { muted, volume } = state.player
    if (this._muted !== muted || this._volume !== volume) {
      return true
    }
    return false
  }
}

module.exports = Volume
