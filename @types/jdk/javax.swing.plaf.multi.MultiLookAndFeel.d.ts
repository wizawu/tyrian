declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace multi {

        class MultiLookAndFeel extends javax.swing.LookAndFeel {
          public constructor()
          public getName(): java.lang.String
          public getID(): java.lang.String
          public getDescription(): java.lang.String
          public isNativeLookAndFeel(): boolean
          public isSupportedLookAndFeel(): boolean
          public getDefaults(): javax.swing.UIDefaults
          public static createUIs(arg0: javax.swing.plaf.ComponentUI, arg1: java.util.Vector<javax.swing.plaf.ComponentUI>, arg2: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          protected static uisToArray(arg0: java.util.Vector<javax.swing.plaf.ComponentUI>): javax.swing.plaf.ComponentUI[]
        }

      }
    }
  }
}
