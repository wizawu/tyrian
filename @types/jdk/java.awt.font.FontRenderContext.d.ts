declare namespace java {
  namespace awt {
    namespace font {

      class FontRenderContext {

        protected constructor()
        public constructor(arg0: java.awt.geom.AffineTransform, arg1: boolean, arg2: boolean)
        public constructor(arg0: java.awt.geom.AffineTransform, arg1: java.lang.Object, arg2: java.lang.Object)
        public isTransformed(): boolean
        public getTransformType(): int
        public getTransform(): java.awt.geom.AffineTransform
        public isAntiAliased(): boolean
        public usesFractionalMetrics(): boolean
        public getAntiAliasingHint(): java.lang.Object
        public getFractionalMetricsHint(): java.lang.Object
        public equals(arg0: java.lang.Object): boolean
        public equals(arg0: java.awt.font.FontRenderContext): boolean
        public hashCode(): int
      }

    }
  }
}
