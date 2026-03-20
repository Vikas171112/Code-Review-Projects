# React Mini Social App (CRUD)

A simple social media-style CRUD application built using **React**, following **Atomic Design principles** and a clean architecture.

---

## Features

-Create post (text + image)
-Edit post (via reusable modal)
-Delete post
-User association with each post
-Image preview before posting
-Clean modular architecture

---

## Project Structure

```
src/
│
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
│
├── hooks/
│   └── usePosts.js
│
├── services/
│   └── postService.js
│
├── pages/
│   └── Home.jsx
│
├── layouts/
│   └── FeedLayout.jsx
```

---

## 🧠 Architecture

This project follows a **layered architecture**:

- **Components (UI)** → Render UI and handle events
- **Hooks (State Layer)** → Manage application state
- **Services (Logic Layer)** → Handle pure data manipulation

### Flow:

```
User Action → Component → Hook → Service → State Update → UI Re-render
```

---

## Key Concepts Used

- React Hooks (`useState`)
- Atomic Design Pattern
- Component Reusability
- Separation of Concerns
- Controlled Components

---

## Tech Stack

- React.js
- Tailwind CSS

---

## Screenshots

(Add your project screenshots here)

---

## Getting Started

```bash
git clone https://github.com/your-username/your-repo-name
cd your-repo-name
npm install
npm run dev
```

---

## Learnings

- Built a fully modular React app
- Understood proper state management without external libraries
- Learned how to structure scalable frontend applications

---

## Future Improvements

- Likes & Comments
- LocalStorage persistence
- Authentication
- Backend integration

---

## Author

**Vikas Kumar Jha**

---

If you like this project, give it a star!
