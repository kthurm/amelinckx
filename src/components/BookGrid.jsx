import Card from "../UI/Card";
import Hudson from "../images/hudson-valley.png";
import Berkshire from "../images/berkshire-murder.png";
import Wickedness from "../images/exquisite-wickedness.jpg";

const BookGrid = () => {
  return (
    <div className="bg-[#ede6d5] relative w-full py-5 z-20">
      <div className="container-lg px-5 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        <Card
          img={Wickedness}
          className="books flex flex-col"
          title="Exquisite Wickedness"
          children={
            <div className={"flex flex-col space-y-5"}>
              <p>
                “The Tell-Tale Heart,” one of Edgar Allan Poe’s most famous
                short stories, has inspired artists, filmmakers, and writers
                since its first publication in 1843. But it was two murders a
                decade apart that helped inspire Poe to write his macabre
                masterwork of psychological fiction.
              </p>

              <p>
                In Salem, Massachusetts, in April 1830, the ruthless murder of
                an old and wealthy sea captain rattled the city’s rich, sullied
                Salem’s reputation, and helped launch America’s obsession with
                true crime.
              </p>

              <p>
                A decade later, in December 1840, in New Brunswick, New Jersey,
                a wealthy banker mysteriously disappeared. The discovery of his
                mangled corpse and the demeanor of his alleged killer made for
                great headlines in New York’s new Penny Press and planted the
                seeds for Poe’s masterpiece.
              </p>

              <p>
                Poe’s life during the period of these murders went from
                idealistic poet to soldier to struggling writer, set adrift by
                family rifts and his stubborn nature.
              </p>

              <p>
                <em>Exquisite Wickedness</em> examines these two crimes, Poe’s
                life during this period, the circumstances of the writing of his
                famous story, and an unbelievable betrayal whose effects have
                lasted far beyond the grave.
              </p>

              <p>
                Published by{" "}
                <strong>
                  <a
                    href="https://www.through-time.com/collections/andrew-amelinckx"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    America Through Time
                  </a>
                </strong>{" "}
                (March 29, 2021).
              </p>

              <p>
                Available through{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://amzn.to/3APXMsx"
                  target="_blank"
                >
                  Amazon,&nbsp;
                </a>
                <a
                  href="https://www.arcadiapublishing.com/books?searchText=exquisite%20wickedness"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Arcadia Publishing,&nbsp;
                </a>
                <a
                  rel="noreferrer noopener"
                  href="https://www.barnesandnoble.com/w/exquisite-wickedness-andrew-amelinckx/1137897900?ean=9781634993036"
                  target="_blank"
                >
                  Barnes &amp; Noble,
                </a>
                &nbsp;
                <a
                  href="https://www.target.com/p/exquisite-wickedness-america-through-time-by-andrew-amelinckx-paperback/-/A-82565567"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Target
                </a>
              </p>
            </div>
          }
        ></Card>
        <Card
          img={Hudson}
          className="books flex flex-col"
          title="Hudson Valley Murder & Mayhem"
          children={
            <div className={"flex flex-col space-y-5"}>
              <p>
                <strong>
                  “Billy, I’ve killed your mother.” – Albert Devine, to his
                  son—1925.&nbsp;
                </strong>
                The Hudson Valley is drenched in history, culture and blood. In
                the fall of 1893, Lizzie Halliday left a trail of bodies in her
                wake, slaughtering two strangers and her husband before stabbing
                a nurse to death at the asylum housing her. A Jazz Age
                politician, tired of fighting with his overbearing wife,
                murdered her and buried the body under the front porch. In 1882,
                a cantankerous old miner, dubbed the “Austerlitz Cannibal” by
                the press, chopped up his partner before he himself swung from
                the end of a rope. Author Andrew Amelinckx dredges up the Hudson
                Valley’s dark past, from Prohibition-era shootouts to unsolved
                murders, in eleven heart-pounding true stories.
              </p>
              <p>
                Published by
                <a
                  href="https://www.arcadiapublishing.com/Products/9781467136433"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp; The History Press
                </a>
                &nbsp;June&nbsp;26, 2017
              </p>
              <p>
                Available through:
                <a
                  rel="noopener noreferrer"
                  href="https://amzn.to/2oP2vZw"
                  target="_blank"
                >
                  {" "}
                  Amazon,&nbsp;
                </a>
                <a
                  href="https://www.barnesandnoble.com/w/hudson-valley-murder-mayhem-andrew-k-amelinckx/1125875024?ean=9781467136433"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Barnes and Noble,
                </a>
                &nbsp;
                <a
                  rel="noopener noreferrer"
                  href="https://www.littlecitybooks.com/book/9781467136433"
                  target="_blank"
                >
                  Little City Books,&nbsp;
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://www.powells.com/book/-9781540216663"
                  target="_blank"
                >
                  Powells
                </a>
              </p>
            </div>
          }
        ></Card>

        <Card
          img={Berkshire}
          className="books flex flex-col"
          title="Gilded Age Murder &amp; Mayhem in the Berkshires"
          children={
            <div className={"flex flex-col space-y-5"}>
              <p>
                <strong>
                  Murder and dark deeds shadowed the extravagance of the Gilded
                  Age in the Berkshires of Massachusetts.
                </strong>{" "}
                In the summer of 1893, a tall and well-dressed burglar plundered
                the massive summer mansions of the upper crust. A visit from
                President Teddy Roosevelt in 1902 ended in tragedy when a
                trolley car smashed into the presidential carriage, killing a
                Secret Service agent. Shocking the nation, a psychotic
                millworker opened fire on a packed streetcar, leaving three dead
                and five wounded. From axe murders to botched bank jobs, author
                Andrew Amelinckx dredges up the forgotten underbelly of the
                Berkshires with unforgettable stories of greed, jealousy and
                madness from the Gilded Age.
              </p>

              <p>
                Published by{" "}
                <a
                  rel="noopener noreferrer"
                  href="https://www.arcadiapublishing.com/9781626197985/Gilded-Age-Murder--Mayhem-in-the-Berkshires"
                  target="_blank"
                >
                  The History Press
                </a>{" "}
                (October 12, 2015){" "}
              </p>

              <p>
                Available through:{" "}
                <a
                  rel="noopener noreferrer"
                  href="https://amzn.to/1OxArRS"
                  target="_blank"
                >
                  Amazon,&nbsp;
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://www.arcadiapublishing.com/9781626197985/Gilded-Age-Murder--Mayhem-in-the-Berkshires"
                  target="_blank"
                >
                  Arcadia Publishing,&nbsp;
                </a>
                <a
                  href="https://www.barnesandnoble.com/w/gilded-age-murder-mayhem-in-the-berkshires-andrew-k-amelinckx/1122450288?ean=9781626197985"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Barnes and Noble,&nbsp;
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://www.littlecitybooks.com/book/9781626197985"
                  target="_blank"
                >
                  Little City Books,&nbsp;
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://www.powells.com/biblio/62-9781626197985-0"
                  target="_blank"
                >
                  Powells
                </a>
              </p>
            </div>
          }
        ></Card>
      </div>
    </div>
  );
};

export default BookGrid;
