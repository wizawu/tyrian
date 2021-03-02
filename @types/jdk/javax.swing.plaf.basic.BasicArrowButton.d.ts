declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        class BasicArrowButton extends javax.swing.JButton implements javax.swing.SwingConstants {
          protected direction: int
          public constructor(arg0: int, arg1: java.awt.Color, arg2: java.awt.Color, arg3: java.awt.Color, arg4: java.awt.Color)
          public constructor(arg0: int)
          public getDirection(): int
          public setDirection(arg0: int): void
          public paint(arg0: java.awt.Graphics): void
          public getPreferredSize(): java.awt.Dimension
          public getMinimumSize(): java.awt.Dimension
          public getMaximumSize(): java.awt.Dimension
          public isFocusTraversable(): boolean
          public paintTriangle(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: boolean): void
        }

      }
    }
  }
}
