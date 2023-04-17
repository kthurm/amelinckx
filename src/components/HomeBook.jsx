import SatelliteFlat from "../images/satellite-boy-flat.png";

const HomeBook = () => {
  return (
    <div className="bg-background relative w-full z-20 pb-10">
      <div className="container-lg w-full mx-auto flex flex-col md:flex-row md:space-x-10 px-5">
        <div className="md:w-1/3 relative lg:-mt-20">
          <img
            src={SatelliteFlat}
            alt="Satellite Boy"
            className="mx-auto max-w-[240px] shadow-[15px_16px_33px_-14px_rgba(0,0,0,0.75)] lg:mb-10 rounded-sm"
          />

          <p class="hidden md:block py-2 text-center text-sm px-5">
            Order Satellite Boy via{" "}
            <a
              href="https://www.penguinrandomhouse.com/books/719641/satellite-boy-by-andrew-ameliinckx/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Penguin Random House.
            </a>
          </p>
          <p class="hidden md:block py-2 text-center text-sm px-5">
            Order a <b>signed copy</b> of Satellite Boy from
            <a
              href="https://www.oblongbooks.com/andrewamelinckx"
              target="_blank"
              rel="noreferrer noopener"
            >
              &nbsp;Oblong Books.
            </a>
          </p>
        </div>
        <div className="md:w-2/3 text-center md:text-left mt-10 lg:pr-10 ">
          <div className="text-3xl uppercase font-bold">Satellite Boy</div>
          <div className="font-bold text-sm py-5 italic">
            The International Manhunt for a Master Thief That Launched the
            Modern Communication Age
          </div>
          <div className="flex flex-col space-y-4 font-light text-left text-sm">
            <p class="font-bold">
              “As with Erik Larson’s <em>The Devil in the White City</em>,
              Amelinckx develops his two narratives suspensefully and in
              excellent historical detail before braiding them together with the
              skill of a master weaver. No account of the technocratic 1960s is
              complete without this thrilling tale.”<em> —Booklist</em>
            </p>
            <p>
              Spanning the hemisphere from the underworld haunts of Montreal to
              Havana and Miami in the early days of the Cold War, Satellite Boy
              reveals the unlikely connection between an audacious bank heist
              and the other Space Race that gave birth to the modern
              communication age.
            </p>
            <p>
              On April 6, 1965, Georges Lemay was relaxing on his yacht in a
              south Florida marina following one of the largest and most daring
              bank heists in Canadian history. For four years, the roguishly
              handsome criminal mastermind hid in plain sight, eluding capture
              and the combined efforts of the FBI, Interpol, and the Royal
              Canadian Mounted Police. His future appeared secure.
            </p>
            <p>
              What Lemay didn’t know was that less than two hundred miles away
              at Cape Canaveral, a brilliant engineer named Harold Rosen was
              about to usher in the age of global live television with the
              launch of the world’s first twenty-four-hour commercial
              communications satellite, Intelsat I, nicknamed Early Bird.
              Rosen’s extraordinary accomplishment would not only derail Lemay’s
              cushy life but change the world forever.
            </p>
            <p>
              Brimming with criminal panache and technological intrigue, and set
              against a turbulent and iconic period that includes the moon
              landing and the Civil Rights movement, Satellite Boy tells the
              largely forgotten, high-stakes story of the two equally driven men
              who inadvertently launched the modern era.
            </p>
            <p>
              Order a <b>signed copy</b> of Satellite Boy from
              <a
                href="https://www.oblongbooks.com/andrewamelinckx"
                target="_blank"
                rel="noreferrer noopener"
              >
                &nbsp;Oblong Books.
              </a>
            </p>
            <p>
              Order Satellite Boy via
              <a
                href="https://www.penguinrandomhouse.com/books/719641/satellite-boy-by-andrew-ameliinckx/"
                target="_blank"
                rel="noreferrer noopener"
              >
                &nbsp;Penguin Random House.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBook;
