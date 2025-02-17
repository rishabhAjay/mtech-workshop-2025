# React Project with Redux Toolkit, React Router, and Axios

This project demonstrates the use of **React**, **Redux Toolkit**, **React Router v6** and **Axios**.

## Project Setup

### 1. **Clone the repository**:

First, clone this repository to your local machine:

```bash
git clone https://github.com/rishabhAjay/mtech-workshop-2025.git
cd mtech-workshop-2025
```

### 2. **Install dependencies**:

Make sure you have **Node.js** installed (>= 16.x.x).

To install the dependencies, run the following command:

```bash
npm install
```

### 3. **Configure Vite Proxy (to handle CORS issues)**:

In order to avoid CORS issues when making requests to a backend server, you'll need to configure a proxy in **Vite**. This allows you to forward API requests to another domain without running into cross-origin issues.

1. Open **`vite.config.js`** in the root directory of the project.
2. Add the proxy configuration inside the `server` object like this:

```javascript
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://dummyjson.com", // Replace with your API's base URL
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Rewrites the /api prefix
      },
    },
  },
});
```

### 4. **Running the App**:

To start the development server, use the following command:

```bash
npm run dev
```

### 5. **Credentials to Login**:

The dummy credentials to login are:

```
username: emilys
password: emilyspass
```
