declare namespace java {
  namespace awt {
    namespace font {

      class FontRenderContext {
        protected constructor()
        public constructor(arg0: java.awt.geom.AffineTransform, arg1: boolean | java.lang.Boolean, arg2: boolean | java.lang.Boolean)
        public constructor(arg0: java.awt.geom.AffineTransform, arg1: java.lang.Object | any, arg2: java.lang.Object | any)
        public isTransformed(): boolean
        public getTransformType(): number
        public getTransform(): java.awt.geom.AffineTransform
        public isAntiAliased(): boolean
        public usesFractionalMetrics(): boolean
        public getAntiAliasingHint(): java.lang.Object
        public getFractionalMetricsHint(): java.lang.Object
        public equals(arg0: java.lang.Object | any): boolean
        public equals(arg0: java.awt.font.FontRenderContext): boolean
        public hashCode(): number
      }

    }
  }
}
