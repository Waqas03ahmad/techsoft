import { Button } from "@mui/material";
import { useState } from "react";

const Test = () => {
  const [data, setdata] = useState([
    {
      id: 1,
      name: "Html",
      discription:
        "Layout Design  Forms Design Tables Design  Html Media Html Graphics",
      icon: "../../../public/html.png",
      stars: 3,
    },
    {
      id: 2,
      name: "CSS",
      discription:
        "Css Styling, Responsive design and Media Queries, MUI and Bootstrap, Tools and Resourses,",
      icon: "../../../public/css.png",
      stars: 3,
    },
    {
      id: 3,
      name: "Jawascript",
      discription:
        "JawaScript Promeses, Jawascript Callbacks, Error handling, OOPs, Data structure and Algorithum",
      icon: "../../../public/jawascript.png",
      stars: 4,
    },
    {
      id: 4,
      name: "React",
      discription:
        "React Basics, Reconcialiation, Hooks, Customization, SOLID prcess",
      icon: "../../../public/react.png",
      stars: 3.5,
    },

    {
      id: 5,
      name: "Material UI",
      discription:
        "Responsiveness, Costomization, Styling, Interactive UI, Design-Driven",
      icon: "../../../public/MUI.png",
      stars: 4.5,
    },
    {
      id: 6,
      name: "Bootstrap",
      discription:
        "Responsiveness, Costomization, Styling, Interactive UI, Design-Driven",
      icon: "../../../public/bootstrap.png",
      stars: 3,
    },

    {
      id: 7,
      name: "NPM",
      discription:
        "Formik + Yup, reac-router-dom, react-redux-toolkit, MUI, apexChart ...",
      icon: "../../../public/NPM.png",
      stars: 3,
    },
    {
      id: 8,
      name: "Python",
      discription:
        "Syntax and Basics, consept of OOPs, Data Structure and algorithum, Error handling, Data Analysis",
      icon: "../../../public/python.png",
      stars: 4,
    },
  ]);
  const handlChange = (a) => {
    const updateditems = data.map((item) => {
      if (a == item.id) {
        return { ...item, name: "Changed" };
      }
      return item;
    });
    return setdata(updateditems);
  };

  return (
    <div>
      {data.map((e) => (
        <Button key={e.id} onClick={() => handlChange(e.id)}>
          {e.name}
        </Button>
      ))}
    </div>
  );
};

export default Test;
