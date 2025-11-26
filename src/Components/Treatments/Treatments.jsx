import treatment1 from "../../assets/imgs/treatment1.webp";
import treatment2 from "../../assets/imgs/treatment2.webp";
import treatment3 from "../../assets/imgs/treatment3.webp";
import TreatmentCard from "./TreatmentCard";

export default function Treatments() {
  const treatmentCards = [
    {
      img: treatment1,
      imgAlt:"Dermal Filler",
      title: "Dermal Fillers: Enhance Your Features",
      description:
        "Understand how fillers work, areas of treatment, and, how to maintain natural-looking results.",
      link: "https://medium.com/@heartaestheticshobart/precision-chin-sculpting-achieve-a-balanced-jawline-with-dermal-fillers-in-hobart-7d277ce5c388"  
    },
    {
      img: treatment2,
      imgAlt:"Radiant Skin",
      title: "Skincare Tips for Radiant Skin",
      description:
        "Discover effective routines and products to keep your skin glowing and healthy every day.",
      link: "https://medium.com/readers-club/top-skin-care-tips-for-radiant-skin-the-ultimate-skincare-solution-bba351188bc1"  
    },
    {
      img: treatment3,
      imgAlt:"Botox treatment",
      title: "Botox Treatments: What to Know",
      description:
        "Learn how Botox smooths wrinkles, the process, and tips for long-lasting results.",
      link: "https://medium.com/@cosmoartsclinic/graceful-looks-how-to-get-ready-before-your-botox-treatment-30cc81dc3646"  
    },
  ];
  return (
    <>
      <section id="treatments" className="bg-[#F9FBEF] py-10 md:py-24 text-center">
        <div className="space-y-5 flex flex-col items-center justify-center">
          <h4 className="max-w-[490px]">
            Beauty Insights &<span className="italic"> Wellness Tips</span>
          </h4>
          <p className="text-2xl max-w-[600px]">
            Stay informed with expert tips, treatment insights, and beauty
            trends tailored for you.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 overflow-x-auto snap-x snap-mandatory px-5 scrollbar-hide py-14">
          {treatmentCards.map((card, index) => (
            <TreatmentCard
              key={index}
              img={card.img}
              imgAlt={card.imgAlt}
              cardTitle={card.title}
              description={card.description}
              link={card.link}
            />
          ))}
        </div>
      </section>
    </>
  );
}
