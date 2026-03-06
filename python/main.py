# Importacion de Libreria para generar códigos QR puros
import qrcode


# Función Principal
def main() -> None:
    texto: str = input("Texto a Convertir en QR: ")
    img = qrcode.make(texto)
    img.save("codigo_qr.png")
    print("Código QR generado exitosamente.")

if __name__ == "__main__":
    main()