import { Figure, FigureRow, Note } from "../Figure";
import Image from "next/image";

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
      <p>Senior year of high school I was on the men's cheer team and before each practice I would receive a video of a dance that I'd have to learn. I would prop my phone up, and start trying to copy the dance, but found myself spending more time going to my phone and rewinding the video when I mess up a pose, than actually dancing. So I started building dancify to automatically rewind the video a couple seconds once it detected a mistake in my dancing in realtime. I added two modes practice and real, inspired by the mobile game geometry dash. When you mess up in practice mode it goes back a few seconds to your last checkpoint, whereas in real mode, the whole video is restarted. I then later added a "Just Dance" mode inspired by one of my favorite childhood games, which turns any video of a dance into a Just Dance level that you can play from your phone.  
      <Image
                src="/images/fomz.png"
                alt="Outside of the dining hall giving out donut holes"
                width={250}
                height={250}
      />
        
        
         </p>

      <h2>Accounting for human error + realtime hurdles</h2>
      <p>
        In my initial approach, in realtime I would compare each pose in the reference video with the pose from live camera feed frame by frame. This caused latency issues and also made it unreasonably difficult to get the dance right. These dances aren't like synchronised swimming or anything I don't want to be penalized for not hitting the right pose at the exact time. My next design changed two main things. <strong>First</strong> instead of realtime pose detection for the reference video, I did pre-processing on it as soon as the video was uploaded and before the user could start dancing. <strong>Second</strong> I implemented a sliding window approach for pose comparison, where for the reference pose at 2:00s for example, in order to pass that in the live camera feed all the poses from 2:00s-2.99s are compared to that one reference pose and if any of those poses are considered a match then that reference pose is considered complete. 
      </p>

      {/* Example of the side-by-side layout. Delete if unused. */}
      <FigureRow>
        <Figure src="/images/dancify-ref.png" alt="Reference clip skeleton" />
        <Figure src="/images/dancify-user.png" alt="User clip skeleton" />
      </FigureRow>
    </>
  );
}
