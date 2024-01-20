import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import "./story.scss";

import story01 from "/img/story-1.png";
import story02 from "/img/story-2.png";
import story03 from "/img/story-3.png";
import story04 from "/img/story-4.png";
import leaf from "/img/leaf.png";

const Story = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ourStoryTitle = new SplitType("#our-story");

    let t3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".story-title h2",
        start: "-10% 80%",
        end: "+=400",
        scrub: true,
      },
    });

    t3.from(ourStoryTitle.chars, {
      opacity: 0,
      y: -10,
      x: 20,
      stagger: { amount: 0.4 },
    });

    gsap.utils.toArray(".story__single").forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },

        autoAlpha: 0,
        y: 25,
        duration: 0.75,
      });
    });

    gsap.utils.toArray(".story__leaf-a").forEach((leaf) => {
      gsap.from(leaf, {
        scrollTrigger: {
          trigger: ".story__wrapper",
          start: "top 70%",
          end: "200% 70%",
          scrub: true,
        },

        y: 150,
        x: -70,
      });
    });

    gsap.utils.toArray(".story__leaf-b").forEach((leaf) => {
      gsap.from(leaf, {
        scrollTrigger: {
          trigger: ".story__wrapper",
          start: "top 70%",
          end: "200% 70%",
          scrub: true,
        },

        y: 250,
        x: 40,
        rotate: "-55deg",
      });
    });
  });

  return (
    <>
      <div className="story-title">
        <h2 id="our-story">Our story</h2>
      </div>
      <div className="story">
        <div className="story__wrapper">
          <div className="story__single">
            <div className="image-w">
              <img src={story01} alt="story1" />
            </div>

            <p>
              In the heart of Des Moines, fate wove a beautiful tale that
              brought Marceline and Richard together
            </p>
            <img className="story__leaf-a story__leaf1" src={leaf} alt="leaf" />
          </div>

          <div className="story__single">
            <div className="image-w">
              <img src={story02} alt="story2" />
            </div>

            <p>
              Their story began at a quirky bookstore where Marceline
              accidentally picked up Richard's favorite childhood novel,
              sparking a conversation that neither of them expected. From that
              chance encounter, their connection deepened through shared
              passions for travel, discovering hidden cafes, and a mutual love
              for spontaneous road trips
            </p>
          </div>

          <div className="story__single">
            <div className="image-w">
              <img src={story03} alt="story3" />
            </div>

            <p>
              As the seasons changed, so did their relationship, growing into a
              love that was as effortless as their favorite Sunday mornings
              spent cooking breakfast together. With laughter echoing through
              their shared moments, Marceline and Richard found joy in the
              simple things.
            </p>
            <img className="story__leaf-a story__leaf4" src={leaf} alt="leaf" />
            <img className="story__leaf-b story__leaf2" src={leaf} alt="leaf" />
          </div>

          <div className="story__single">
            <div className="image-w">
              <img src={story04} alt="story4" />
            </div>

            <p>
              Now, on 24.08.2024, Marceline and Richard invite you to witness
              the next chapter of their journey at Salisbury House & Gardens.
              Join them as they say "I do" and embark on a lifetime of love,
              filled with more adventures, laughter, and the warmth of shared
              dreams.
            </p>
            <img className="story__leaf-b story__leaf3" src={leaf} alt="leaf" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
