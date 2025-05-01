import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import StoryCard from "./StoryCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
const StorySection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const containerRef = useRef(null);
  const storyPosts = [
    {
      _id: 1,
      mediaUrl:
        "https://plus.unsplash.com/premium_photo-1681302427948-2fd0eca629b1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mediaType: "image",
      user: {
        username: "user1",
        profilePicture:
          "https://plus.unsplash.com/premium_photo-1681302427948-2fd0eca629b1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
    {
      _id: 2,
      mediaUrl:
        "https://images.unsplash.com/photo-1745404996796-a8d829f46dcc?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mediaType: "image",
      user: {
        username: "user1",
        profilePicture:
          "https://plus.unsplash.com/premium_photo-1681302427948-2fd0eca629b1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
  ];
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const updateMaxScroll = () => {
        setMaxScroll(container.scrollWidth - container.offsetWidth);
        setScrollPosition(container.scrollLeft);
      };
      updateMaxScroll();
      window.addEventListener("resize", updateMaxScroll);
      return () => {
        window.removeEventListener("resize", updateMaxScroll);
      };
    }
  }, [storyPosts]);

  const scroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      setScrollPosition(container.scrollLeft);
    }
  };
  return (
    <div className="relative">
      <div
        className="flex space-x-2 overflow-x-hidden py-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        ref={containerRef}
        onScroll={handleScroll}
      >
        <motion.div
          className=" flex space-x-2"
          drag="x"
          dragConstraints={{
            right: 0,
            left:
              -((storyPosts.length + 1) * 200) +
              containerRef.current?.offsetWidth,
          }}
        >
          <StoryCard isAddStory={true} />
          {storyPosts?.map((story) => (
            <StoryCard story={story} key={story._id} />
          ))}
        </motion.div>

        {scrollPosition < maxScroll && (
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 roudned-full shadow-lg transition-opacity duration-300 ease-in-out"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
        {scrollPosition > 0 && (
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 roudned-full shadow-lg transition-opacity duration-300 ease-in-out"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default StorySection;
