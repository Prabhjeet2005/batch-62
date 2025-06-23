import { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import Parent from "./Parent";
import MyNavBar from "./MyNavbar";
import UserContextProvider from "./UserContextProvider";
import useApi from "./useApi";
import { ENDPOINTS } from "./apiUtils";

function App() {
  const { isLoading, makeRequest: loginViaCookie } = useApi(ENDPOINTS.USER.LOGIN)

  useEffect(() => {
    loginViaCookie()
  }, [])
  // const [name, setName] = useState("Nikhil");
  // const [displayComponent, setDisplayComponent] = useState(true);
  // const user = {
  //   name,
  //   id: 101,
  // };

  // setTimeout(() => {
  //   setName("GFG");
  // }, 5 * 1000);

  return (
    <>
      {/* <section id="app">
        <h1>App Component</h1>
        <section>
          <a href="test">Test Hyperlink</a>
          <br />
          <a href="routing">Routing Hyperlink</a>
          <br />
          <a href="abcd">ABCD Hyperlink</a>
        </section>
        <section>
          <h1>Router Link</h1>
          <Link to="test">Test Hyperlink</Link>
          <br />
          <Link to="routing/p123?search=iPhone&locn=IN&device=pc">
            Routing Hyperlink
          </Link>
          <br />
          <Link to="abcd">ABCD Hyperlink</Link>
        </section>

        <section>
          <h1>Children routes</h1>
          <Link to="parent/child1" state={{source:'app'}} replace={true} >child 1</Link>
          <br />
          <Link to="parent/child2">Child 2</Link>
          <br />
          <Link to="parent/child3">Child 3</Link>
        </section>
      </section> */}
      < MyNavBar />
      <Outlet />
    </>
  );
}

export default App;
