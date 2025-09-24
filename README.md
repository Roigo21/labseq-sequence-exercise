# 🚀 Altice Labs Labseq Exercise

This project has been developed using **Java with the Quarkus Framework** for the backend and **Angular** for the frontend.

Both modules (backend and frontend) are containerized using **Docker 🐳**, making it easy to build and run the application.

---

## 🗂 Project Structure

```text
.
├── backend/        # Quarkus backend module (Java)
│   ├── src/        # Application source code
│   ├── pom.xml     # Maven configuration
│   └── ...         
│
├── frontend/       # Angular frontend module
│   ├── src/        # Application source code
│   ├── package.json
│   └── ...
│
├── docker-compose.yml
└── README.md
```

- **backend/**→ Contains the REST API built with Quarkus ⚡
- **frontend/** → Contains the Angular client application 🌐
- **docker-compose.yml** → Orchestrates the two services (backend + frontend) 🛠
---

## ▶️ Running the application

1. Make sure you have **Docker** and **Docker Compose** installed.  
2. From the root directory of the project, run:  

```bash
docker compose up --build
```

3. This will build and start both the backend and frontend containers.  

- The **backend** will be accessible at: [http://localhost:8080](http://localhost:8080)  
- The **frontend** will be accessible at: [http://localhost:4200](http://localhost:4200)  

---

## 📄 API Documentation (Swagger)

The backend provides interactive API documentation via **Swagger UI**, available at:  

👉 [http://localhost:8080/q/swagger-ui](http://localhost:8080/q/swagger-ui)  

This interface allows you to explore and test all available REST endpoints.  
