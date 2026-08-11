import { Figure, FigureRow, Note } from "../Figure";

export const metadata = { title: "Dancify" };

export default function Dancify() {
  return (
    <>
      <h1>Dancify</h1>
      <p>
        Pose estimation to compare your movement against a reference clip. Won
        $3,000 at Pitch Dingman.
      </p>

      <h2>Why</h2>
      {/* This sentence stops mid-thought in your draft. Left exactly as written. */}
      <p>{`Senior year of high school I was on the men's cheer team and I would get `}</p>

      <h2>Comparing two bodies</h2>
      <Note>
        The interesting problem: two people are different sizes, filmed at
        different distances, slightly out of sync. How did you handle that.
      </Note>

      {/* Example of the side-by-side layout. Delete if unused. */}
      <FigureRow>
        <Figure src="/images/dancify-ref.png" alt="Reference clip skeleton" />
        <Figure src="/images/dancify-user.png" alt="User clip skeleton" />
      </FigureRow>

      <h2>What I&apos;d do differently</h2>
      <Note>Short.</Note>
    </>
  );
}
