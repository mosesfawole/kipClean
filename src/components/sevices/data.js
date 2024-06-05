const services = [
  {
    id: "1",
    name: "Location",
    heading: "Select a location",
    paragraph:
      "Please select a location you want  the service to be performed at",
    banner: "/servicebanner.png",
    products: [
      { name: "Lagos", img: "/lagos.png" },
      { name: "Ibadan", img: "/ibadan.png" },
      { name: "Abuja", img: "/abuja.png" },
      { name: "Ilorin", img: "/ilorin.png" },
    ],
  },
  {
    id: "2",
    name: "Service",
    heading: "Select a service",
    paragraph: "Please select the kind of service you want",
    banner: "/servicebanner.png",
    products: [
      { name: "Deep cleaning", img: "/deepcleaning.png" },
      { name: "Regular cleaning", img: "/regularcleaning.png" },
      { name: "Office cleaning", img: "/officecleaning.png" },
      { name: "Plumbing installation", img: "/plumbingservice.png" },
      { name: "Plumbing installation", img: "/waterheater.png" },
    ],
  },
  {
    id: "3",
    mame: "Customer information",
    heading: "Enter information",
    paragraph: "Please provide your contact details",
  },
];

export default services;
