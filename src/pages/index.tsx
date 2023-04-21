import { type NextPage } from "next";

import Main from '@/layouts/Main';

const Home: NextPage = (props) => {
  console.log(props);
  return (
    <div>
      {/* <Header title="Header" /> */}
      {/* Main Box */}
      <Main {...props}></Main>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/topic');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = await res.json();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return { props: data };
}

export default Home;
