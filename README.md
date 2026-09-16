# Yatra
This is a multi service provider riding sharing web application.

## Features

- User registrtion for multiple roles: Rider, Delivery Partner, Bus/Truck Provider
- Login/Register system with role-based access
- Admin dashboard
- Ride request logic
- Responsive UI (mobile-first design)

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Node.js, Express, Typescript
- **Database:** MongoB (via MongoDB Atlas)

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation
1. Clone the repository
git clone https://github.com/bibekpandey999/Yatra.git 
cd Yatra

2. Install frontend dependencies:
cd frontend
npm install

3. Install backend dependencies
cd backend 
npm install

4. Setup environment variables:
- Create a `.env` file inside `backend/` folder
-Add: MONGODB_URI=your_mongodb_connection_string

### Running the project

**Frontend:**
cd frontend
npm run dev

Runs on `http://localhost:3000`

**Backend:**
cd backend
npm run dev

## Project Structure

Yatra/
├── backend/ # Express API + MongoDB
├── frontend/ # Next.js app

## Contributors
- Shreejal Shrestha
- Sushil