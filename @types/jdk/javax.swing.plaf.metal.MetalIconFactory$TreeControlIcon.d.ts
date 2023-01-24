declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace metal {
        class MetalIconFactory$TreeControlIcon implements javax.swing.Icon, java.io.Serializable {
          protected isLight: boolean
          imageCacher: javax.swing.plaf.metal.MetalIconFactory$ImageCacher
          cachedOrientation: boolean
          public constructor(arg0: boolean | java.lang.Boolean)
          public paintIcon(
            arg0: java.awt.Component,
            arg1: java.awt.Graphics,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer
          ): void
          public paintMe(
            arg0: java.awt.Component,
            arg1: java.awt.Graphics,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer
          ): void
          public getIconWidth(): number
          public getIconHeight(): number
        }
      }
    }
  }
}
