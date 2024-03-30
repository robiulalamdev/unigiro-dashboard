import React, { useMemo } from "react";

const UsersPage = () => {
  const fetchData = async () => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  useMemo(() => {
    fetchData();
  }, []);
  return (
    <div className="bg-white">
      <h1>Hello</h1>
    </div>
  );
};

export default UsersPage;
