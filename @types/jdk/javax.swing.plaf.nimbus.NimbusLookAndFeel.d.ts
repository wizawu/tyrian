declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace nimbus {
        class NimbusLookAndFeel extends javax.swing.plaf.synth.SynthLookAndFeel {
          public constructor()
          public initialize(): void
          public uninitialize(): void
          public getDefaults(): javax.swing.UIDefaults
          public static getStyle(
            arg0: javax.swing.JComponent,
            arg1: javax.swing.plaf.synth.Region
          ): javax.swing.plaf.nimbus.NimbusStyle
          public getName(): java.lang.String
          public getID(): java.lang.String
          public getDescription(): java.lang.String
          public shouldUpdateStyleOnAncestorChanged(): boolean
          protected shouldUpdateStyleOnEvent(arg0: java.beans.PropertyChangeEvent): boolean
          public register(arg0: javax.swing.plaf.synth.Region, arg1: java.lang.String | string): void
          public getDisabledIcon(arg0: javax.swing.JComponent, arg1: javax.swing.Icon): javax.swing.Icon
          public getDerivedColor(
            arg0: java.lang.String | string,
            arg1: number | java.lang.Float,
            arg2: number | java.lang.Float,
            arg3: number | java.lang.Float,
            arg4: number | java.lang.Integer,
            arg5: boolean | java.lang.Boolean
          ): java.awt.Color
          protected getDerivedColor(
            arg0: java.awt.Color,
            arg1: java.awt.Color,
            arg2: number | java.lang.Float,
            arg3: boolean | java.lang.Boolean
          ): java.awt.Color
          protected getDerivedColor(
            arg0: java.awt.Color,
            arg1: java.awt.Color,
            arg2: number | java.lang.Float
          ): java.awt.Color
          static resolveToolbarConstraint(arg0: javax.swing.JToolBar): java.lang.Object
          static deriveARGB(arg0: java.awt.Color, arg1: java.awt.Color, arg2: number | java.lang.Float): number
          static parsePrefix(arg0: java.lang.String | string): java.lang.String
          getDefaultsForPrefix(arg0: java.lang.String | string): java.util.Map<java.lang.String, java.lang.Object>
        }
      }
    }
  }
}
