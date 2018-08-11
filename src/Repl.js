import React from 'react'

const Repl = ({ id }) => (
  <div>
    <iframe 
      title={id}
      height="400px" 
      width="100%" 
      src={`https://repl.it/repls/${id}?lite=true`}
      scrolling="no" 
      frameborder="no" 
      allowtransparency="true" 
      allowfullscreen="true" 
      sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
    >
    </iframe>
  </div>
)

export default Repl
