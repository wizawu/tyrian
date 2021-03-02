declare namespace java {
  namespace awt {
    namespace image {
      namespace renderable {

        class RenderableImageOp implements java.awt.image.renderable.RenderableImage {
          paramBlock: java.awt.image.renderable.ParameterBlock
          myCRIF: java.awt.image.renderable.ContextualRenderedImageFactory
          boundingBox: java.awt.geom.Rectangle2D
          public constructor(arg0: java.awt.image.renderable.ContextualRenderedImageFactory, arg1: java.awt.image.renderable.ParameterBlock)
          public getSources(): java.util.Vector<java.awt.image.renderable.RenderableImage>
          public getProperty(arg0: java.lang.String | string): java.lang.Object
          public getPropertyNames(): java.lang.String[]
          public isDynamic(): boolean
          public getWidth(): number
          public getHeight(): number
          public getMinX(): number
          public getMinY(): number
          public setParameterBlock(arg0: java.awt.image.renderable.ParameterBlock): java.awt.image.renderable.ParameterBlock
          public getParameterBlock(): java.awt.image.renderable.ParameterBlock
          public createScaledRendering(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.awt.RenderingHints): java.awt.image.RenderedImage
          public createDefaultRendering(): java.awt.image.RenderedImage
          public createRendering(arg0: java.awt.image.renderable.RenderContext): java.awt.image.RenderedImage
        }

      }
    }
  }
}
