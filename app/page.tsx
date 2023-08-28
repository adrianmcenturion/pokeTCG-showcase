import { Card, CustomFilter, Hero, Marquee, Searchbar, ShowMore } from "@/components";
import { types } from "@/constants";
import { HomeProps, RootCardData } from "@/types";
import { fetchCards } from "@/utils";

export default async function Home({ searchParams }: HomeProps) {
  const allCards: RootCardData = await fetchCards({
    pokemon: searchParams.pokemon || "",
    pageSize: searchParams.pageSize || 10,
    page: searchParams.page || 1,
    rarity: searchParams.rarity || "",
    types: searchParams.types || "",
  });

  const isDataEmpty =
    !Array.isArray(allCards.data) || allCards.data.length < 1 || !allCards.data;
  console.log(isDataEmpty);

  return (
    <main className="overflow-hidden">
      <Hero />
      <Marquee />
      <div className="mt-12 min-h-screen padding-x padding-y max-width" id="discover">
        <div className="flex flex-col justify-evenly gap-6 p-3">
          <h1 className="font-bold text-4xl">Cards Catalogue</h1>
          <p className="text-xl">Explore and get the cards that you want!</p>
        </div>
        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <Searchbar />
          <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomFilter title="types" options={types} />
          </div>
        </div>
        <div className="flex mt-9 lg:flex-row flex-wrap gap-3">
          {!isDataEmpty ? (
            <section>
              <div className="flex mt-9 lg:flex-row flex-wrap gap-3 justify-center">
                {allCards.data?.map((card) => (
                  <Card key={card.id} card={card} />
                ))}
              </div>
              <ShowMore pageNumber={(searchParams.pageSize || 10) / 10} isNext={(searchParams.pageSize || 10) > allCards.data.length} />
            </section>
          ) : (
            <section className="text-center">No cards found.</section>
          )}
        </div>
      </div>
    </main>
  );
}
