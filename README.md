# Full-Stack Dockerized Web Application

A modern, containerized full-stack boilerplate featuring a React/Nginx frontend, a Node.js/Express backend API, and a PostgreSQL database. The entire stack is configured to spin up with a single command using Docker Compose, complete with automatic health checks, custom bridge networking, and persistent data volumes.

---

## 🚀 Features

- **Multi-Container Architecture:** Completely containerized environment isolating the web server, API server, and database.
- **Production-Ready Frontend:** Served via an optimized Nginx Alpine configuration.
- **Robust Backend:** Express API utilizing connection pooling with `pg` to communicate with PostgreSQL.
- **Reliable Startup Order:** Configured with Docker Compose health checks ensuring the database is fully ready to accept connections before the backend attempts to start.
- **Persistent Storage:** Uses Docker named volumes to keep PostgreSQL data safe across container restarts.

---

## 🛠️ Tech Stack

| Component | Technology | Description |
|---|---|---|
| **Frontend** | React, HTML/CSS | Client-side interface |
| **Web Server** | Nginx (Alpine) | Serving static frontend assets |
| **Backend** | Node.js, Express | RESTful API controller |
| **Database** | PostgreSQL 16 (Alpine) | Relational database storage |
| **Orchestration** | Docker, Docker Compose | Container management & networking |

---

## 📋 Prerequisites

Before running this project, ensure you have the following installed on your machine:

- **Docker Desktop** (with WSL 2 backend enabled if running on Windows)
- **Git**

---

## ⚙️ Getting Started

Follow these steps to spin up the local development environment:

### 1. Clone the Repository
```bash
git clone [https://github.com/sohamdi2301-37/new-docker-project.git](https://github.com/sohamdi2301-37/new-docker-project.git)
cd new-docker-project
