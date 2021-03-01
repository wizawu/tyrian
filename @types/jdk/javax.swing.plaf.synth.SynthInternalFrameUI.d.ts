declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {

        class SynthInternalFrameUI extends javax.swing.plaf.basic.BasicInternalFrameUI implements javax.swing.plaf.synth.SynthUI, java.beans.PropertyChangeListener {

          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          protected constructor(arg0: javax.swing.JInternalFrame)
          public installDefaults(): void
          protected installListeners(): void
          protected uninstallComponents(): void
          protected uninstallListeners(): void
          protected uninstallDefaults(): void
          public getContext(arg0: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
          protected createNorthPane(arg0: javax.swing.JInternalFrame): javax.swing.JComponent
          protected createComponentListener(): java.awt.event.ComponentListener
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
          public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
          public propertyChange(arg0: java.beans.PropertyChangeEvent): void
          static access$000(arg0: javax.swing.plaf.synth.SynthInternalFrameUI): javax.swing.JInternalFrame
          static access$100(arg0: javax.swing.plaf.synth.SynthInternalFrameUI): javax.swing.JInternalFrame
          static access$200(arg0: javax.swing.plaf.synth.SynthInternalFrameUI): javax.swing.JInternalFrame
          static access$300(arg0: javax.swing.plaf.synth.SynthInternalFrameUI): javax.swing.JInternalFrame
          static access$400(arg0: javax.swing.plaf.synth.SynthInternalFrameUI): javax.swing.JInternalFrame
          static access$502(arg0: javax.swing.plaf.synth.SynthInternalFrameUI, arg1: javax.swing.JInternalFrame): javax.swing.JInternalFrame
          static access$602(arg0: javax.swing.plaf.synth.SynthInternalFrameUI, arg1: javax.swing.JInternalFrame): javax.swing.JInternalFrame
        }

      }
    }
  }
}
