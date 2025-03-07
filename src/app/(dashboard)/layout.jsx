import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <h2>All admin and user related dashboard</h2>
      <div>{children}</div>
    </div>
  );
}
