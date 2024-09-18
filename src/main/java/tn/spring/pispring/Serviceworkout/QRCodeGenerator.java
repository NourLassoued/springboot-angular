package tn.spring.pispring.Serviceworkout;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
public class QRCodeGenerator {
    // Méthode pour générer une image QR code à partir d'une chaîne de texte
    public static byte[] generateQRCodeImage(String participationEvent) throws WriterException, IOException {
        int width = 300;
        int height = 300;
        Map<EncodeHintType, ErrorCorrectionLevel> hintMap = new HashMap<>();
        hintMap.put(EncodeHintType.ERROR_CORRECTION, ErrorCorrectionLevel.L);
        // Initialisation du générateur de code QR
        QRCodeWriter qrCodeWriter = new QRCodeWriter();
        BitMatrix bitMatrix = qrCodeWriter.encode(participationEvent, BarcodeFormat.QR_CODE, width, height, hintMap);
        // Création d'une image BufferedImage pour le QR code
        BufferedImage bufferedImage = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
        bufferedImage.createGraphics();

        Graphics2D graphics = (Graphics2D) bufferedImage.getGraphics();
        graphics.setColor(Color.WHITE);
        graphics.fillRect(0, 0, width, height);
        graphics.setColor(Color.BLACK);
        // Parcours de la matrice de bits pour dessiner le QR code
        for (int i = 0; i < height; i++) {
            for (int j = 0; j < width; j++) {
                if (((BitMatrix) bitMatrix).get(i, j)) {
                    graphics.fillRect(i, j, 1, 1);
                }
            }
        }
// Conversion de l'image BufferedImage en tableau de bytes
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        ImageIO.write(bufferedImage, "png", byteArrayOutputStream);

        return byteArrayOutputStream.toByteArray();
    }
}
