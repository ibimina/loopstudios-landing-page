function Creation(props) {
  const { creation, creationList,seeAll } = props;
  return (
    <div className="showcase-container">
      <h3 className="creation-title">{creation.toUpperCase()}</h3>
      <div className="showcase">
        {creationList.map((creation) => {
          return (
            <div key={creation} className={creation.toLowerCase()}>
              <p>{creation.toUpperCase()}</p>
            </div>
          );
        })}
      </div>
      <div className="btn-wrap">
        <a href="#mm" className="btn">
          {seeAll.toUpperCase()}
        </a>
      </div>
    </div>
  );
}

export default Creation;
