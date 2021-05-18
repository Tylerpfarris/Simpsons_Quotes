export const fetchSimpsons = async () => {
   const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
   const simp = await res.json();

   return {
      quote: simp[0].quote,
      character: simp[0].character,
      image: simp[0].image,
      characterDirection: simp[0].characterDirection
   }
}