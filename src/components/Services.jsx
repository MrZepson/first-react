import Cards from "./Cards";

const Services = () => {
  let cardInfo = [
    {
      title: "Card 1",
      content: "This is card 1",
    },
    {
      title: "Card 2",
      content: "This is card 2",
    },
    {
      title: "Card 3",
      content: "This is card 3",
    },
    {
      title: "Card 4",
      content: "This is card 4",
    },
    {
      title: "Card 5",
      content: "This is card 5",
    },
    {
      title: "Card 6",
      content: "This is card 6",
    },
    {
      title: "Future update",
      content: "Button to create new card",
    },
  ];

  return (
    <section className="section">
      <div className="card-container">
        {cardInfo.map((card) => (
          <Cards title={card.title} content={card.content} />
        ))}
      </div>
    </section>
  );
};

export default Services;
