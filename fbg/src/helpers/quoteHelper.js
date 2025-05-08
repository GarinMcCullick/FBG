export const rustQuotes = [
  {
    quote: "Built a bunker, forgot the door. 10/10 would trap myself again.",
    gamertag: "CluelessCraig",
  },
  {
    quote: "Raided a twig base. Spent 6 C4. Found one rock.",
    gamertag: "BoomerBill",
  },
  {
    quote: "Trust is like a garage door — it only takes one bean can to break.",
    gamertag: "SketchySteve",
  },
  {
    quote: "Died to a boar. Again.",
    gamertag: "NatureIsOP",
  },
  {
    quote: "Got roof camped by my own teammate. Classic.",
    gamertag: "FriendlyFire",
  },
  {
    quote: "If it moves, shoot it. If it doesn’t, shoot it anyway.",
    gamertag: "TriggerTim",
  },
  {
    quote: "Rust taught me betrayal hurts more than bullets.",
    gamertag: "SadSniper",
  },
  {
    quote: "Mic off. Door open. Loot gone.",
    gamertag: "MutedMike",
  },
  {
    quote: "Accidentally recycled my only gun. Now I punch bears.",
    gamertag: "BareKnuckleBen",
  },
  {
    quote: "Why farm sulfur when you can just make enemies?",
    gamertag: "DiplomatDan",
  },
  {
    quote: "My KD is fine. I just count chickens now.",
    gamertag: "FarmBoy",
  },
  {
    quote: "Lost everything. Still blaming lag.",
    gamertag: "ExcuseAndy",
  },
  {
    quote: "They had a compound. We had a dream.",
    gamertag: "HopeDealer",
  },
  {
    quote: "Loot first. Apologize never.",
    gamertag: "ToxicTommy",
  },
  {
    quote: "I don't have trust issues. I have Rust issues.",
    gamertag: "DeepWoundDave",
  },
  {
    quote: "Spawn. Die. Repeat. Rust, baby.",
    gamertag: "RespawnRandy",
  },
  {
    quote: "I don't need enemies. I have teammates.",
    gamertag: "BackstabBarry",
  },
  {
    quote: "Home is where the sleeping bag was... until they found it.",
    gamertag: "SadSack",
  },
  {
    quote: "I joined for the PvP. I stayed for the trauma.",
    gamertag: "RustVeteran",
  },
  {
    quote: "This isn’t a game. This is post-apocalyptic therapy.",
    gamertag: "DrFeelLoot",
  },
];

export const getQuoteOfTheDay = () => {
  const today = new Date();
  const index = today.getDate() % rustQuotes.length; // Rotate through quotes daily
  return rustQuotes[index];
};
