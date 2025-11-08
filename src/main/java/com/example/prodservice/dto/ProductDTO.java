package com.example.prodservice.dto;
import jakarta.validation.constraints.*;
import java.math.BigDecimal;

public class ProductDTO {
    private Long id;

    @NotBlank(message = "name is required")
    private String name;

    @NotBlank(message = "sku is required")
    private String sku;

    private String description;

    @NotNull(message = "price is required")
    @DecimalMin(value = "0.0", inclusive = true, message = "price must be >= 0")
    private BigDecimal price;

    @NotNull(message = "quantity is required")
    @Min(value = 0, message = "quantity must be >= 0")
    private Integer quantity;

    // getters & setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getSku() { return sku; }
    public void setSku(String sku) { this.sku = sku; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }
    public Integer getQuantity() { return quantity; }
    public void setQuantity(Integer quantity) { this.quantity = quantity; }
}
