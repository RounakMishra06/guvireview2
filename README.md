This project is a collaborative effort by a dedicated team to develop an intuitive online fundraising platform. It enables users to create campaigns, donate funds securely, and track progress in real time, all while being accessible across various devices.

Features
Create Fundraising Campaigns: Users can set goals, add descriptions, and upload images for their campaigns.
Donate Securely: Donors can contribute to campaigns using secure payment methods.
Track Progress: Real-time updates on the amount raised compared to the goal.
Responsive Design: Optimized for desktop and mobile devices.
User Authentication: Sign up and log in functionality for campaign creators and donors.
Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js with Express.js
Database: MongoDB
Payment Integration: Razorpay/PayPal API
Hosting: Deployed on platforms like Vercel/Heroku
Installation
Prerequisites
Node.js installed
MongoDB set up locally or on a cloud service
Steps to Set Up

Clone the repository:
git clone https://github.com/RounakMishra06/online-fundraiser.git  
Navigate to the project directory:
bash

cd online-fundraiser  
Install dependencies:
bash

npm install  
Set up the environment variables:
Create a .env file in the root directory and configure the following:
plaintext
Copy code
PORT=5000  
MONGO_URI=<Your MongoDB Connection String>  
PAYMENT_API_KEY=<Your Payment Gateway API Key>  
Start the server:
bash
Copy code
npm start  
Access the Application
Once the server is running, visit http://localhost:5000 in your browser.

Project Structure
plaintext
Copy code
online-fundraiser/  
├── public/          # Static files (CSS, JS, Images)  
├── views/           # Frontend templates  
├── routes/          # API and web routes  
├── models/          # Database schemas  
├── controllers/     # Backend logic  
├── app.js           # Main application file  
├── .env             # Environment variables  
└── package.json     # Project metadata and dependencies  

Team
This project was created by:

Rounak Mishra
We collaborated to design, develop, and implement this platform, ensuring a seamless user experience and robust functionality.

Contribution
Contributions are welcome! Feel free to submit issues or pull requests to improve the project.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Contact
For questions or collaboration, contact us at:

Email: mrounak198@gmail.com
GitHub: RounakMishra06


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# OnlineFundRaiserLatest
