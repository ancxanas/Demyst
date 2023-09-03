import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate("business_details")}>
        Start Application
      </button>
    </div>
  )
}

export default Home
