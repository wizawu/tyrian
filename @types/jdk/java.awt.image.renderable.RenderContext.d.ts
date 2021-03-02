declare namespace java {
  namespace awt {
    namespace image {
      namespace renderable {

        class RenderContext implements java.lang.Cloneable {
          hints: java.awt.RenderingHints
          usr2dev: java.awt.geom.AffineTransform
          aoi: java.awt.Shape
          public constructor(arg0: java.awt.geom.AffineTransform, arg1: java.awt.Shape, arg2: java.awt.RenderingHints)
          public constructor(arg0: java.awt.geom.AffineTransform)
          public constructor(arg0: java.awt.geom.AffineTransform, arg1: java.awt.RenderingHints)
          public constructor(arg0: java.awt.geom.AffineTransform, arg1: java.awt.Shape)
          public getRenderingHints(): java.awt.RenderingHints
          public setRenderingHints(arg0: java.awt.RenderingHints): void
          public setTransform(arg0: java.awt.geom.AffineTransform): void
          public preConcatenateTransform(arg0: java.awt.geom.AffineTransform): void
          public preConcetenateTransform(arg0: java.awt.geom.AffineTransform): void
          public concatenateTransform(arg0: java.awt.geom.AffineTransform): void
          public concetenateTransform(arg0: java.awt.geom.AffineTransform): void
          public getTransform(): java.awt.geom.AffineTransform
          public setAreaOfInterest(arg0: java.awt.Shape): void
          public getAreaOfInterest(): java.awt.Shape
          public clone(): java.lang.Object
        }

      }
    }
  }
}
