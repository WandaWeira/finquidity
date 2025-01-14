import React from "react";

const AbstractImages = ({ position = "right", variant = "1" }) => {
  const getImageUrl = () => {
    switch (variant) {
      case "1":
        return "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&h=400&auto=format&fit=crop";
      case "2":
        return "https://images.unsplash.com/photo-1507908708918-778587c9e563?q=80&w=400&h=400&auto=format&fit=crop";
      case "3":
        return "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?q=80&w=400&h=400&auto=format&fit=crop";
      case "4":
        return "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=400&h=400&auto=format&fit=crop";
      case "5":
        return "https://images.unsplash.com/photo-1550537687-c91072c4792d?q=80&w=400&h=400&auto=format&fit=crop";
      default:
        return "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&h=400&auto=format&fit=crop";
    }
  };

  const positionClass = position === "right" ? "right-0" : "left-0";

  return (
    <div
      className={`absolute ${positionClass} top-0 w-[200px] md:w-[300px] lg:w-[400px] h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden hidden md:block`}
    >
      <img
        src={getImageUrl()}
        alt="Abstract Design Element"
        className="w-full h-full object-cover opacity-30"
      />
    </div>
  );
};

export default AbstractImages;
