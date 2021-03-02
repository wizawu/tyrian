declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace nimbus {

        class NimbusLookAndFeel extends javax.swing.plaf.synth.SynthLookAndFeel {
          public constructor()
          public initialize(): void
          public uninitialize(): void
          public getDefaults(): javax.swing.UIDefaults
          public static getStyle(arg0: javax.swing.JComponent, arg1: javax.swing.plaf.synth.Region): javax.swing.plaf.nimbus.NimbusStyle
          public getName(): java.lang.String
          public getID(): java.lang.String
          public getDescription(): java.lang.String
          public shouldUpdateStyleOnAncestorChanged(): boolean
          protected shouldUpdateStyleOnEvent(arg0: java.beans.PropertyChangeEvent): boolean
          public register(arg0: javax.swing.plaf.synth.Region, arg1: java.lang.String): void
          public getDisabledIcon(arg0: javax.swing.JComponent, arg1: javax.swing.Icon): javax.swing.Icon
          public getDerivedColor(arg0: java.lang.String, arg1: float, arg2: float, arg3: float, arg4: int, arg5: boolean): java.awt.Color
          protected getDerivedColor(arg0: java.awt.Color, arg1: java.awt.Color, arg2: float, arg3: boolean): java.awt.Color
          protected getDerivedColor(arg0: java.awt.Color, arg1: java.awt.Color, arg2: float): java.awt.Color
          static resolveToolbarConstraint(arg0: javax.swing.JToolBar): java.lang.Object
          static deriveARGB(arg0: java.awt.Color, arg1: java.awt.Color, arg2: float): int
          static parsePrefix(arg0: java.lang.String): java.lang.String
          getDefaultsForPrefix(arg0: java.lang.String): java.util.Map<java.lang.String,java.lang.Object>
        }

      }
    }
  }
}
