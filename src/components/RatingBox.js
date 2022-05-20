import { Component } from "react";
import './RatingBox.css'
import Star from "./Star"
import Scores from "./Scores"
import Submit from "./Submit";
import ThankYouBox from "./ThankYouBox";

class RatingBox extends Component {
   state = {
      rate: null,
      isSubmited: false,
   }

   handleRateButton = e => {
      this.setState({
         rate: e.target.innerText
      })
   }

   handleSubmit = () => {
      if (this.state.rate) {
         this.setState({
            isSubmited: true
         })
      } else alert("Please rate us :)")
   }
   render() {
      return (
         <main className="RatingBox">
            {!this.state.isSubmited ?
               <>
                  <Star />
                  <h1 className="RatingBox__heading">How did we do?</h1>
                  <p className="RatingBox__paragraph">Please let us know how we did with your support request. All feedback is appreaciated to help us improve our offering!</p>
                  <div className="RatingBox__ratingScoresContainer">
                     <Scores click={this.handleRateButton} />
                  </div>
                  <Submit click={this.handleSubmit} rate={this.state.submit} />
               </>
               :
               <ThankYouBox rate={this.state.rate}/>
            }
         </main>
      )
   }
}

export default RatingBox;
