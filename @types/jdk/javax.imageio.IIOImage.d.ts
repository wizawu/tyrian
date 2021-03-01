declare namespace javax {
  namespace imageio {

    class IIOImage {

      protected image: java.awt.image.RenderedImage
      protected raster: java.awt.image.Raster
      protected thumbnails: java.util.List<java.awt.image.BufferedImage>
      protected metadata: javax.imageio.metadata.IIOMetadata
      public constructor(arg0: java.awt.image.RenderedImage, arg1: java.util.List<java.awt.image.BufferedImage>, arg2: javax.imageio.metadata.IIOMetadata)
      public constructor(arg0: java.awt.image.Raster, arg1: java.util.List<java.awt.image.BufferedImage>, arg2: javax.imageio.metadata.IIOMetadata)
      public getRenderedImage(): java.awt.image.RenderedImage
      public setRenderedImage(arg0: java.awt.image.RenderedImage): void
      public hasRaster(): boolean
      public getRaster(): java.awt.image.Raster
      public setRaster(arg0: java.awt.image.Raster): void
      public getNumThumbnails(): int
      public getThumbnail(arg0: int): java.awt.image.BufferedImage
      public getThumbnails(): java.util.List<java.awt.image.BufferedImage>
      public setThumbnails(arg0: java.util.List<java.awt.image.BufferedImage>): void
      public getMetadata(): javax.imageio.metadata.IIOMetadata
      public setMetadata(arg0: javax.imageio.metadata.IIOMetadata): void
    }

  }
}
