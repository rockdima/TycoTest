import React from 'react'

function ProgressBar(props) {

    const progress = (props.score * 10) + '%';

  return (
    <div className='ProgressBar'>
        <div className='score' style={{width:progress}}></div>
    </div>
  )
}

export default ProgressBar