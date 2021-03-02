declare namespace java {
  namespace awt {
    namespace image {
      namespace renderable {

        interface RenderableImage {
          public static readonly HINTS_OBSERVED: java.lang.String
          getSources(): java.util.Vector<java.awt.image.renderable.RenderableImage>
          getProperty(arg0: java.lang.String | string): java.lang.Object
          getPropertyNames(): java.lang.String[]
          isDynamic(): boolean
          getWidth(): number
          getHeight(): number
          getMinX(): number
          getMinY(): number
          createScaledRendering(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.awt.RenderingHints): java.awt.image.RenderedImage
          createDefaultRendering(): java.awt.image.RenderedImage
          createRendering(arg0: java.awt.image.renderable.RenderContext): java.awt.image.RenderedImage
        }

      }
    }
  }
}
