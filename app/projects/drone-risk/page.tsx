import { Note } from "../Figure";

export const metadata = { title: "Drone attack risk classification platform" };

export default function DroneRisk() {
  return (
    <>
      <h1>Drone attack risk classification platform</h1>
      <p>
        Risk scoring for 214,000 global energy facilities. Built on Palantir
        Foundry for the AIP Build Challenge.
      </p>

      <h2>Why I built it</h2>
      <p>
        The AegisGrid work is what made this feel worth doing, and the Aramco
        number is the hook: a $10,000 drone interrupted 5.7 million barrels a
        day. The question you were actually asking was whether public data is
        enough to model that vulnerability systematically, before an attack
        rather than after. Write that in your own words.
      </p>

      <h2>The model</h2>
      <p>{`Risk is split in two: how likely an attack is to succeed, and how bad it is if it does. Threat score weights proximity to historical drone incidents against how isolated the site is. Impact score weights cascade effects on nearby hospitals and water plants, the facility's own capacity, and surrounding infrastructure density. The two halves are weighted evenly into a final score.`}</p>
      <Note>
        Worth adding why you picked those weights, or admitting they're a
        judgment call you'd want to validate. Either is more interesting than
        stating the formula alone.
      </Note>

      <h2>Making it run</h2>
      <p>{`The first version tried to do the geospatial join in Pipeline Builder and died on out-of-memory errors, because scoring every facility against every incident is a global cross join. I moved it into a Foundry code repository as a Python transform and rewrote the distance math as native Spark haversine functions instead of Python UDFs. The link tables came out to 16.2 million incident links, 3.8 million hospital links, and 2.76 million water plant links across 214,771 targets.`}</p>

      <h2>The ontology</h2>
      <p>{`Facilities and incidents are modeled as linked objects rather than rows: three interfaces, six object types, and three link types. Power plants, energy facilities, and substations are attack targets. Hospitals and water plants are cascade dependents. The Workshop map colors targets by risk score, and clicking one traverses the links to surface the dependents near it.`}</p>

      <h2>What I&apos;d do differently</h2>
      <Note>
        Short. The OOM detour is one honest answer: you built the pipeline
        before thinking about the join size.
      </Note>
    </>
  );
}
