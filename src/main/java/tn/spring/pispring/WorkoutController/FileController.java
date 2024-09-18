package tn.spring.pispring.WorkoutController;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/files")
@CrossOrigin("*")
public class FileController {

    private static final String UPLOAD_DIR = "C:/xampppidev/htdocs/img/";


    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return new ResponseEntity<>("The file is empty", HttpStatus.BAD_REQUEST);
        }

        try {
            byte[] bytes = file.getBytes();
            // Créer le chemin du fichier
            Path path = Paths.get(UPLOAD_DIR + file.getOriginalFilename());
            // Créer les répertoires s'ils n'existent pas
            Files.createDirectories(path.getParent());
            Files.write(path, bytes);

            return new ResponseEntity<>("File uploaded successfully: " + file.getOriginalFilename(), HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/get-image/{filename:.+}")
        public ResponseEntity<Resource> getImage(@PathVariable String filename) {
        try {
            Path file = Paths.get(UPLOAD_DIR).resolve(filename);
            // Récupérer la ressource du fichier
            Resource resource = new UrlResource(file.toUri());
            // Vérifier si la ressource existe et est lisible
            if (resource.exists() && resource.isReadable()) {
                return ResponseEntity.ok()
                        .contentType(MediaType.IMAGE_JPEG)
                        .body(resource);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(null); // or return a custom error message
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null); // or return a custom error message
        }
    }
}