# 🚀 React + TanStack Router + n8n Simulation

This project is a simple frontend application built with **Vite**, **React**, and **TanStack Router**, which interacts with a simulated backend endpoint created using **n8n**. It’s a great example of local full-stack simulation, useful for prototyping or integration testing.

---

## 📁 Project Structure

- **Frontend**: Vite + React + TanStack Router  
- **Backend Simulation**: n8n workflow exposed via webhook (running in Docker)

---

## ✅ Prerequisites

Before getting started, ensure you have the following installed:

- **Node.js** (v18+ recommended) → [https://nodejs.org/](https://nodejs.org/)
- **Docker** + **Docker Compose** → [https://www.docker.com/](https://www.docker.com/)
- **pnpm** (preferred) or `npm`/`yarn` → [https://pnpm.io/](https://pnpm.io/)

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/jisazamp/orquestia-sample.git
cd orquestia-sample
```

### 2. Install Frontend Dependencies

Using **pnpm** (recommended):

```bash
pnpm install
```

Or using npm:

```bash
npm install
```

---

### 3. Create the `.env` File

You’ll need to set an environment variable pointing to the simulated API endpoint.

Create a file named `.env` in the root directory and add the following:

```env
VITE_BASE_URLL=http://localhost:5678/webhook/
```

> Replace the URL if you expose the n8n container via a different port or hostname.

---

### 4. Run the n8n Simulation Server (via Docker)

Create a file called `docker-compose.yml` in the root directory with the following content:

```yaml
version: "3.7"

services:
  n8n:
    image: n8nio/n8n
    ports:
      - "5678:5678"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=admin
    volumes:
      - ./n8n:/home/node/.n8n
```

Then run:

```bash
docker-compose up
```

> This will start the n8n editor at [http://localhost:5678](http://localhost:5678).  
> Log in using `admin / admin`.

---

### 5. Import the Workflow into n8n

1. Go to [http://localhost:5678](http://localhost:5678)
2. Click the **hamburger menu** (top left) → **Import Workflow**
3. Paste the following JSON:

<details>
<summary>Click to expand the workflow JSON</summary>

```json
{
  "name": "My workflow 2",
  "nodes": [
    {
      "parameters": {
        "path": "api/simulacion",
        "responseMode": "responseNode",
        "options": {}
      },
      "id": "dc50ae63-adf0-4c9c-8477-b3eda4f159d9",
      "name": "HTTP Request Trigger",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 1,
      "position": [0, 0],
      "webhookId": "1c5a00f3-d589-47c7-8d40-db22a3259392"
    },
    {
      "parameters": {
        "respondWith": "json",
        "responseBody": "{\n  \"title\": \"Hola\",\n  \"message\": \"Mundo!\"\n}",
        "options": {}
      },
      "id": "932cbbdb-1f70-4b52-9ac2-cad8c45372ab",
      "name": "Respond to Webhook",
      "type": "n8n-nodes-base.respondToWebhook",
      "typeVersion": 1,
      "position": [200, 0]
    }
  ],
  "connections": {
    "HTTP Request Trigger": {
      "main": [
        [
          {
            "node": "Respond to Webhook",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": true
}
```

</details>

4. Click “Activate” to make the webhook live.

---

### 6. Start the Frontend App

Using pnpm:

```bash
pnpm dev
```

Or using npm:

```bash
npm run dev
```

The app will be available at:  
[http://localhost:3000](http://localhost:3000)

---

## 🧪 Testing the Integration

When the frontend makes a request to `/api/simulacion`, the n8n workflow will respond with:

```json
{
  "title": "Hola",
  "message": "Mundo!"
}
```

You can verify this manually using `curl`:

```bash
curl http://localhost:5678/webhook/api/simulacion
```

Or through the app’s interface.

---

## 📦 Build for Production

```bash
pnpm build
```

Static files will be in the `dist/` folder.

---

## 🧼 Cleanup

To stop all containers:

```bash
docker-compose down
```

To remove the `node_modules` and lockfile:

```bash
pnpm store prune
rm -rf node_modules pnpm-lock.yaml
```

---

## 🧠 Technologies Used

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TanStack Router](https://tanstack.com/router)
- [n8n](https://n8n.io/)
- [Docker](https://www.docker.com/)

---

## 📄 License

This project is licensed under the MIT License.
