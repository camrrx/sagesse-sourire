import "./maps.scss"; // Assurez-vous de configurer vos styles

const MapComponent = () => {
  return (
    <div className="map-container">
      <iframe
        className="maps-frame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2684.1323325372728!2d-1.3777765235140889!3d47.72068067120056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480f4aff51900001%3A0xf5cb44ca4ae81c21!2sCabinet%20Sagesse%20et%20Sourire!5e0!3m2!1sfr!2sfr!4v1692970576820!5m2!1sfr!2sfr"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapComponent;
