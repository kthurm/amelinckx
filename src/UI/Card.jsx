const Card = (props) => {
  return (
    <div className="card flex flex-col space-y-5">
      <img
        src={props.img}
        alt={props.title}
        className="border shadow-[-2px_16px_20px_-12px_rgba(0,0,0,0.75)] max-w-[250px] mx-auto md:ml-0 mb-4"
      />
      <h4>{props.title}</h4>
      {props.children}
    </div>
  );
};

export default Card;
