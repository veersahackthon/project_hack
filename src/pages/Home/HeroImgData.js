const Data = [
  {
    img: "data:image/jpeg;base64,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",
    title: "HealthCare",
    text: `Time and health are two precious assets that we don't recognize and appreciate until they have been depleted.`,
    stext: "Nisi lacus sed viverra tellus in hac.",
  },
  {
    img: "https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9ycyUyMGNvbnN1bHRhdGlvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Doctors Consultation",
    text: "Medicine Cure diseases,but only doctors can cure Patients.....",
    stext:
      "Eget aliquet nibh praesent tristique magna. Convallis convallis tellus id interdum velit laoreet.",
  },
  {
    img: "data:image/jpeg;base64,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",
    title: "Medicine",
    text: "Always laugh when you can, it is cheap medicine....",
    stext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  //   {
  //     img: "https://images.unsplash.com/photo-1620050538592-9db01a2b7dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  //     title: "In est ante in nibh mauris cursus mattis molestie",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     stext:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo odio aenean sed adipiscing",
  //   },
];

export default Data;