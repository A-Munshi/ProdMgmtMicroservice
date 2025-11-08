package com.example.prodservice.repository;
import com.example.prodservice.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;


public interface ProductRepository extends JpaRepository<Product, Long> {
    Optional<Product> findBySku(String sku);

    boolean existsBySku(String sku);
}