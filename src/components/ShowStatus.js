import React, { useState, useEffect } from "react";
import cowi from "../Api/cowi";

const ShowStatus = () => {
  const [districtId, setDistrictId] = useState(140);
  const today = new Date();
  const dd = today.getDate() - 1;

  const mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  const finalDate = dd + "-" + mm + "-" + yyyy;
  useEffect(() => {
    const getStatus = async () => {
      try {
        const response = await cowi.get("", {
          params: {
            district_id: districtId,
            date: finalDate,
          },
        });

        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };
    getStatus();
  }, [districtId, finalDate]);

  return (
    <div>
      <select
        className="ui dropdown"
        onChange={(e) => setDistrictId(e.target.value)}
      >
        <option value="">Select</option>
        <option value="140">New Delhi</option>
        <option value="144">South Delhi</option>
      </select>
    </div>
  );
};
export default ShowStatus;
