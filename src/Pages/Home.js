import React from "react";
import Course, { Table } from "./Course";
import { useLocation } from "react-router-dom";
import FilterComponent from "./Filter";

export default function Home({ link, links }) {
  return (
    <>
      <FilterComponent links={links} />
      <Course>
        <Table link={link}  />
      </Course>
    </>
  );
}
