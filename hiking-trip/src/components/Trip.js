const Trip = (props) => {
  const trip = props.trip;

  return (
    <>
      <img alt={trip.name} src={trip.image} />
      <p>{trip.name}</p>
    </>
  );
};

export default Trip;
