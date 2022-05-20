import Image from "./Image"
import "./ThankYouBox.css"

const ThankYouBox = ({ rate }) => (
   <div className="ThankYouBox">
      <Image />
      <p className="ThankYouBox__result">You selected {rate} out of 5</p>
      <h1 className="ThankYouBox__mainText">Thank You!</h1>
      <p className="ThankYouBox__paragraph">
         We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
      </p>
   </div>
)

export default ThankYouBox