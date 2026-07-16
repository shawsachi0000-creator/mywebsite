import fs from "fs";

const title = "What is Artificial Intelligence?";

const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${title}</title>
</head>
<body>

<h1>${title}</h1>

<p>
Artificial Intelligence (AI) is a technology that enables computers
to perform tasks that normally require human intelligence such as
learning, problem-solving and decision making.
</p>

</body>
</html>
`;

fs.writeFileSync("what-is-artificial-intelligence.html", html);

console.log("Article Generated Successfully");
