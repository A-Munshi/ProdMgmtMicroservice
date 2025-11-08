package com.example.prodservice.service;

import com.example.prodservice.dto.ProductDTO;
import com.example.prodservice.exception.ResourceNotFoundException;
import com.example.prodservice.model.Product;
import com.example.prodservice.repository.ProductRepository;
import com.example.prodservice.service.impl.ProductServiceImpl;
import org.junit.jupiter.api.*;
import org.mockito.*;
import java.math.BigDecimal;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ProductServiceImplTest {

    @Mock
    private ProductRepository repo;

    private ProductServiceImpl svc;

    @BeforeEach
    void init() {
        MockitoAnnotations.openMocks(this);
        svc = new ProductServiceImpl(repo);
    }

    @Test
    void createProduct_savesAndReturnsDto() {
        ProductDTO dto = new ProductDTO();
        dto.setName("Phone");
        dto.setSku("PHN-001");
        dto.setPrice(BigDecimal.valueOf(199.99));
        dto.setQuantity(10);

        Product saved = new Product("Phone","PHN-001","",BigDecimal.valueOf(199.99),10);
        saved.setId(100L);

        when(repo.existsBySku("PHN-001")).thenReturn(false);
        when(repo.save(any(Product.class))).thenReturn(saved);

        ProductDTO result = svc.createProduct(dto);

        assertNotNull(result);
        assertEquals(100L, result.getId());
        assertEquals("Phone", result.getName());
        verify(repo, times(1)).save(any(Product.class));
    }

    @Test
    void getProductById_notFound_throws() {
        when(repo.findById(1L)).thenReturn(Optional.empty());
        assertThrows(ResourceNotFoundException.class, () -> svc.getProductById(1L));
    }
}
