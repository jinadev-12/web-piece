import React from "react";
import user1 from "../assets/dummy1.png";
import user2 from "../assets/dummy2.png";
import user3 from "../assets/dummy3.png";
import user4 from "../assets/dummy4.png";

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
      className="text-white w-full h-screen overflow-hidden"
    >
      {/* Container */}
      <div className="max-w-[1350px] h-full mx-auto px-6 py-16 overflow-y-scroll [&::-webkit-scrollbar]:hidden scrollbar-hide">
        {/* Title */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-medium font-primary mb-3">
            Client <span className="text-[#019eff]">Reviews</span>
          </h2>
          <p className="text-gray-400 font-secondary tracking-wide text-[17px] max-w-2xl mx-auto md:mx-0">
            See what our customers say about their experience with our work and
            products.
          </p>
        </div>

        {/* Card Container */}
        <div
          className="grid gap-8 justify-center max-w-[1200px] items-stretch"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {reviews.map((r) => (
            <div
              key={r.id}
              className="
                relative p-[1px] rounded-2xl hover:border-[#b9b9b9] transition-all duration-300
              "
            >
              {/* Inner Card */}
              <div
                className="
                bg-[#25334677]
    rounded-2xl overflow-hidden flex flex-col justify-between
    p-6 min-h-[320px]
    border-[1px] border-[#ffffff2a]
    transition-all duration-300
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
                    <h4 className="font-semibold text-white text-lg">
                      {r.name}
                    </h4>
                    <p className="text-sm text-gray-400">{r.profession}</p>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-200 text-base leading-relaxed italic flex-1">
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
