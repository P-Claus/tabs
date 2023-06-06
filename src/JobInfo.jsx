import Duties from './Duties';

const Jobs = ({ jobs, currentItem }) => {
  const { company, dates, duties, title } = jobs[currentItem];

  return (
    <article>
      <div>
        <h3>{title}</h3>
        <span className='job-company'>{company}</span>
        <p className='job-date'>{dates}</p>
        <Duties duties={duties} />
      </div>
    </article>
  );
};
export default Jobs;
