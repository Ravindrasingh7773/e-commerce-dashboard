// import React, { useEffect, useState } from "react";
// import MainDashboardHeading from "../mainDashboardHeding";
// import SearchIcon from "../../icons/searchIcon";
// import EditIcon from "../../icons/edit";
// import RemoveIcon from "../../icons/remove";
// import { Link } from "react-router-dom";
// import ProductIcon from "../../icons/product";
// import couponData from "../../data/coupon.json";
// import styles from "./style.module.css";

// const Coupons = () => {
//   const [checkedAll, setCheckedAll] = useState(false);
//   const [selectedCoupons, setSelectedCoupons] = useState([]);
//   const [filter, setFilter] = useState("all"); // Filter state ('all', 'active', 'expired')
//   const [searchTerm, setSearchTerm] = useState(""); // Search state
//   const [filteredCoupons, setFilteredCoupons] = useState(couponData); // Filtered coupon list

//   // Filter by status (All, Active, Expired)
//   const handleFilterChange = (status) => {
//     setFilter(status);
//   };

//   // Search functionality
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   useEffect(() => {
//     // Apply search and filter logic
//     let filteredData = couponData;

//     // Apply status filter
//     if (filter === "active") {
//       filteredData = couponData.filter((coupon) => coupon.status === "active");
//     } else if (filter === "expired") {
//       filteredData = couponData.filter((coupon) => coupon.status === "expired");
//     }

//     // Apply search filter
//     if (searchTerm) {
//       filteredData = filteredData.filter((coupon) =>
//         coupon.couponType.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         coupon.couponCode.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     setFilteredCoupons(filteredData);
//   }, [filter, searchTerm]);

//   const handleMainCheckboxClick = () => {
//     const newCheckedAll = !checkedAll;
//     setCheckedAll(newCheckedAll);

//     if (newCheckedAll) {
//       // Select all filtered coupons
//       const allCouponIds = filteredCoupons.map((coupon) => coupon.id);
//       setSelectedCoupons(allCouponIds);
//     } else {
//       // Deselect all coupons
//       setSelectedCoupons([]);
//     }
//   };

//   const handleIndividualCheckboxClick = (couponId) => {
//     setSelectedCoupons((prevSelected) => {
//       if (prevSelected.includes(couponId)) {
//         // Deselect this coupon
//         return prevSelected.filter((id) => id !== couponId);
//       } else {
//         // Select this coupon
//         return [...prevSelected, couponId];
//       }
//     });
//   };

//   useEffect(() => {
//     const allChecked = filteredCoupons.every((coupon) =>
//       selectedCoupons.includes(coupon.id)
//     );
//     setCheckedAll(allChecked);
//   }, [selectedCoupons, filteredCoupons]);

//   return (
//     <div className={styles.coupons}>
//       <MainDashboardHeading
//         title={"Coupons"}
//         fillBtn={true}
//         fillTitle={"Create"}
//         icon={false}
//         fillPath={"/createCoupons"}
//       />
//       <div className={styles.c_name}>
//         <div className={styles.cn_wrapper}>
//           <div className={styles.cnw_All_customers}>
//             <button onClick={() => handleFilterChange("all")}>All Coupons</button>
//             <button onClick={() => handleFilterChange("active")}>Active Coupons</button>
//             <button onClick={() => handleFilterChange("expired")}>Expired Coupons</button>
//           </div>
//           <div className={styles.of_filter_search}>
//             <div className={styles.offs_filter}>
//               <div className={styles.offsf_search}>
//                 <label htmlFor={"text"}>
//                   <SearchIcon />
//                 </label>
//                 <input
//                   type="text"
//                   id="text"
//                   placeholder="Search by coupon name or code..."
//                   value={searchTerm}
//                   onChange={handleSearchChange}
//                 />
//               </div>
//             </div>
//             <div className={styles.offs_remove}>
//               <p>
//                 <span>
//                   <EditIcon />
//                 </span>
//                 <span>
//                   <RemoveIcon />
//                 </span>
//               </p>
//             </div>
//           </div>
//           <div className={styles.order_details}>
//             <div className={styles.order_details1}>
//               <table>
//                 <thead>
//                   <tr>
//                     <th className={styles.od_head_order}>
//                       <input
//                         type="checkbox"
//                         className={styles.od_check}
//                         checked={checkedAll}
//                         onChange={handleMainCheckboxClick}
//                       />
//                       Coupon Name
//                     </th>
//                     <th>Usage</th>
//                     <th>Status</th>
//                     <th>Date</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredCoupons.length > 0 ? (
//                     filteredCoupons.map((item) => (
//                       <tr key={item.id}>
//                         <td className={styles.od_tr_paid3}>
//                           <div className={styles.otp_img}>
//                             <input
//                               type="checkbox"
//                               checked={selectedCoupons.includes(item.id)}
//                               onChange={() => handleIndividualCheckboxClick(item.id)}
//                             />
//                             <span>
//                               <ProductIcon />
//                             </span>
//                             <h5>
//                               {item.couponType}
//                               <p>{item.couponCode}</p>
//                             </h5>
//                           </div>
//                         </td>
//                         <td>
//                           {item.usageLimits.amountOfUses === null
//                             ? "0"
//                             : item.usageLimits.amountOfUses}{" "}
//                           times
//                         </td>
//                         <td
//                           className={
//                             item.status === "active"
//                               ? styles.odtrp_active
//                               : styles.odtrp_expired
//                           }
//                         >
//                           <span>{item.status}</span>
//                         </td>
//                         <td className={styles.od_tr_paid1}>
//                           {item.duration.startDate} - {item.duration.endDate}
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="4" className={styles.no_results}>
//                         No coupons found.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           <div className={styles.od_pagination}>
//           {/* <button
// 						onClick={handlePreviousPage}
// 						className={currentPage > 1 ? styles.active : ""}
// 					>
// 						&#8592;
// 					</button>
// 					{Array.from({ length: totalPages }, (_, index) => (
// 						<button
// 							key={index}
// 							onClick={() => paginate(index + 1)}
// 							className={currentPage === index + 1 ? styles.active : ""}
// 						>
// 							{index + 1}
// 						</button>
// 					))}
// 					<button
// 						onClick={handleNextPage}
// 						className={currentPage < totalPages ? styles.active : ""}
// 					>
// 						&#8594;
// 					</button> */}
// 				</div>
//             <div className={styles.odp_result}>
//               <span>{filteredCoupons.length} Results</span>
//             </div>
//           </div>
//         </div>
//       </div> 
//   );
// };

// export default Coupons;
import React, { useEffect, useState } from "react";
import MainDashboardHeading from "../mainDashboardHeding";
import SearchIcon from "../../icons/searchIcon";
import EditIcon from "../../icons/edit";
import RemoveIcon from "../../icons/remove";
import { Link } from "react-router-dom";
import ProductIcon from "../../icons/product";
import couponData from "../../data/coupon.json";
import styles from "./style.module.css";
import CarIcon from "../../icons/car";

const formatDate = (date) => {
	const d = new Date(date);
	const month = String(d.getMonth() + 1).padStart(2, "0");
	const day = String(d.getDate()).padStart(2, "0");
	const year = d.getFullYear();
	return `${month}-${day}-${year}`; // Use backticks here for template literal
};

const Coupons = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState("");
	const [statusFilter, setStatusFilter] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [filteredCoupons, setFilteredCoupons] = useState(couponData);
  const [checkedAll,setCheckedAll]= useState(false);

	const ordersPerPage = 10;
  const [selectedCoupons, setSelectedCoupons] = useState(
    couponData.map(() => false)
  );
  const handleMainCheckboxClick = () => {
    const newCheckedAll = !checkedAll;
    setCheckedAll(newCheckedAll);
 
    setSelectedCoupons(couponData.map(() => newCheckedAll));
  };
  const handleIndividualCheckboxClick = (index) => {
    const updatedSelectedCoupons = [...selectedCoupons];
    updatedSelectedCoupons[index] = !updatedSelectedCoupons[index];
    setSelectedCoupons(updatedSelectedCoupons);
 
    const allChecked = updatedSelectedCoupons.every(Boolean);
    setCheckedAll(allChecked);
  };
  
	useEffect(() => {
		let filteredData = couponData;

		if (statusFilter) {
			filteredData = filteredData.filter(
				(coupon) => coupon.status.toLowerCase() === statusFilter.toLowerCase()
			);
		}

		if (searchTerm) {
			filteredData = filteredData.filter((coupon) =>
				coupon.code.toLowerCase().includes(searchTerm.toLowerCase())
			);
		}

		if (startDate) {
			filteredData = filteredData.filter(
				(coupon) =>
					new Date(formatDate(coupon.duration.start_date)) >=
					new Date(startDate)
			);
		}

		if (endDate) {
			filteredData = filteredData.filter(
				(coupon) =>
					new Date(formatDate(coupon.duration.end_date)) <= new Date(endDate)
			);
		}

		setFilteredCoupons(filteredData);
		setCurrentPage(1);
    
    const selectedItems = couponData.filter((item, index) => selectedCoupons[index]);
    console.log("Selected items:", selectedItems);
	}, [statusFilter, searchTerm, startDate, endDate,selectedCoupons]); 

	const indexOfLastOrder = currentPage * ordersPerPage;
	const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
	const currentOrders = filteredCoupons.slice(
		indexOfFirstOrder,
		indexOfLastOrder
	);
  
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	const totalPages = Math.ceil(filteredCoupons.length / ordersPerPage);
	const handlePreviousPage = () => currentPage > 1 && paginate(currentPage - 1);
	const handleNextPage = () =>
		currentPage < totalPages && paginate(currentPage + 1);
  return (
    <div className={styles.coupons}>
      <MainDashboardHeading
        title={"Coupons"}
        fillBtn={true} 
        fillTitle={"Create"}
        icon={false}
        fillPath={"/createCoupons"}
      />
      <div className={styles.c_name}>
        <div className={styles.cn_wrapper}>
          <div className={styles.cnw_All_customers}>
            <button>All Coupons</button>
            <button>Active Coupons</button>
            <button>Expired Coupons</button>
          </div>
          <div className={styles.of_filter_search}>
            <div className={styles.offs_filter}>
              <div className={styles.offsf_filter}>
              <select
							value={statusFilter}
							onChange={(e) => setStatusFilter(e.target.value)}
						>
							<option value={""}>Filter by Status</option>
							<option value={"Active"}>Active</option>
							<option value={"Expired"}>Expired</option>
						</select>
              </div>
              <div className={styles.offsf_search}>
                <label for={"text"}>
                  <SearchIcon />
                </label>
                <input type="text" id="text" placeholder="Search..." />
              </div>
            </div>
            <div className={styles.offs_remove}>
              <p>
                <span>
                  <EditIcon />
                </span>
                <span>
                  <RemoveIcon />
                </span>
              </p>
            </div>
          </div>
          <div className={styles.order_details}>
            <div className={styles.order_details1}>
              <table>
                <tr>
                  <th className={styles.od_head_order}>
                    <input type="checkbox" className={styles.od_check} 
        checked={checkedAll}
        onChange={handleMainCheckboxClick}    />
                    Coupon Name
                  </th>
                  <th>Usage</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
                {currentOrders.map((item, index) => (
                  <tr key={index}>
                    <td className={styles.od_tr_paid3}>
                      <div className={styles.otp_img}>
                        <input type="checkbox" checked={selectedCoupons[index]} 
                  onChange={() => handleIndividualCheckboxClick(index)}  />

                       {item.couponName === "Free Shipping" ?
                       <span className={styles.free_shipping_icon}>
                          <CarIcon />
                        </span> : 
                        <span>
                          <ProductIcon />
                        </span>}
                        <h5>
                          {item.couponType}
                          <p>{item.couponCode}</p>
                        </h5>
                      </div>
                    </td>
                    <td>{item.usageLimits.amountOfUses === null ? '0' : 
                      item.usageLimits.amountOfUses} times</td>
                    { item.status === "active" 
                    ?<td className={styles.odtrp_active}>
                      <span>{item.status}</span>
                    </td>:<td className={styles.odtrp_expired}>
                      <span>{item.status}</span>
                    </td>}
                    <td className={styles.od_tr_paid1}>
                      {item.duration.startDate} - {item.duration.endDate}
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
          <div className={styles.od_pagination}>
          <div className={styles.pagination}>
					<button
						onClick={handlePreviousPage}
						className={currentPage > 1 ? styles.active : ""}
					>
						&#8592;
					</button>
					{Array.from({ length: totalPages }, (_, index) => (
						<button
							key={index}
							onClick={() => paginate(index + 1)}
							className={currentPage === index + 1 ? styles.active : ""}
						>
							{index + 1}
						</button>
					))}
					<button
						onClick={handleNextPage}
						className={currentPage < totalPages ? styles.active : ""}
					>
						&#8594;
					</button>
				</div>
            <div className={styles.odp_result}>
              <span>274 Results</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Coupons;