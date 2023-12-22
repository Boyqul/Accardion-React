import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <div
            onClick={() => handleClick(index)}
            style={{
              cursor: "pointer",
              padding: "20px",
              border: "2px solid  green",
              marginBottom: "5px",
              backgroundColor: index === activeIndex ? "#eee" : "white",
              width: "800px",
              margin: "0px auto",
              fontFamily: "monospace",
              fontSize: "20px",
              borderRadius: "10px",
              marginTop: "20px",
            }}
          >
            {item.title}
          </div>
          {index === activeIndex && (
            <div
              style={{
                padding: "20px",
                border: "2px solid black",
                width: "800px",
                margin: "0px auto",
                fontFamily: "monospace",
                fontSize: "16px",
                borderRadius: "10px",
              }}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Example usage
const App = () => {
  const accordionItems = [
    {
      title: "Html and CSS",
      content:
        "HTML tili taxminan 1991—1992-yillarda Yevropa Yadroviy Tadqiqotlar Markazida ishlovchi britaniyalik mutaxassis Tim Berners-Lee tomonidan ishlab chiqilgan. Dastlab bu til mutaxassislar uchun hujjat tayyorlash vositasi sifatida yaratilgan. HTML tilining soddaligi (SGMLga nisbatan) va yuqori formatlash imkoniyatlarining mavjudligi uni foydalanuvchilar orasida tez tarqalishiga sabab boʻldi. Bundan tashqari unda hipermatnlardan foydalanish mumkin edi. Tilning rivojlanishi bilan unga qo'shimcha multimedia (tasvir, tovush, animatsiya va boshqalar) imkoniyatlari qo'shildi.",
    },
    {
      title: "Javascript",
      content:
        "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[11] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).",
    },
    {
      title: "React.js",
      content:
        "React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.[8][9] A key advantage of React is that it only rerenders those parts of the page that have changed, avoiding unnecessary rerendering of unchanged DOM elements.",
    },
  ];

  return (
    <div>
      <h1 className="title">Accordion React App</h1>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default App;
