import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="card__header">
        <h2>Movie Title</h2>
        <h2>RATING</h2>
      </div>
      <section className="card__info">
        <div className="card__cover">
          <div>
            <image />
          </div>
          <div>short desc</div>
        </div>
        <article className="card__sinopsis">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          voluptates, hic natus quae doloremque facere iure magni qui excepturi,
          porro ipsam quia. Iure, facilis maxime? Ipsa perferendis voluptate
          doloremque sit! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quasi soluta neque fugiat ut. Neque iure nulla corrupti
          consequuntur laudantium debitis, quisquam earum quo, doloribus
          voluptate temporibus voluptatum unde aperiam quia?
        </article>
      </section>
    </div>
  );
};

export default Card;
