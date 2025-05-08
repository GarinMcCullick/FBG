import React from "react";

const FAQs = () => {
  const generalFaqs = [
    {
      question: "What is our Rust clan about?",
      answer:
        "Our Rust clan is a group of dedicated players who work together to dominate the game through teamwork and strategy.",
    },
    {
      question: "How can I join the clan?",
      answer:
        "You can join by applying on our website https://FBGrust.com and participating in our recruitment process.",
    },
    {
      question: "What are the rules of the clan?",
      answer:
        "Respect all members, no cheating, and always prioritize teamwork. Full rules are available on our Discord.",
    },
    {
      question: "What time do we usually play?",
      answer:
        "We are active most evenings and weekends. Most of our members are North American timezones, however we have members all around the globe. Check the Discord for specific schedules and events.",
    },
    {
      question: "Do I need a mic to join?",
      answer:
        "Yes, communication is key in Rust, and a mic is required for effective teamwork.",
    },
    {
      question: "Is there an age requirement?",
      answer: "Yes, we require members to be at least 21 years old to join.",
    },
    {
      question: "What happens after I apply?",
      answer:
        "Once your application is submitted, a recruiter will review it. If accepted, a Discord bot will send you a server invite, interview scheduling options, and your recruiter's name. If rejected, you'll receive a rejection letter and an appeal form should you wish to reapply.",
    },
  ];

  const gameFaqs = [
    {
      question: "What servers do we play on?",
      answer:
        "We primarily play on official Rust servers but occasionally join community servers for events and practice.",
    },
    {
      question: "What is our play style?",
      answer:
        "Strategic and team-oriented. We have dedicated farming, PvP, raiding, and monument teams led by officers. Teamwork is key—everyone steps in when needed to ensure the clan thrives.",
    },
    {
      question: "Do we participate in events?",
      answer: "Yes, including wipe days, clan wars, and community tournaments.",
    },
    {
      question: "How do we handle resource gathering?",
      answer:
        "Specialized teams led by highly skilled officers handle each role, and all members contribute. When one team needs support, others assist to keep the clan on track.",
    },
  ];

  return (
    <div className="faqs-container">
      <h1 className="faqs-title">FAQs - General</h1>
      <div className="faqs-list">
        {generalFaqs.map((faq, index) => (
          <div key={index} className="faqs-item">
            <h3 className="faqs-question">{faq.question}</h3>
            <p className="faqs-answer">{faq.answer}</p>
          </div>
        ))}
      </div>

      <h1 className="faqs-title">FAQs - Game</h1>
      <div className="faqs-list">
        {gameFaqs.map((faq, index) => (
          <div key={index} className="faqs-item">
            <h3 className="faqs-question">{faq.question}</h3>
            <p className="faqs-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
