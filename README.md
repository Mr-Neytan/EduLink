# EduLink
## About the Project
EduLink is a centralized hub that makes it easier for learners to access content from reputable and high-quality sources. The goal is to create a web app that answers the question "Where can I learn X?".

## Tech Stack
The web app uses Vite, React JS, HTML, and CSS. React was used instead of plain JavaScript because it could help build reusable components that would be important for ensuring scalability.

## Important Components
### Header
The header at the top of the web app contains the name of the website along with the the tagline.
### Boxes
Each subject/skill is contained within a subject box, hovering over the subject causes it to scale up. 
### Modals
Clicking the subject box causes a modal to appear. Inside the modal are the links to different references.

## Adding Another Subject/Skill
This project is able to scale up easily since the components can easily render another subject. Adding a subject/skill can be done by adding a dictionary to the list named <code>webs</code> located in the file named <code>sub_details.jsx</code>. The dictionary should be follow the following format: <br/>
<code>{"name":"/Subject Name", "description":"/Description", "picture":"/thumbnail","links":[{"site": "name of website", "hyperlink": "link to website"}]}</code>

## Future Improvements
In future updates, it would be nice to add a submission bin for learning materials and resources. However, that might require money for storage and other interactive features.

## Challenges
The biggest challenge was learning how to implement the features in React. This is my first project using this tech stack so there was a lot of spontaneous learning. I am most proud of the apps ability to render multiple boxes from one list.

## Learnings
I learned a lot about React interfaces, I also learned about version history and uploading to github. This was an enjoyable experience for me overall.

## Attribution
The pictures and links contained in the web app are not mine.

Images used: <br/>
- Math: https://upload.wikimedia.org/wikipedia/commons/3/3d/Code-1076536.jpg
- Science: https://i0.wp.com/calmatters.org/wp-content/uploads/2021/08/math-curriculum.jpg?fit=1200%2C900&ssl=1 
- Coding: https://www.bibalex.org/SCIplanet/Attachments/Theme/MediumImage/qufOnGG7Ox_20210929150223214.jpg

References: <br/>
- https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc
- https://www.digitalocean.com/community/tutorials/react-modal-component
- https://www.w3schools.com/react/react_usestate.asp



