import "./Score.css"

const Scores = ({ click }) => {
   const scores = [1, 2, 3, 4, 5]
   const buttons =
      scores.map(score => (
         <button
            onClick={click}
            className="Score"
            key={score}>
            {score}
         </button>
      ))
   return (
      <>
         {buttons}
      </>
   )
}

export default Scores