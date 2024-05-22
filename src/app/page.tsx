import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import Banner from "@/components/shared/Banner";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    next: {
      revalidate: 30,
    },
  });
  const blogs = await res.json();
  // console.log(blogs);
  return (
    <>
      <Banner />
      <LatestBlogs blogs={blogs}></LatestBlogs>{" "}
    </>
  );
};

export default HomePage;
