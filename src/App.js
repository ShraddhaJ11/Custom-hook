import "./styles.css";
import useOnline from "./useOnline";
import { useFetch } from "./useFetch";

export default function App() {
  const isOnline = useOnline();
  const {response,loading,error} = useFetch('https://dummyjson.com/products',{});

  if(loading)
  return <div>Loading...</div>

  if(error)
  return <div>{error}</div>

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{isOnline ? "Online" : "Offline"}</h2>
      <div>{response.products}</div>
    </div>
  );
}
