const ACCESS_KEY = "RmTfNbVA1mOO17X30wNP9fR5AsHCQWqniKvlRvU2Erk";

export const fetchPlaces = async (query = "travel") => {
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`
    );

    const data = await res.json();

    console.log("API DATA:", data); // 👈 check this

    return data.results.map((item) => ({
      id: item.id,
      name: item.alt_description || "Travel",
      image: item.urls?.regular,
    }));
  } catch (err) {
    console.log("ERROR:", err);
    return [];
  }
};