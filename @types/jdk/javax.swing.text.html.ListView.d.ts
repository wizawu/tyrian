declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {
        class ListView extends javax.swing.text.html.BlockView {
          public constructor(arg0: javax.swing.text.Element)
          public getAlignment(arg0: number | java.lang.Integer): number
          public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
          protected paintChild(
            arg0: java.awt.Graphics,
            arg1: java.awt.Rectangle,
            arg2: number | java.lang.Integer
          ): void
          protected setPropertiesFromAttributes(): void
        }
      }
    }
  }
}
