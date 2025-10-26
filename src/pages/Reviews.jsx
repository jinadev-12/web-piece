import React from "react";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";

function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Mitchell",
      profession: "Interior Designer",
      review:
        "Absolutely loved the quality and craftsmanship! It perfectly complements my space.",
      img: user1 || "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "James Carter",
      profession: "Architect",
      review:
        "The products are timeless and elegant. Customer service was top-notch too!",
      img: user2 || "https://randomuser.me/api/portraits/men/36.jpg",
      rating: 4,
    },
    {
      id: 3,
      name: "Ava Thompson",
      profession: "Creative Director",
      review:
        "Beautiful design and attention to detail — exceeded my expectations completely!",
      img: user3 || "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
    },
    {
      id: 4,
      name: "Liam Brooks",
      profession: "Product Designer",
      review:
        "Every detail feels intentional. Definitely going to recommend this brand!",
      img: user4 || "https://randomuser.me/api/portraits/men/71.jpg",
      rating: 5,
    },
  ];

  return (
    <section
      id="reviews"
      className="text-text w-full h-screen overflow-hidden bg-sectionBg"
    >
      {/* Container */}
      <div className="max-w-[1350px] h-full mx-auto px-6 py-16 md:py-20 overflow-y-scroll [&::-webkit-scrollbar]:hidden scrollbar-hide">
        {/* Title */}
        <div className="mb-16 md:mb-20 text-center">
          <span className="py-2 px-4 text-sm rounded-full bg-boxBg/20 mb-4 md:mb-6 inline-block text-text">
            Our Works
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl max-w-[900px] mx-auto font-medium mb-3 text-text">
            See what our customers say about their experience with our work and
            products.
          </h2>
        </div>

        {/* Card Container */}
        <div
          className="grid gap-8 justify-center items-stretch"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          {reviews.map((r) => (
            <div
              key={r.id}
              className="
                relative p-[1px] rounded-2xl hover:border-text/50 transition-all duration-300
              "
            >
              {/* Inner Card */}
              <div
                className="
                  bg-boxBg/80
                  rounded-2xl overflow-hidden flex flex-col justify-between
                  p-6 min-h-[320px]
                  border-[1px] border-text/20
                  transition-all duration-300
shadow-[inset_0_2px_8px_rgba(80,74,185,0.4),inset_0_-4px_12px_rgba(80,74,185,0.6)]

                "
              >
                {/* Profile */}
                <div className="gap-4 mb-6">
                  <img
                    src={r.img}
                    onError={(e) =>
                      (e.target.src =
                        "https://randomuser.me/api/portraits/lego/1.jpg")
                    }
                    alt={r.name}
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <div>
                    <h4 className="font-semibold text-text text-lg">
                      {r.name}
                    </h4>
                    <p className="text-sm text-text/60">{r.profession}</p>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-text/70 text-base leading-relaxed italic flex-1">
                  “{r.review}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
