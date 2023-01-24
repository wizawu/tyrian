declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {
        class BasicArrowButton extends javax.swing.JButton implements javax.swing.SwingConstants {
          protected direction: int
          public constructor(
            arg0: number | java.lang.Integer,
            arg1: java.awt.Color,
            arg2: java.awt.Color,
            arg3: java.awt.Color,
            arg4: java.awt.Color
          )
          public constructor(arg0: number | java.lang.Integer)
          public getDirection(): number
          public setDirection(arg0: number | java.lang.Integer): void
          public paint(arg0: java.awt.Graphics): void
          public getPreferredSize(): java.awt.Dimension
          public getMinimumSize(): java.awt.Dimension
          public getMaximumSize(): java.awt.Dimension
          public isFocusTraversable(): boolean
          public paintTriangle(
            arg0: java.awt.Graphics,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer,
            arg5: boolean | java.lang.Boolean
          ): void
        }
      }
    }
  }
}
