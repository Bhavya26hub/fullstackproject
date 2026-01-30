const ClientCard = ({ client }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", width: "250px" }}>
      <img src={client.image} width="80" />
      <p>"{client.description}"</p>
      <h4>{client.name}</h4>
      <small>{client.designation}</small>
    </div>
  );
};

export default ClientCard;
