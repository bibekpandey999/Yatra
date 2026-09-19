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
- Sushil Bhattarai


## first week report

- we have implement basic and core logic of application like register, login, logout . some of the logic are connected with frontend as also working
- we also create some of the core function that admin , transporter(rider,booking provider) and passenger performs.

admin

-  we have create admin dashboard , password change ui, view pending kyc , view all customers, edit profile, some of them are connected with backend
-  most of the logic is implemented along with routing but not connected with frontend

customer 

-  created register, login , logout , fetch profile etc logic and also ui created
-  main page where customer(passenger) finds riders is halfly builded but not working because a lot of functionality are not implemented


transporter(rider)

-  created register, login , logout , fetch profile etc logic and also ui is created
-  basic backend logic is implemented like customer core are not implemented yet 