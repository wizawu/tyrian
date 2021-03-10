declare namespace javax {
  namespace imageio {

    class ImageTypeSpecifier {
      protected colorModel: java.awt.image.ColorModel
      protected sampleModel: java.awt.image.SampleModel
      public constructor(arg0: java.awt.image.ColorModel, arg1: java.awt.image.SampleModel)
      public constructor(arg0: java.awt.image.RenderedImage)
      public static createPacked(arg0: java.awt.color.ColorSpace, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: boolean | java.lang.Boolean): javax.imageio.ImageTypeSpecifier
      static createComponentCM(arg0: java.awt.color.ColorSpace, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: boolean | java.lang.Boolean, arg4: boolean | java.lang.Boolean): java.awt.image.ColorModel
      public static createInterleaved(arg0: java.awt.color.ColorSpace, arg1: number[] | java.lang.Integer[], arg2: number | java.lang.Integer, arg3: boolean | java.lang.Boolean, arg4: boolean | java.lang.Boolean): javax.imageio.ImageTypeSpecifier
      public static createBanded(arg0: java.awt.color.ColorSpace, arg1: number[] | java.lang.Integer[], arg2: number[] | java.lang.Integer[], arg3: number | java.lang.Integer, arg4: boolean | java.lang.Boolean, arg5: boolean | java.lang.Boolean): javax.imageio.ImageTypeSpecifier
      public static createGrayscale(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: boolean | java.lang.Boolean): javax.imageio.ImageTypeSpecifier
      public static createGrayscale(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: boolean | java.lang.Boolean, arg3: boolean | java.lang.Boolean): javax.imageio.ImageTypeSpecifier
      public static createIndexed(arg0: number[] | java.lang.Byte[], arg1: number[] | java.lang.Byte[], arg2: number[] | java.lang.Byte[], arg3: number[] | java.lang.Byte[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): javax.imageio.ImageTypeSpecifier
      public static createFromBufferedImageType(arg0: number | java.lang.Integer): javax.imageio.ImageTypeSpecifier
      public static createFromRenderedImage(arg0: java.awt.image.RenderedImage): javax.imageio.ImageTypeSpecifier
      public getBufferedImageType(): number
      public getNumComponents(): number
      public getNumBands(): number
      public getBitsPerBand(arg0: number | java.lang.Integer): number
      public getSampleModel(): java.awt.image.SampleModel
      public getSampleModel(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.image.SampleModel
      public getColorModel(): java.awt.image.ColorModel
      public createBufferedImage(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.image.BufferedImage
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
    }

  }
}
