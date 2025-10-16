# 📈 Real-Time Stock Ticker

A responsive web application that displays **live stock market data** with smooth real-time updates and a clean, modern interface.  
Built using **React + Vite**, styled with **Tailwind CSS**, and powered by **Supabase** for authentication and database management.

---

## 🚀 Features

- 🔐 **User Authentication** – Login and Signup using Supabase  
- 💹 **Live Stock Data** – Real-time stock price updates  
- 📊 **Interactive Dashboard** – Monitor multiple stocks in one view  
- 🌐 **Fully Responsive** – Works seamlessly on both desktop and mobile  
- ⚡ **Fast Performance** – Built using Vite for lightning-fast load times  
- ☁️ **Deployed on Netlify** – Continuous deployment for quick updates

---


## 📚 Table of Contents
1. [Introduction](#introduction)
2. [Objectives](#objectives)
3. [Features](#features)
4. [Tech Stack](#tech-stack)
5. [System Architecture](#system-architecture)
6. [Folder Structure](#folder-structure)
7. [Installation & Setup](#installation--setup)
8. [Screenshots](#screenshots)
9. [Challenges & Solutions](#challenges--solutions)
10. [Future Enhancements](#future-enhancements)
11. [Deployment Links](#deployment-links)
12. [Conclusion](#conclusion)
13. [Author](#author)
14. [License](#license)

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend  | React.js, Vite |
| Styling   | Tailwind CSS |
| Backend   | Supabase |
| Deployment| Netlify |
| Tools     | VS Code, Git, GitHub |

---

## 📂 Folder Structure

```
realtime-stock-ticker/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/VasanthaKumar1980/Realtime-stockticker-main.git
   cd Realtime-stockticker-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Deploy**
   - You can deploy easily using [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).

---

## 🔗 Links

- 🌍 **Live Demo:** [https://realtimestockticker.netlify.app/](https://realtimestockticker.netlify.app/)
- 💾 **GitHub Repository:** [https://github.com/VasanthaKumar1980/Realtime-stockticker-main](https://github.com/VasanthaKumar1980/Realtime-stockticker-main)

---

## 🖼️ Screenshots

 Desktop Dashboard View 
 <br><br>
 <img width="1920" height="1080" alt="Screenshot 2025-10-12 142808" src="https://github.com/user-attachments/assets/e8c9bfd9-df88-4b79-9190-8935949759de" />
 <br><br>
 <img width="1920" height="1080" alt="Screenshot 2025-10-12 142808" src="https://github.com/user-attachments/assets/ff9dbf28-bebd-44b5-86d9-953f3192cdf5" />
 Mobile Responsive View
 <br><br>
 ![phone1](https://github.com/user-attachments/assets/f736ed81-22d7-4b47-a06a-f96926ec2f30)

<br><br>


 Netlify DashBoard
 <br><br>
 <img width="1920" height="1080" alt="Screenshot 2025-10-13 220331" src="https://github.com/user-attachments/assets/c5f0d1fa-613c-4c0f-be12-e6073184981e" />
<br><br>
VS Code Screenshots
<img width="1920" height="1080" alt="Screenshot 2025-10-12 153759" src="https://github.com/user-attachments/assets/8ff3cc66-b06d-45f4-acc4-e0089172ffec" />

## 💡 Challenges & Solutions

- **Challenge:** Real-time data updates caused API throttling.  
  **Solution:** Used interval-based fetching with optimized refresh time.  
- **Challenge:** Responsive layout issues on smaller devices.  
  **Solution:** Applied Tailwind CSS breakpoints for better adaptability.  
- **Challenge:** Managing authentication and sessions.  
  **Solution:** Integrated Supabase Auth with persistent login sessions.

---

## 📘 Future Enhancements

- 🔍 Add stock search & filter options  
- 📈 Integrate advanced charting using Recharts  
- 🌓 Add dark/light mode toggle  
- ⭐ Include watchlist & notification alerts

---

🏁 Conclusion

This project successfully demonstrates real-time data handling, user authentication, and responsive UI development using modern JavaScript technologies.

## 👨‍💻 Author
**Vasantha Kumar**  
## Contact
- GitHub: [VasanthaKumar1980](https://github.com/VasanthaKumar1980)  
- Netlify: [Live Demo](https://realtimestockticker.netlify.app/)  
- Email: vk042966@gmail.com


---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---
