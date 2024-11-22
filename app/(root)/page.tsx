import SearchForm from "../components/SearchForm";
import StartupCard from "../components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 85,
      author: { _id: 1,name : 'Mousgame' },
      description: "best company in earth",
      image:
        "https://t4.ftcdn.net/jpg/05/67/46/61/360_F_567466191_M8cVuf9UM6tYmTdyeiGsieoGPnbKha3R.jpg",
      category: "Robts",
      title: "We robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          {" "}
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          {" "}
          submit ideas, vote on pitches, and Get noticed in virtual
        </p>
        <SearchForm query={query} />
      </section>{" "}
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post, index) => <StartupCard key={post?.author._id} post={post}/>)
          ) : (
            <p className="no-result"> No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
