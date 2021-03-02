declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        abstract class BasicLookAndFeel extends javax.swing.LookAndFeel implements java.io.Serializable {
          static needsEventHelper: boolean
          invocator: javax.swing.plaf.basic.BasicLookAndFeel$AWTEventHelper
          public constructor()
          public getDefaults(): javax.swing.UIDefaults
          public initialize(): void
          installAWTEventListener(): void
          public uninitialize(): void
          protected initClassDefaults(arg0: javax.swing.UIDefaults): void
          protected initSystemColorDefaults(arg0: javax.swing.UIDefaults): void
          protected loadSystemColors(arg0: javax.swing.UIDefaults, arg1: java.lang.String[], arg2: boolean): void
          protected initComponentDefaults(arg0: javax.swing.UIDefaults): void
          static getFocusAcceleratorKeyMask(): int
          static getUIOfType(arg0: javax.swing.plaf.ComponentUI, arg1: java.lang.Class<unknown>): java.lang.Object
          protected getAudioActionMap(): javax.swing.ActionMap
          protected createAudioAction(arg0: java.lang.Object): javax.swing.Action
          protected playSound(arg0: javax.swing.Action): void
          static installAudioActionMap(arg0: javax.swing.ActionMap): void
          static playSound(arg0: javax.swing.JComponent, arg1: java.lang.Object): void
        }

      }
    }
  }
}
