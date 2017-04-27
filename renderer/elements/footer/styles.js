var css = require('csjs-inject')

module.exports = css`
  .footer {
    -webkit-app-region: drag;
    border-left: var(--border);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 0 0 1em;
    text-align: center;
    min-width: 250px;
    max-width: 250px;
    justify-content: space-between;
  }

  .albumCover {
    position: relative;
    width: 100%; /* desired width */
    border-radius: 4px;
    overflow: hidden;
  }
  .albumCover:before {
    content: '';
    display: block;
    padding-top: 100%; /* initial ratio of 1:1*/
  }

  .albumArt {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background: #eee;
    background-size: cover;
    background-position: center;
  }

  .track {
    padding: 1em;
    width: 100%;
  }

  .meta { margin: 1rem 0 }

  .title, .artist { margin: 0 }
  .title { font-weight: 600 }

  .controls {
    font-size: 2em;
    margin: 1rem 0;
  }
  .trackControls { flex: 1 }
  .scrubberControl {
    margin: 1rem 0;
    width: 100%
  }

  .scrubber {
    cursor: default;
    position: relative;
    vertical-align: middle;
    -webkit-app-region: no-drag;
    width: 100%;
  }

  @media (max-width: 460px) {
    .footer {
      min-width: initial;
      max-width: initial;
      width: 100%;
    }
  }
`
