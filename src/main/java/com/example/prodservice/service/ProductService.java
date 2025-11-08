package com.example.prodservice.service;
import com.example.prodservice.dto.ProductDTO;
import java.util.List;

public interface ProductService {
    ProductDTO createProduct(ProductDTO dto);
    ProductDTO updateProduct(Long id, ProductDTO dto);
    ProductDTO getProductById(Long id);
    List<ProductDTO> listAll();
    void deleteProduct(Long id);
}