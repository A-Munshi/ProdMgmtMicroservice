# 🛍️ Product Management Microservice
An enterprise-grade full-stack **Product Management System** built with **Spring Boot** and **modern web technologies**, featuring **role-based access control**, secure REST APIs, and a sleek responsive UI.

![Java](https://img.shields.io/badge/Java-25-orange?style=flat-square&logo=openjdk)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5.7-brightgreen?style=flat-square&logo=spring)
![Oracle](https://img.shields.io/badge/Oracle-Database-red?style=flat-square&logo=oracle)


## 📋 Table of Contents
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [API Documentation](#-api-documentation)
- [Security](#-security)
- [Testing](#-testing)
- [Project Structure](#-project-structure)


## ✨ Features
- **Role-Based Access Control** — Admin (CRUD) & User (Read-only)
- **RESTful API Architecture** using Spring Boot + Hibernate
- **Validation & Exception Handling** with Spring Validation
- **Oracle Database Integration** (via JPA)
- **Modern UI** built with HTML, CSS, and Vanilla JS
- **Swagger / OpenAPI Docs** for API exploration
- **JUnit + Mockito** testing suite


## 📸 Screenshots
| Landing | Admin | Add Product | Validation | Update |
|----------|--------|-------------|-------------|---------|
| ![Landing](https://github.com/user-attachments/assets/1db4189b-1396-45c5-bd20-efee14c979ad) | ![Admin](https://github.com/user-attachments/assets/6d12fb1d-69ae-42d8-ba73-58d691a7f3fb) | ![Add](https://github.com/user-attachments/assets/1faa5802-551b-4ab5-99f8-bf9832fcf47c) | ![Validation](https://github.com/user-attachments/assets/dbbc5bc5-909a-43d8-b53a-64cc5c58bef4) | ![Update](https://github.com/user-attachments/assets/7dc386c3-765c-4050-aec8-632cf4687f88) |

| Delete | Search | Sort (Name) | Sort (Price) | User |
|----------|--------|-------------|-------------|---------|
| ![Del](https://github.com/user-attachments/assets/372f6df9-e620-4a4b-809b-42ea8bcf8ec9) | ![Search](https://github.com/user-attachments/assets/0efd6197-286b-4fc5-95cc-802ce46a6980) | ![Sort Name](https://github.com/user-attachments/assets/597af8f3-0968-4ec1-9bf2-da552a76caf5) | ![Sort Price](https://github.com/user-attachments/assets/8d0c61e2-3a0e-46ed-901e-415907c61b0c) | ![User](https://github.com/user-attachments/assets/76222df8-c55c-4915-bab6-1c2b0dd0b8eb) |

## 🛠️ Tech Stack
| Layer | Technology |
|-------|-------------|
| **Backend** | Java 25, Spring Boot 3.5.7, Spring Security, Spring Data JPA, Hibernate |
| **Frontend** | HTML5, CSS3, Vanilla JS, Fetch API |
| **Database** | Oracle 21c |
| **Testing & Docs** | JUnit 5, Mockito, Spring Security Test, Swagger/OpenAPI |
| **Build Tool** | Maven |

## 🏗️ Architecture
```
┌─────────────────┐
│   Web Browser   │
│  (HTML/CSS/JS)  │
└────────┬────────┘
         │ HTTP/REST
         ▼
┌─────────────────┐
│ Spring Security │ ◄── Authentication & Authorization
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Controllers   │ ◄── REST API Endpoints
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│    Services     │ ◄── Business Logic
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Repositories   │ ◄── Data Access Layer
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Oracle Database │
└─────────────────┘
```

### Design Patterns Used
- **MVC (Model-View-Controller)** - Separation of concerns
- **DTO (Data Transfer Object)** - Decoupling entities from API
- **Repository Pattern** - Data access abstraction
- **Dependency Injection** - Loose coupling
- **Builder Pattern** - User creation in security config


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

2. **Configure Database**
   Update `src/main/resources/application.yml`:
   ```yaml
   spring:
     datasource:
       url: jdbc:oracle:thin:@localhost:1521:xe
       username: your_username
       password: your_password
   ```

3. **Create Database Schema**
   Run the following SQL in your Oracle database:
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

4. **Build the project**
   ```bash
   mvn clean install
   ```

5. **Run the application**
   ```bash
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

### Request/Response Examples
#### Create Product
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

#### Response
```json
{
  "id": 1,
  "name": "Laptop",
  "sku": "LAP-001",
  "description": "High-performance laptop",
  "price": 999.99,
  "quantity": 50
}
```

### Interactive API Documentation
Visit http://localhost:8080/swagger-ui.html for interactive API testing with Swagger UI.

## 🔒 Security
### Authentication
- **HTTP Basic Authentication** for quick development
- Credentials encoded with BCrypt
- In-memory user store (easily replaceable with database)

### Authorization
- Method-level security with `@PreAuthorize`
- Role-based access control (RBAC)
- ADMIN role for write operations
- USER role for read operations

### Production Recommendations
- ⚠️ Replace Basic Auth with JWT tokens
- ⚠️ Use HTTPS in production
- ⚠️ Store users in database
- ⚠️ Implement rate limiting
- ⚠️ Add CORS configuration
- ⚠️ Enable CSRF protection


## 🧪 Testing

### Run Tests
```bash
# Run all tests
mvn test

# Run with coverage
mvn test jacoco:report
```

### Test Coverage
- **Unit Tests**: Service layer with Mockito
- **Integration Tests**: Repository layer
- **Security Tests**: Authentication & authorization

### Example Test
```java
@Test
void testCreateProduct() {
    ProductDTO dto = new ProductDTO();
    dto.setName("Test Product");
    dto.setSku("TEST-001");
    
    ProductDTO result = productService.createProduct(dto);
    
    assertNotNull(result.getId());
    assertEquals("Test Product", result.getName());
}
```

## 📁 Project Structure
```
ProdMgmtMicroservice/src/
├── main/
│   ├── java/com/example/prodservice/
│   │   ├── config/                      # Security & Swagger configs
│   │   ├── controller/                  # REST endpoints
│   │   ├── dto/                         # Data Transfer Objects
│   │   ├── exception/                   # Global exception handling
│   │   ├── model/                       # JPA Entities
│   │   ├── repository/                  # DAO Layer
│   │   ├── service/                     # Business Logic
│   │   └── ProdServiceApplication.java  # Main application
│   └── resources/static/                # Frontend (HTML, CSS, JS)
│       ├── application.yml              # Configuration
│       └── data.sql                     # Sample data
└── test/                                # Testing
├── pom.xml                              # Maven dependencies
└── README.md
```

## 👤 Author
**Anuvab Munshi**
- GitHub: [A-Munshi](https://github.com/A-Munshi)
- LinkedIn: [Anuvab Munshi](www.linkedin.com/in/anuvab-munshi)

<div align="center">
  <p>⭐ Star this repository if you find it helpful!</p>
  <p>Made with ❤️ and ☕</p>
</div>
