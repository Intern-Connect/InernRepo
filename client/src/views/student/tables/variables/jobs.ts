type jobs = {
  image:string;
  title:string;
  des: string;
  skills: Array<string>;
  status: boolean;
  company: string
};

const joblist: jobs[] = [
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
        title: "Node Js Developer",
        des: "We are looking for a motivated and enthusiastic Node.js Developer Intern to join our team. As a Node.js Developer Intern, you will work alongside experienced developers to build and maintain web applications using Node.js and related technologies.",
        skills: ["Node js", "Express", "Postgres"],
        status: false,
        company: "Afro Tech",
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        title: "React JS Developer",
        des: "We are looking for a motivated and enthusiastic React Developer Intern to join our team. As a React Developer Intern, you will work alongside experienced developers to build and maintain web applications using React and related technologies.",
        skills: ["React JS", "Redux", "Tailwind css"],
        status: true,
        company: "Afro Tech",
    }
]

export default joblist