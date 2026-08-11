import { Note } from "../Figure";

export const metadata = { title: "Continual learning for robotics" };

export default function ContinualLearning() {
  return (
    <>
      <h1>Continual learning for robotics</h1>
      <p>
        Uncertainty-driven specialist routing. Being tested on Split-CIFAR-100
        before it goes near a robot.
      </p>

      <h2>Why I started it</h2>
      <Note>
        What made catastrophic forgetting feel like the interesting problem
        rather than one of many.
      </Note>

      <h2>The architecture</h2>
      <Note>
        Orchestrator watches uncertainty, detects a novel domain, trains a
        specialist from a MAML prior, freezes the old ones, routes by cosine
        similarity. Explain why each piece is there. A reader should be able to
        argue with the design. A diagram would carry this section.
      </Note>

      <h2>Why CIFAR before a robot</h2>
      <Note>
        Scoping a research idea down to something falsifiable is a skill.
        Saying it out loud shows you have it.
      </Note>

      <h2>What I don&apos;t know yet</h2>
      <Note>Open questions. Makes the page more credible, not less.</Note>
    </>
  );
}
