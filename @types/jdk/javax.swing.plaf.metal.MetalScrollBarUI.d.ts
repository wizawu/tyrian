declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace metal {

        class MetalScrollBarUI extends javax.swing.plaf.basic.BasicScrollBarUI {
          protected increaseButton: javax.swing.plaf.metal.MetalScrollButton
          protected decreaseButton: javax.swing.plaf.metal.MetalScrollButton
          protected scrollBarWidth: int
          public static readonly FREE_STANDING_PROP: java.lang.String
          protected isFreeStanding: boolean
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          protected installDefaults(): void
          protected installListeners(): void
          protected createPropertyChangeListener(): java.beans.PropertyChangeListener
          protected configureScrollBarColors(): void
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          protected createDecreaseButton(arg0: int): javax.swing.JButton
          protected createIncreaseButton(arg0: int): javax.swing.JButton
          protected paintTrack(arg0: java.awt.Graphics, arg1: javax.swing.JComponent, arg2: java.awt.Rectangle): void
          protected paintThumb(arg0: java.awt.Graphics, arg1: javax.swing.JComponent, arg2: java.awt.Rectangle): void
          protected getMinimumThumbSize(): java.awt.Dimension
          protected setThumbBounds(arg0: int, arg1: int, arg2: int, arg3: int): void
        }

      }
    }
  }
}
