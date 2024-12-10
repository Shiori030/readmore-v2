import styles from './readmore.module.css'
import { useState, useEffect, useRef } from 'react'

export default function ReadMore({ title, content, lines }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMore, setIsMore] = useState(false)
  const [isLoading,setIsLoading] = useState(true);
  const [totalLines, setTotalLines] = useState(0);
  const contentRef = useRef()


  useEffect(() => {
    const contentDOM = contentRef.current;
    const range = document.createRange();
    range.selectNodeContents(contentDOM);
    const rects = Array.from(range.getClientRects())
    setTotalLines(rects.length);

    if(rects.length < lines){
      setIsMore(false)
    }
  }, [content,lines])

  useEffect(() => {
    if (lines && totalLines > lines) {
      setIsMore(true);
    }
    setIsLoading(false)
  }, [totalLines,lines])

  console.log(totalLines)


  return (
    <div className={`${styles.readmore}`} style={{opacity: isLoading ? 0 : 1}}>
      <div className={`${styles.titleArea}`}>
        <h2 className={`${styles.title}`}>{title}</h2>
      </div>
      <div className={`${styles.contentArea}`}>
        <p className={`${styles.content}`} style={{ WebkitLineClamp: isOpen ? null : lines }} ref={contentRef}>{content}</p>
      </div>
      {isMore ? (<div className={`${styles.buttonArea}`}>
        <button onClick={() => setIsOpen(!isOpen)} className={`${styles.button}`}>{isOpen ? "Read less" : "Read more"}</button>
      </div>) : null}
    </div>
  )
}