// import { useState } from "react";

// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const tabs = [
//     { id: 0, title: "Tab 1" },
//     { id: 1, title: "Tab 2" },
//     { id: 2, title: "Tab 3" },
//   ];

//   const handleTabChange = (id) => {
//     setActiveTab(id);
//   };

//   return (
//     <>
//       <nav className="flex justify-center space-x-4">
//         {tabs.map((tab) => (
//           <li key={tab.id} className="list-none">
//             <button
//               onClick={() => handleTabChange(tab.id)}
//               className={`px-4 py-2 ${
//                 activeTab === tab.id
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200 text-gray-800"
//               } rounded-md`}
//             >
//               {tab.title}
//             </button>
//           </li>
//         ))}
//       </nav>
//       <div className="p-8 rounded-xl">
//         <div className="bg-orange">
//           {activeTab === 0 && <div>Content for Tab 1</div>}
//           {activeTab === 1 && <div>Content for Tab 2</div>}
//           {activeTab === 2 && <div>Content for Tab 3</div>}
//         </div>
//       </div>
//     </>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <h1 className="text-center text-4xl font-bold uppercase">
//         Book a service
//       </h1>
//       <div className="p-8 rounded-xl">
//         <Tabs />
//       </div>
//     </div>
//   );
// };

// export default App;
