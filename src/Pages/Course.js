import "../Components/Styles/box.css";
import { useState } from "react";

export default function Course({ children }) {
  return (
    <>
      <main className="main">{children}</main>
    </>
  );
}

export function Table({ link }) {
  return (
    <table
      border="10px"
      className=" d-flex flex-col justify-start align-end p-3 text-blue-900"
    >
      <thead className="bg-blue-250">
        <tr>
          <h1 className="text-4xl font-bold underline">{link.title}</h1>
        </tr>
      </thead>
      <tbody className="text-2xl d-flex flex-col ">
        <tr>
          <td className="d-flex p-2 items-center">
            <h3 className="text-3xl font-bold"> السن</h3>
            <h3> : {link.age}</h3>
          </td>
        </tr>
        <tr>
          <td className="d-flex p-2 items-center">
            <h3 className="text-3xl font-bold">تفاصيل</h3>
            <h3> : {link.Paragraph}</h3>
          </td>
        </tr>
        <tr>
          <td className="d-flex p-2 items-center">
            {" "}
            <h3 className="text-3xl font-bold">قادر على</h3>
            <h3> : {link.description}</h3>
          </td>
        </tr>
        <tr>
          <td className="d-flex p-2 items-center">
            {" "}
            <h3 className="text-3xl font-bold"></h3>
            <h3>{link.container}</h3>
          </td>
        </tr>
        <tr>
          <td className="d-flex p-2 items-center">
            {" "}
            <h3 className="text-3xl font-bold"></h3>
            <h3>  {link.description}</h3>
          </td>
        </tr>
        <tr>
          <td className="d-flex p-2 items-center">
            {" "}
            <h3 className="text-3xl font-bold"></h3>
            <h3>  {link.question}</h3>
          </td>
        </tr>
        <tr>
          <td className="d-flex p-2 items-center">
            {" "}
            <h3 className="text-3xl font-bold">السعر</h3>
            <h3> : {link.price}</h3>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

// link: "/web",
// title: "Web Design",
// age: "السن اقل من 12 سنة",
// description: " تصميم مواقع الانترنت ",
// container: "هيدرس فيها HTML  و CSS  ",
// Paragraph: "ولازم يعمل مشروع التخرج عشان يتخرج من الاكاديمية",
// question: "ايه هو مشروع االتخرج ؟ علي حسب المدرب او المهندس ما يطلب",
// price: "1200 جنية",
