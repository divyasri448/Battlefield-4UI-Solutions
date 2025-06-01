###Project:- Battlefield 4 Server Info UI
✅ Objective:
->This project replicates a section of the Battlefield 4 Server Info page, showing:

->Player count

->Server ping

->Tick rate

->Two teams with a list of players (e.g., US vs RU)

->The data is fetched dynamically from a backend API and displayed in a React UI styled like the game's theme.

🧱 Project Structure
 
battlefield-server-info/
│
├── client/      # React frontend
│   └── src/
│       ├── App.js
│       ├── index.js
│       └── components/
│           └── ServerInfo.jsx
│           └── ServerInfo.css
│
├── server/      # Node.js backend
│   ├── index.js
│   └── data/
│       └── serverData.json

# work flow:-
🖥️ 1. Frontend (React)
-> in the client/ folder.

->App.js renders the main layout and uses a component called ServerInfo.

->ServerInfo.jsx fetches data from the backend API (/api/server-info) and displays it in a styled card:

->Total players

->Server ping

->Tick rate

->Player list for each team

->Styling:
->ServerInfo.css adds game-like dark UI with hover effects, padding, and rounded cards.

🗄️ 2. Backend (Node.js + Express)

->Located in the server/ folder.

->index.js runs an Express server on http://localhost:5000.

->The route /api/server-info serves mock server data stored in serverData.json.
 
 #
