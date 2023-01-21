import React from "react";
import Swal from "sweetalert2";

const SweetAlert = () => {
  const handleClick = () => {
    Swal.fire({
      position: "top",
      icon: "success",
      iconColor: "#F1F1F1",
      title: "정원 초과되었습니다",
      showConfirmButton: false,
      timer: 1200,
      width: "370px",
      toast: true,
    });
  };

  return (
    <>
      <button onClick={handleClick}>클릭</button>
    </>
  );
};

export default SweetAlert;
