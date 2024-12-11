import ReadMore from "../../components/ReadMore"
import styles from './home.module.css'
import { newsDatas } from "./newsDatas"

export default function ReadMoreTest() {
  return (
    <div>
      {newsDatas.map((data, index) => (
        <div className={`${styles.readmoreArea}`} key={`read_more_${index}`}>
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