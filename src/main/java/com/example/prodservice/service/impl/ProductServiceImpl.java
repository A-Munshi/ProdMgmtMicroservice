package com.example.prodservice.service.impl;
import com.example.prodservice.dto.ProductDTO;
import com.example.prodservice.exception.ResourceNotFoundException;
import com.example.prodservice.model.Product;
import com.example.prodservice.repository.ProductRepository;
import com.example.prodservice.service.ProductService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {

    private final ProductRepository repo;

    public ProductServiceImpl(ProductRepository repo) {
        this.repo = repo;
    }

    private ProductDTO toDTO(Product p) {
        ProductDTO d = new ProductDTO();
        d.setId(p.getId());
        d.setName(p.getName());
        d.setSku(p.getSku());
        d.setDescription(p.getDescription());
        d.setPrice(p.getPrice());
        d.setQuantity(p.getQuantity());
        return d;
    }

    private Product toEntity(ProductDTO d) {
        Product p = new Product();
        p.setName(d.getName());
        p.setSku(d.getSku());
        p.setDescription(d.getDescription());
        p.setPrice(d.getPrice());
        p.setQuantity(d.getQuantity());
        return p;
    }

    @Override
    public ProductDTO createProduct(ProductDTO dto) {
        if (repo.existsBySku(dto.getSku())) {
            throw new IllegalArgumentException("SKU already exists.");
        }
        Product saved = repo.save(toEntity(dto));
        return toDTO(saved);
    }

    @Override
    public ProductDTO updateProduct(Long id, ProductDTO dto) {
        Product p = repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product", "id", id));
        p.setName(dto.getName());
        p.setDescription(dto.getDescription());
        p.setPrice(dto.getPrice());
        p.setQuantity(dto.getQuantity());
        // If SKU update needed, handle uniqueness check here
        return toDTO(repo.save(p));
    }

    @Override
    public ProductDTO getProductById(Long id) {
        return repo.findById(id).map(this::toDTO).orElseThrow(() -> new ResourceNotFoundException("Product","id",id));
    }

    @Override
    public List<ProductDTO> listAll() {
        return repo.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    public void deleteProduct(Long id) {
        if (!repo.existsById(id)) throw new ResourceNotFoundException("Product","id",id);
        repo.deleteById(id);
    }
}