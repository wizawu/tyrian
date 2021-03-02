declare namespace javax {
  namespace imageio {

    class ImageIO {
      public static scanForPlugins(): void
      public static setUseCache(arg0: boolean | java.lang.Boolean): void
      public static getUseCache(): boolean
      public static setCacheDirectory(arg0: java.io.File): void
      public static getCacheDirectory(): java.io.File
      public static createImageInputStream(arg0: java.lang.Object | any): javax.imageio.stream.ImageInputStream
      public static createImageOutputStream(arg0: java.lang.Object | any): javax.imageio.stream.ImageOutputStream
      public static getReaderFormatNames(): java.lang.String[]
      public static getReaderMIMETypes(): java.lang.String[]
      public static getReaderFileSuffixes(): java.lang.String[]
      public static getImageReaders(arg0: java.lang.Object | any): java.util.Iterator<javax.imageio.ImageReader>
      public static getImageReadersByFormatName(arg0: java.lang.String | string): java.util.Iterator<javax.imageio.ImageReader>
      public static getImageReadersBySuffix(arg0: java.lang.String | string): java.util.Iterator<javax.imageio.ImageReader>
      public static getImageReadersByMIMEType(arg0: java.lang.String | string): java.util.Iterator<javax.imageio.ImageReader>
      public static getWriterFormatNames(): java.lang.String[]
      public static getWriterMIMETypes(): java.lang.String[]
      public static getWriterFileSuffixes(): java.lang.String[]
      public static getImageWritersByFormatName(arg0: java.lang.String | string): java.util.Iterator<javax.imageio.ImageWriter>
      public static getImageWritersBySuffix(arg0: java.lang.String | string): java.util.Iterator<javax.imageio.ImageWriter>
      public static getImageWritersByMIMEType(arg0: java.lang.String | string): java.util.Iterator<javax.imageio.ImageWriter>
      public static getImageWriter(arg0: javax.imageio.ImageReader): javax.imageio.ImageWriter
      public static getImageReader(arg0: javax.imageio.ImageWriter): javax.imageio.ImageReader
      public static getImageWriters(arg0: javax.imageio.ImageTypeSpecifier, arg1: java.lang.String | string): java.util.Iterator<javax.imageio.ImageWriter>
      public static getImageTranscoders(arg0: javax.imageio.ImageReader, arg1: javax.imageio.ImageWriter): java.util.Iterator<javax.imageio.ImageTranscoder>
      public static read(arg0: java.io.File): java.awt.image.BufferedImage
      public static read(arg0: java.io.InputStream): java.awt.image.BufferedImage
      public static read(arg0: java.net.URL): java.awt.image.BufferedImage
      public static read(arg0: javax.imageio.stream.ImageInputStream): java.awt.image.BufferedImage
      public static write(arg0: java.awt.image.RenderedImage, arg1: java.lang.String | string, arg2: javax.imageio.stream.ImageOutputStream): boolean
      public static write(arg0: java.awt.image.RenderedImage, arg1: java.lang.String | string, arg2: java.io.File): boolean
      public static write(arg0: java.awt.image.RenderedImage, arg1: java.lang.String | string, arg2: java.io.OutputStream): boolean
    }

  }
}
