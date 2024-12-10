import ReadMore from "../../components/ReadMore"
import styles from './home.module.css'
import { newsDatas } from "./newsDatas"

export default function ReadMoreTest() {
  return (
    <div>
      {newsDatas.map((data) => (
        <div className={`${styles.readmoreArea}`}>
        <ReadMore
          title={data.title}
          content={data.content}
          lines={data.lineLimit}
        />
      </div>
      ))}
    </div>
  )
} 