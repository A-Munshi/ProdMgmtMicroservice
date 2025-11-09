# 🛍️ Product Management Microservice
A full-stack enterprise-grade product management system built with Spring Boot and modern web technologies. Features role-based access control, RESTful APIs, and an intuitive user interface for managing product inventories.

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
### 🔐 Role-Based Access Control
- **Admin Users**: Full CRUD operations (Create, Read, Update, Delete)
- **Regular Users**: Read-only access to product catalog
- Secure authentication with Spring Security

### 🎯 Product Management
- ✅ Add new products with validation
- ✅ Update existing product details
- ✅ Delete products with confirmation
- ✅ Search products by ID
- ✅ Sort by name or price (ascending/descending)
- ✅ View detailed product information

### 🎨 Modern Web Interface
- Responsive design (mobile, tablet, desktop)
- Intuitive card-based layout
- Real-time form validation
- Dynamic sorting and filtering
- Clean and professional UI

### 🔧 Backend Features
- RESTful API architecture
- JPA/Hibernate ORM with Oracle Database
- DTO pattern for data transfer
- Comprehensive exception handling
- OpenAPI/Swagger documentation
- Unit and integration tests

## 📸 Screenshots
### Landing Page
<img width="1366" height="768" alt="LandingPage" src="https://github.com/user-attachments/assets/1db4189b-1396-45c5-bd20-efee14c979ad" />
**Clean and intuitive landing page with login interface**

### Admin Dashboard
<img width="1366" height="768" alt="adminPrivileges" src="https://github.com/user-attachments/assets/6d12fb1d-69ae-42d8-ba73-58d691a7f3fb" />
**Admin users have full access to CRUD operations**

### Adding New Products
<img width="1366" height="768" alt="addingNewProd" src="https://github.com/user-attachments/assets/1faa5802-551b-4ab5-99f8-bf9832fcf47c" />
**Simple form with validation for adding products**

### Form Validation
<img width="1366" height="768" alt="notAllowNULL" src="https://github.com/user-attachments/assets/dbbc5bc5-909a-43d8-b53a-64cc5c58bef4" />
**Built-in validation prevents invalid data entry**

### Update Product
<img width="1366" height="768" alt="updateProd" src="https://github.com/user-attachments/assets/7dc386c3-765c-4050-aec8-632cf4687f88" />
**Edit existing products with pre-filled forms**

### Delete Product
<img width="1366" height="768" alt="delProd" src="https://github.com/user-attachments/assets/372f6df9-e620-4a4b-809b-42ea8bcf8ec9" />
**Confirmation dialog for safe deletion**

### Search Functionality
<img width="1366" height="768" alt="searchbyID" src="https://github.com/user-attachments/assets/0efd6197-286b-4fc5-95cc-802ce46a6980" />
**Quick search to find products by ID**

### Sorting Options
<img width="1366" height="768" alt="sortByName" src="https://github.com/user-attachments/assets/597af8f3-0968-4ec1-9bf2-da552a76caf5" />
**Sort products alphabetically**

<img width="1366" height="768" alt="sortbyPrice" src="https://github.com/user-attachments/assets/8d0c61e2-3a0e-46ed-901e-415907c61b0c" />
**Sort products by price range**

### User View
<img width="1366" height="768" alt="userGeneral" src="https://github.com/user-attachments/assets/76222df8-c55c-4915-bab6-1c2b0dd0b8eb" />
**Regular users can view products but cannot modify**

## 🛠️ Tech Stack
### Backend
- **Java 25** - Latest Java features
- **Spring Boot 3.5.7** - Application framework
- **Spring Data JPA** - Data persistence
- **Spring Security** - Authentication & authorization
- **Spring Validation** - Input validation
- **Oracle Database** - Enterprise database
- **Maven** - Dependency management

### Frontend
- **HTML5** - Structure
- **CSS3** - Styling with modern design
- **Vanilla JavaScript** - Dynamic functionality
- **Fetch API** - RESTful API communication

### Documentation & Testing
- **SpringDoc OpenAPI** - API documentation
- **JUnit 5** - Unit testing
- **Mockito** - Mocking framework
- **Spring Security Test** - Security testing

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
ProdMgmtMicroservice/
├── src/
│   ├── main/
│   │   ├── java/com/example/prodservice/
│   │   │   ├── config/
│   │   │   │   ├── OpenApiConfig.java       # Swagger configuration
│   │   │   │   └── SecurityConfig.java      # Security setup
│   │   │   ├── controller/
│   │   │   │   └── ProductController.java   # REST endpoints
│   │   │   ├── dto/
│   │   │   │   └── ProductDTO.java          # Data transfer object
│   │   │   ├── exception/
│   │   │   │   ├── ApiExceptionHandler.java # Global exception handler
│   │   │   │   └── ResourceNotFoundException.java
│   │   │   ├── model/
│   │   │   │   └── Product.java             # JPA entity
│   │   │   ├── repository/
│   │   │   │   └── ProductRepository.java   # Data access
│   │   │   ├── service/
│   │   │   │   ├── ProductService.java      # Service interface
│   │   │   │   └── impl/
│   │   │   │       └── ProductServiceImpl.java
│   │   │   └── ProdServiceApplication.java  # Main application
│   │   └── resources/
│   │       ├── static/
│   │       │   ├── index.html               # Frontend UI
│   │       │   ├── styles.css               # Styling
│   │       │   └── app.js                   # JavaScript logic
│   │       ├── application.yml              # Configuration
│   │       └── data.sql                     # Sample data
│   └── test/
│       └── java/com/example/prodservice/
│           └── service/
│               └── ProductServiceImplTest.java
├── pom.xml                                   # Maven dependencies
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
