import Counter from "./components/Counter";
import Stats from "./components/Stats";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counters/countersSlice";
import Posts from "./components/Posts";

export default function App(){
  const counters = useSelector((state)=>state.counter);
  const dispatch = useDispatch();

  const totalCount = counters.reduce((sum, current) => sum+current.value,0);
  const handleIncrement = (counterId) => {
    dispatch(increment(counterId))
  };
  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId))
  };
  return (
    <div>
      <h3>
        simple counter Application
      </h3>
      <div>
        {counters.map((counter) => (
          <Counter 
            count={counter.value}
            key={counter.id}
            onIncrement = {()=>handleIncrement(counter.id)}
            onDecrement = {()=>handleDecrement(counter.id)}
          />
        ))}
        <Stats totalCount={totalCount} />
        
      </div>
      <Posts/>
    </div>
  )
}
