"use client";

import { useParams } from "next/navigation";

const DocumentIdPage = () => {
  const params = useParams();
  return <div>{params.documentId}</div>;
};

export default DocumentIdPage;
