import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home.js";
import Course from "./Pages/Course.js";
import Navbar from "./Components/Navbar.js";
// import Network from "./Pages/Network.js";
// import Linex from "./Pages/Linex.js";
import { useState } from "react";
import Home from "./Pages/Home.js";

const Links = [
  {
    link: "/web",
    title: "Web Design",
    age: "السن اقل من 12 سنة",
    description: " تصميم مواقع الانترنت ",
    container: "هيدرس فيها HTML  و CSS  ",
    Paragraph: "ولازم يعمل مشروع التخرج عشان يتخرج من الاكاديمية",
    question: "ايه هو مشروع االتخرج ؟ علي حسب المدرب او المهندس ما يطلب",
    price: "1200 جنية",
  },
  {
    link: "/web2",
    title: "Web Design 2",
    age: "السن من 12 الي 16 سنة",
    description: " تصميم مواقع الانترنت ",
    container: "هيدرس فيها HTML  و CSS  ",
    Paragraph:
      "و لازم يعمل مشروع التخرج عشان يتخرج من الاكاديمية وهياخد شهادة التخرج ",
    question: "ايه هو مشروع االتخرج ؟ علي حسب المدرب او المهندس ما يطلب",
    price: "1800 جنية",
  },
  {
    link: "/web-developer",
    title: "Web Developer",
    age: "السن من 16 الي 20 سنة",
    description: " تصميم مواقع الانترنت ",
    container: "دبلومة تطوير مواقع الانترنت Web Developer   ",
    Paragraph:
      "مدة الدبلومة بالكامل دبلومة 1 + دبلومة 2 + دبلومة المحترفين = 100 ساعة",
    question: "ايه هو مشروع االتخرج ؟ علي حسب المدرب او المهندس ما يطلب",
    price: "سعر الدبلومة (1 + 2 + المحترفين) = 4000 جنية ",
  },
  {
    link: "/network1",
    title: "Network 1",
    age: "من سن 16 الي 40 سنة",
    Paragraph:
      "ونأهل الطالب للامتحان الدولي عشان ياخد الشهادة الدولية من شركة سيسكو ودي اكبر شركة شبكات في العالم ",
    description:
      "الدبلومة دي مطلوبة في أي وظيفة مهندس   IT   في أي شركة في مصر ",
    container:
      "2-	يقدر يدرس CCNP  و دي شغل المحترفين و اقوي شهادة في مجال الشبكات في مصر  ",
    question: "ايه هو مشروع االتخرج ؟ علي حسب المدرب او المهندس ما يطلب",
    price: "سعر الدبلومة = 1600 جنية ",
  },
  {
    link: "/network2",
    title: "Network 2",
    age: "من سن 16 – 40 سنة",
    Paragraph: "وهيدرس فيها CCNA   بالإضافة ل CCNP ",
    description:
      "	يقدر يدرس CCNP  و دي شغل المحترفين و اقوي شهادة في مجال الشبكات في مصر ا  ",
    container:
      "2-	يقدر يدرس CCNP  و دي شغل المحترفين و اقوي شهادة في مجال الشبكات في مصر  ",
    question: "مدة الدبلومة = 60 ساعة ",
    price: "سعر الدبلومة = 1600 جنية ",
  },
  {
    link: "/network3",
    title: "Network 3",
    age: "من سن 16 – 40 سنة",
    Paragraph: "3-	يقدر يدرس MCSE 2022 Azure Cloud  ",
    description:
      "و دي اقوي شهادة مطلوبة حاليا ومقدمة من شركة ميكروسوفت الامريكية",
    container:
      "2-	يقدر يدرس CCNP  و دي شغل المحترفين و اقوي شهادة في مجال الشبكات في مصر  ",
    question: "مدة الدبلومة = 66 ساعة ",
    price: "سعر الدبلومة = 2500 جنية ",
  },
  // { link: "*",  element:{<NoPage />} },
];

function App() {
  return (
    <div className="App">
      <Navbar Links={Links} />
      <main>
        <Routes>
          {Links.map((li, i) => (
            <Route
              key={i}
              path={li.link}
              element={<Home link={li} links={Links} />}
            />
          ))}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
