# 🛍️ Product Management Microservice
An enterprise-grade full-stack **Product Management System** built with **Spring Boot** and **modern web technologies**, featuring **role-based access control**, secure REST APIs, and a sleek responsive UI.

![Java](https://img.shields.io/badge/Java-25-orange?style=flat-square&logo=openjdk)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5.7-brightgreen?style=flat-square&logo=spring)
![Oracle](https://img.shields.io/badge/Oracle-Database-red?style=flat-square&logo=oracle)

## 📋 Table of Contents

<div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap;">

<div style="width: 48%;">

- <a href="#features" style="text-decoration:none;">✨ Features</a>  
- <a href="#screenshots" style="text-decoration:none;">📸 Screenshots</a>  
- <a href="#tech-stack" style="text-decoration:none;">🛠️ Tech Stack</a>  
- <a href="#architecture" style="text-decoration:none;">🏗️ Architecture</a>  
- <a href="#getting-started" style="text-decoration:none;">🚀 Getting Started</a>  

</div>

<div style="width: 48%;">

- <a href="#api-documentation" style="text-decoration:none;">📚 API Documentation</a>  
- <a href="#security" style="text-decoration:none;">🔒 Security</a>  
- <a href="#testing" style="text-decoration:none;">🧪 Testing</a>  
- <a href="#project-structure" style="text-decoration:none;">📁 Project Structure</a>  

</div>

</div>


## ✨ Features
- **Role-Based Access Control** — Admin (CRUD) & User (Read-only)
- **RESTful API Architecture** using Spring Boot + Hibernate
- **Validation & Exception Handling** with Spring Validation
- **Oracle Database Integration** (via JPA)
- **Modern UI** built with HTML, CSS, and Vanilla JS
- **Swagger / OpenAPI Docs** for API exploration
- **JUnit + Mockito** testing suite


## 📸 Screenshots
| Column 1 | Column 2 |
|---|---|
| **Landing Page**<br><img width="1366" height="768" alt="LandingPage" src="https://github.com/user-attachments/assets/1d3b096c-a5fe-468b-a44d-8684a9eacb94" /> | **Admin Dashboard**<br><img width="1366" height="768" alt="adminPrivileges" src="https://github.com/user-attachments/assets/42872df9-24ec-41d9-81e0-7a3ec0d88d77" /> |
| **Add Product**<br><img width="1366" height="768" alt="addingNewProd" src="https://github.com/user-attachments/assets/71e36cd4-88ff-451d-8c68-05dfaf0a09da" /> | **Form Validation**<br><img width="1366" height="768" alt="notAllowNULL" src="https://github.com/user-attachments/assets/db0a1150-0c0a-46d8-812a-033f05968633" /> |
| **Update Product**<br><img width="1366" height="768" alt="updateProd" src="https://github.com/user-attachments/assets/c80ee51e-f97d-4d74-ad26-19f58208e50d" /> | **Delete Product**<br><img width="1366" height="768" alt="delProd" src="https://github.com/user-attachments/assets/7ffc1b6f-a5ad-4435-be1e-42548962de10" /> |
| **Search by ID**<br><img width="1366" height="768" alt="searchbyID" src="https://github.com/user-attachments/assets/7787ebbe-6927-4ac9-b696-2a8dc2b7722c" /> | **Sort by Name**<br><img width="1366" height="768" alt="sortByName" src="https://github.com/user-attachments/assets/6d058f12-f8b0-4dfc-aaa1-9b60e2a97ac1" /> |
| **Sort by Price**<br><img width="1366" height="768" alt="sortbyPrice" src="https://github.com/user-attachments/assets/88436c94-2e02-4f96-ae90-69859904f3cc" /> | **User View**<br><img width="1366" height="768" alt="userGeneral" src="https://github.com/user-attachments/assets/47639d1f-1a86-4570-bb1a-5da859988c2a" /> |

## <a name="tech-stack"></a>🛠️ Tech Stack
| Layer | Technology |
|-------|-------------|
| **Backend** | Java 25, Spring Boot 3.5.7, Spring Security, Spring Data JPA, Hibernate |
| **Frontend** | HTML5, CSS3, Vanilla JS, Fetch API |
| **Database** | Oracle 21c |
| **Testing & Docs** | JUnit 5, Mockito, Spring Security Test, Swagger/OpenAPI |
| **Build Tool** | Maven |

## <a name="architecture"></a>🏗️ Architecture
```
     Web Browser  (HTML/CSS/JS) 
         │ HTTP/REST
         ▼
  Spring Security ◄── Authentication & Authorization
         │
         ▼
    Controllers   ◄── REST API Endpoints
         │
         ▼
      Services    ◄── Business Logic
         │
         ▼
    Repositories  ◄── Data Access Layer
         │
         ▼
  Oracle Database
```

### Design Patterns: MVC, DTO, Repository, Dependency Injection.  
<details>
<summary><strong>Expanded diagram & notes (click to open)</strong></summary>
- **MVC (Model-View-Controller)** - Separation of concerns
- **DTO (Data Transfer Object)** - Decoupling entities from API
- **Repository Pattern** - Data access abstraction
- **Dependency Injection** - Loose coupling
- **Builder Pattern** - User creation in security config
</details>

## 🚀 Getting Started
### Prerequisites
- Java 25 or higher
- Maven 3.6+
- Oracle Database (XE or higher)
- IDE (IntelliJ IDEA, Eclipse, or VS Code)

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ProdMgmtMicroservice.git
   cd ProdMgmtMicroservice
   ```

2. **Configure Database** — edit `src/main/resources/application.yml` and set your Oracle credentials:
   ```yaml
   spring:
     datasource:
       url: jdbc:oracle:thin:@localhost:1521:xe
       username: your_username
       password: your_password
   ```

3. **Create Database Schema** (run in Oracle):
   ```sql
   CREATE TABLE products (
       id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
       name VARCHAR2(30) NOT NULL,
       sku VARCHAR2(30) NOT NULL UNIQUE,
       description VARCHAR2(100),
       price NUMBER(10,2),
       quantity NUMBER(10)
   );
   ```

4. **Build and Run**
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

6. **Access the application**
   - Web Interface: http://localhost:8080
   - Swagger UI: http://localhost:8080/swagger-ui.html
   - API Docs: http://localhost:8080/v3/api-docs

### Default Credentials
| Role  | Username | Password  | Permissions |
|-------|----------|-----------|-------------|
| Admin | `admin`  | `admin123`| Full CRUD   |
| User  | `user`   | `user123` | Read-only   |


## 📚 API Documentation
### Endpoints

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `GET` | `/api/v1/products` | USER, ADMIN | List all products |
| `GET` | `/api/v1/products/{id}` | USER, ADMIN | Get product by ID |
| `POST` | `/api/v1/products` | ADMIN | Create new product |
| `PUT` | `/api/v1/products/{id}` | ADMIN | Update product |
| `DELETE` | `/api/v1/products/{id}` | ADMIN | Delete product |

**Quick example (create)**:
```http
POST /api/v1/products
Authorization: Basic YWRtaW46YWRtaW4xMjM=
Content-Type: application/json

{
  "name": "Laptop",
  "sku": "LAP-001",
  "description": "High-performance laptop",
  "price": 999.99,
  "quantity": 50
}
```
> For interactive testing open: `http://localhost:8080/swagger-ui/index.html`. Full request/response specs are available there.

## 🔒 Security
- **Dev authentication**: HTTP Basic with in-memory users (admin/user).
- **Prod recommendation**: Replace with JWT or OAuth2, use HTTPS, store users safely and enable CSRF/CORS controls.

## 🧪 Testing

- **Unit tests**: Service layer (JUnit + Mockito)
- **Integration tests**: Repository layer
- **Security Tests**: Authentication & authorization
- Run:

```bash
mvn test
```

<details>
<summary>Example test</summary>

```java
@Test
void testCreateProduct() {
  ProductDTO dto = new ProductDTO("Test", "TEST-001", "desc", BigDecimal.valueOf(9.99), 5);
  ProductDTO result = productService.createProduct(dto);
  assertNotNull(result.getId());
}
```

</details>

## 📁 Project Structure
```
ProdMgmtMicroservice/
├── src/
│   ├── main/
│   │   ├── java/com/example/prodservice/
│   │   │   ├── config/                      # Security & Swagger configs
│   │   │   ├── controller/                  # REST endpoints
│   │   │   ├── dto/                         # Data Transfer Objects
│   │   │   ├── exception/                   # Global exception handling
│   │   │   ├── model/                       # JPA Entities
│   │   │   ├── repository/                  # DAO Layer
│   │   │   ├── service/                     # Business Logic
│   │   │   └── ProdServiceApplication.java  # Main application
│   │   └── resources/static/                # Frontend (HTML, CSS, JS)
│   │       ├── application.yml              # Configuration
│   │       └── data.sql                     # Sample data
│   └── test/                                # Testing
├── pom.xml                                  # Maven dependencies
└── README.md
```

## 👤 Author
**Anuvab Munshi**
- GitHub: [A-Munshi](https://github.com/A-Munshi)
- LinkedIn: [Anuvab Munshi](https://www.linkedin.com/in/anuvab-munshi)

<div align="center">
  <p>⭐ Star this repository if you find it helpful!</p>
  <p>Made with ❤️ and ☕</p>
</div>
