declare namespace java {
  namespace awt {
    namespace font {

      class TransformAttribute implements java.io.Serializable {
        public static readonly IDENTITY: java.awt.font.TransformAttribute
        static readonly serialVersionUID: long
        public constructor(arg0: java.awt.geom.AffineTransform)
        public getTransform(): java.awt.geom.AffineTransform
        public isIdentity(): boolean
        public hashCode(): int
        public equals(arg0: java.lang.Object): boolean
      }

    }
  }
}
