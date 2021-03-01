declare namespace java {
  namespace awt {
    namespace image {

      class ColorConvertOp implements java.awt.image.BufferedImageOp, java.awt.image.RasterOp {

        profileList: java.awt.color.ICC_Profile[]
        CSList: java.awt.color.ColorSpace[]
        thisTransform: sun.java2d.cmm.ColorTransform
        thisRasterTransform: sun.java2d.cmm.ColorTransform
        thisSrcProfile: java.awt.color.ICC_Profile
        thisDestProfile: java.awt.color.ICC_Profile
        hints: java.awt.RenderingHints
        gotProfiles: boolean
        srcMinVals: float[]
        srcMaxVals: float[]
        dstMinVals: float[]
        dstMaxVals: float[]
        public constructor(arg0: java.awt.RenderingHints)
        public constructor(arg0: java.awt.color.ColorSpace, arg1: java.awt.RenderingHints)
        public constructor(arg0: java.awt.color.ColorSpace, arg1: java.awt.color.ColorSpace, arg2: java.awt.RenderingHints)
        public constructor(arg0: java.awt.color.ICC_Profile[], arg1: java.awt.RenderingHints)
        public readonly getICC_Profiles(): java.awt.color.ICC_Profile[]
        public readonly filter(arg0: java.awt.image.BufferedImage, arg1: java.awt.image.BufferedImage): java.awt.image.BufferedImage
        public readonly filter(arg0: java.awt.image.Raster, arg1: java.awt.image.WritableRaster): java.awt.image.WritableRaster
        public readonly getBounds2D(arg0: java.awt.image.BufferedImage): java.awt.geom.Rectangle2D
        public readonly getBounds2D(arg0: java.awt.image.Raster): java.awt.geom.Rectangle2D
        public createCompatibleDestImage(arg0: java.awt.image.BufferedImage, arg1: java.awt.image.ColorModel): java.awt.image.BufferedImage
        public createCompatibleDestRaster(arg0: java.awt.image.Raster): java.awt.image.WritableRaster
        public readonly getPoint2D(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D): java.awt.geom.Point2D
        public readonly getRenderingHints(): java.awt.RenderingHints
      }

    }
  }
}
