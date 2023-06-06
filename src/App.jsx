import { useEffect, useState } from 'react';
import Loading from './Loading';
import JobInfo from './JobInfo';
import BtnContainer from './BtnContainer';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchData = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    console.log(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className='jobs-center'>
        <Loading />
      </section>
    );
  }
  return (
    <section className='jobs-center'>
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
