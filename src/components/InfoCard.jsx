const InfoCard = ({ onClick, data }) => {
  return (
    <div
      onClick={() => {
        if (onClick) {
          onClick(data);
        }
      }}
      className='dashboard-card'
    >
      <div className='dashboard-card-inner'>
        <div className='dashboard-card-info'>
          <h4>{data.name}</h4>
          <span>{data.designation}</span>
        </div>
        <div className='dashboard-card-image'>
          <img src={data.image} alt={data.name} />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
