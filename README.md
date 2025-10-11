# 🌐 Portfolio React — Contact Form with Web3Forms

This project is a React + Vite portfolio website that includes a working contact form powered by the Web3Forms API
.
It allows users to send messages directly to your email — no backend required!

## 🚀 Tech Stack:
  ⚛️ React 19
  ⚡ Vite 7
  🎨 CSS 
  📧 Web3Forms API


## 📁 Project Structure:

portfolio-react/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About/
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   ├── Hero/
│   │   ├── MyWork/
│   │   ├── NavBar/
│   │   └── footer/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md

## ⚙️ Setup & Run
  1️⃣ Install dependencies
       npm install
  2️⃣ Start development server
       npm run dev
  3️⃣ Build for production
       npm run build
  4️⃣ Preview production build
       npm run preview

## 📬 Contact Form Integration
### 📄 Contact.jsx

Here’s the logic for handling form submissions using Web3Forms:
const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "d1199e53-aaec-4ce7-8de2-635f2d8af4bb");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  }).then((res) => res.json());

  if (res.success) {
    alert(res.message);
  }
};

## 🧠 Example Form in JSX

<form onSubmit={onSubmit}>
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send Message</button>
</form>

⚠️ Replace the access key with your own from web3forms.com

## 📄 License

This project is licensed under the MIT License.

### Khelif Abdellah
