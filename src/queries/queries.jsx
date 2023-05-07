export const queries = [
  {
    id: "Greet",
    message: "Hello, Welcome to Sharma's Clinic",
    trigger: "Done",
  },
  {
    id: "Done",
    message: "Please enter your name and phone number!",
    trigger: "waiting1",
  },
  {
    id: "waiting1",
    user: true,
    trigger: "Name",
  },
  {
    id: "Name",
    message: "Hi {previousValue}, Please tell us your issue",
    trigger: "issues",
  },
  {
    id: "issues",
    user: true,
    trigger: "issue",
  },
  {
    id: "issue",
    message:
      "Thanks for letting us know your issue, Our team will contact you ASAP from this number 9682000000",
    end: true,
  },
];

/*
export const queries = [
  {
    id: "Greet",
    message: "Hello, Welcome to our shop",
    trigger: "Done",
  },
  {
    id: "Done",
    message: "Please enter your name!",
    trigger: "waiting1",
  },
  {
    id: "waiting1",
    user: true,
    trigger: "Name",
  },
  {
    id: "Name",
    message: "Hi {previousValue}, Please select your issue",
    trigger: "issues",
  },
  {
    id: "issues",
    options: [
      {
        value: "React",
        label: "React",
        trigger: "React",
      },
      { value: "Angular", label: "Angular", trigger: "Angular" },
    ],
  },
  {
    id: "React",
    message:
      "Thanks for letting your React issue, Our team will resolve your issue ASAP",
    end: true,
  },
  {
    id: "Angular",
    message:
      "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",
    end: true,
  },
];

*/
