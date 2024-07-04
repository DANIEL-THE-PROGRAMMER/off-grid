import { OtherBlog } from "../components/sections/blog/otherblog";
import { PopularBlog } from "../components/sections/blog/popularblog";
import { RecentBlog } from "../components/sections/blog/recentblog";
import { PerformanceCheck } from "../components/sections/performancecheck";
import BlogHeader from "../components/views/blogheader";
import { Loader } from "../components/views/loader";

export default function Blog() {
  return (
    <>
      <Loader />
      <div className="relative z-[888]">
        <BlogHeader />

        <RecentBlog />
        <PopularBlog />
        <OtherBlog />
        <PerformanceCheck />
      </div>
    </>
  );
}
