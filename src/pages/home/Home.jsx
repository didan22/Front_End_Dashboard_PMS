import KontrakBox from "../../components/kontrakbox/KontrakBox"
import MunisiBox from "../../components/munisibox/MunisiBox"
import TopBox, { UsersBox } from "../../components/usersbox/UsersBox"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <UsersBox/>
      </div>
      <div className="box box2">
        <MunisiBox/>
      </div>
      <div className="box box3">
        <KontrakBox/>
      </div>
    </div>
  )
}

export default Home
