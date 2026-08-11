import { Note } from "../Figure";

export const metadata = { title: "Go Fish" };

export default function GoFish() {
  return (
    <>
      <h1>Go Fish</h1>

      <h2>Why</h2>
      <p>{`Growing up I have always loved fishing, and my family would travel a lot. I would keep running into the situation of being in some foreign place and wanting to fish. Unfortunately it's a hassle to pack all my fishing stuff and bring it with me everywhere I go, and there are no readily available options to rent fishing gear so the only option if I really want to fish is to buy a cheap setup and use it while I'm there. This is obviously inneficient its why I came up with the idea for a peer to peer rental marketplace for fishing gear.`}</p>
      <p>{`This would indirectly solve another small painpoint. When going to fish at a new spot, you have to figure out what fish are there and seek out the equipment, lures, line, bait, etc. needed to catch them. When renting out from a local, they already have gear that's tailored to the fish in their area, eliminating that step.`}</p>
      <Image
        src="/images/fishy.png"
        alt="Outside of the dining hall giving out donut holes"
        width={250}
        height={250}
      />
      <h2>What Happened</h2>
      <p>{`Go Fish was the first time I had an idea and built it out, and I learned a lot on the way. 6 months spent building the product before even asking a single person whether they would use it. Only after it was built did I make a market research survey and stand outside the dining hall at my college giving out free donut holes to people who filled it out. 90% of those people didn't fish, but the 10% that did gave me valuable insight.`}</p>
      <p>{`People aren't comfortable giving out their fishing gear because of fear of damage, line getting tangled, etc. I had considered this possibility and thought of security deposits, or insurance built in, but after talking to other people and companies nobody loved the idea, and some companies who had tried renting out their own gear explained why they stopped because of how much of a hassle it was.`}</p>
    </>
  );
}
