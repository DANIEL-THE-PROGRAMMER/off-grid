import { OtherBlog } from "../components/sections/blog/otherblog";
import { PopularBlog } from "../components/sections/blog/popularblog";
import { RecentBlog } from "../components/sections/blog/recentblog";
import { PerformanceCheck } from "../components/sections/performancecheck";
import BlogHeader from "../components/views/blogheader";


export default function Blog(){
    return (
        <>
            <BlogHeader />
            <RecentBlog />
            <PopularBlog />
            <OtherBlog />
            <PerformanceCheck />
        </>
    )
}