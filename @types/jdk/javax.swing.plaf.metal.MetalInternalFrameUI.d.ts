declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace metal {
        class MetalInternalFrameUI extends javax.swing.plaf.basic.BasicInternalFrameUI {
          protected static IS_PALETTE: java.lang.String
          public constructor(arg0: javax.swing.JInternalFrame)
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected installListeners(): void
          protected uninstallListeners(): void
          protected installKeyboardActions(): void
          protected uninstallKeyboardActions(): void
          protected uninstallComponents(): void
          protected createNorthPane(arg0: javax.swing.JInternalFrame): javax.swing.JComponent
          public setPalette(arg0: boolean | java.lang.Boolean): void
          protected createBorderListener(arg0: javax.swing.JInternalFrame): javax.swing.event.MouseInputAdapter
          static access$000(arg0: javax.swing.plaf.metal.MetalInternalFrameUI): javax.swing.JInternalFrame
          static access$100(
            arg0: javax.swing.plaf.metal.MetalInternalFrameUI
          ): javax.swing.plaf.basic.BasicInternalFrameTitlePane
          static access$200(arg0: javax.swing.plaf.metal.MetalInternalFrameUI): javax.swing.JInternalFrame
          static access$300(
            arg0: javax.swing.plaf.metal.MetalInternalFrameUI
          ): javax.swing.plaf.basic.BasicInternalFrameTitlePane
          static access$400(arg0: javax.swing.plaf.metal.MetalInternalFrameUI): javax.swing.JInternalFrame
          static access$500(arg0: javax.swing.plaf.metal.MetalInternalFrameUI): javax.swing.JInternalFrame
          static access$600(arg0: javax.swing.plaf.metal.MetalInternalFrameUI): javax.swing.JInternalFrame
        }
      }
    }
  }
}
