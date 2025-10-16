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

| Desktop Dashboard View | Mobile Responsive View |
|-------------------------|------------------------|
| ![Desktop Dashboard](./screenshots/Screenshot-2025-10-12-142808.png) | ![Mobile View](./screenshots/phone1.jpg) |

| Alternate Desktop Layout | Watchlist + Ticker View |
|---------------------------|-------------------------|
| ![Dashboard Layout](./screenshots/Screenshot-2025-10-12-122631.png) | ![Ticker View](./screenshots/Screenshot-2025-10-12-142808.png) |

---

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

## 👨‍💻 Author

**Vasantha Kumar**  
📧 [vk042966@gmail.com](mailto:vk042966@gmail.com)  
💼 [GitHub Profile](https://github.com/VasanthaKumar1980)

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---
