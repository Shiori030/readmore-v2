import styles from './readmore.module.css'
import { useState, useEffect, useRef } from 'react'

export default function ReadMore({ title, content, lines }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMore, setIsMore] = useState(false)
  const [isLoading,setIsLoading] = useState(true)
  const [totalLines, setTotalLines] = useState(0)
  const contentRef = useRef()


  useEffect(() => {
    setTotalLines(contentRef.current.getClientRects().length)
  }, [content,lines])

  useEffect(() => {
    if(totalLines < lines){
      setIsMore(false)
    }

    if (totalLines > lines) {
      setIsMore(true)
    }

    setIsLoading(false)
  }, [totalLines,lines])

  return (
    <div className={`${styles.readmore}`} style={{opacity: isLoading ? 0 : 1}}>
      <div className={`${styles.titleArea}`}>
        <h2 className={`${styles.title}`}>{title}</h2>
      </div>
      <div className={`${styles.contentArea}`}>
        <span className={isMore ? `${styles.content}` : null} style={{ WebkitLineClamp: isOpen ? null : lines }} ref={contentRef}>{content}</span>
      </div>
      {isMore ? (
        <div className={`${styles.buttonArea}`}>
          <button onClick={() => setIsOpen(!isOpen)} className={`${styles.button}`}>{isOpen ? "Read less" : "Read more"}</button>
        </div>
      ) : null}
    </div>
  )
}