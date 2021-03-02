declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {

        class SynthMenuItemUI extends javax.swing.plaf.basic.BasicMenuItemUI implements java.beans.PropertyChangeListener, javax.swing.plaf.synth.SynthUI {
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected installDefaults(): void
          protected installListeners(): void
          protected uninstallDefaults(): void
          protected uninstallListeners(): void
          public getContext(arg0: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
          getContext(arg0: javax.swing.JComponent, arg1: int): javax.swing.plaf.synth.SynthContext
          getContext(arg0: javax.swing.JComponent, arg1: javax.swing.plaf.synth.Region): javax.swing.plaf.synth.SynthContext
          protected getPreferredMenuItemSize(arg0: javax.swing.JComponent, arg1: javax.swing.Icon, arg2: javax.swing.Icon, arg3: int): java.awt.Dimension
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
          paintBackground(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: javax.swing.JComponent): void
          public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
          public propertyChange(arg0: java.beans.PropertyChangeEvent): void
        }

      }
    }
  }
}
