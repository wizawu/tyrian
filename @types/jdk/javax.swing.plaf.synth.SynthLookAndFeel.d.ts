declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {
        class SynthLookAndFeel extends javax.swing.plaf.basic.BasicLookAndFeel {
          static readonly EMPTY_UIRESOURCE_INSETS: java.awt.Insets
          static getSelectedUI(): javax.swing.plaf.ComponentUI
          static setSelectedUI(
            arg0: javax.swing.plaf.ComponentUI,
            arg1: boolean | java.lang.Boolean,
            arg2: boolean | java.lang.Boolean,
            arg3: boolean | java.lang.Boolean,
            arg4: boolean | java.lang.Boolean
          ): void
          static getSelectedUIState(): number
          static resetSelectedUI(): void
          public static setStyleFactory(arg0: javax.swing.plaf.synth.SynthStyleFactory): void
          public static getStyleFactory(): javax.swing.plaf.synth.SynthStyleFactory
          static getComponentState(arg0: java.awt.Component): number
          public static getStyle(
            arg0: javax.swing.JComponent,
            arg1: javax.swing.plaf.synth.Region
          ): javax.swing.plaf.synth.SynthStyle
          static shouldUpdateStyle(arg0: java.beans.PropertyChangeEvent): boolean
          static updateStyle(
            arg0: javax.swing.plaf.synth.SynthContext,
            arg1: javax.swing.plaf.synth.SynthUI
          ): javax.swing.plaf.synth.SynthStyle
          public static updateStyles(arg0: java.awt.Component): void
          public static getRegion(arg0: javax.swing.JComponent): javax.swing.plaf.synth.Region
          static getPaintingInsets(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Insets): java.awt.Insets
          static update(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
          static updateSubregion(
            arg0: javax.swing.plaf.synth.SynthContext,
            arg1: java.awt.Graphics,
            arg2: java.awt.Rectangle
          ): void
          static isLeftToRight(arg0: java.awt.Component): boolean
          static getUIOfType(arg0: javax.swing.plaf.ComponentUI, arg1: java.lang.Class<unknown>): java.lang.Object
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public constructor()
          public load(arg0: java.io.InputStream, arg1: java.lang.Class<unknown>): void
          public load(arg0: java.net.URL): void
          public initialize(): void
          public uninitialize(): void
          public getDefaults(): javax.swing.UIDefaults
          public isSupportedLookAndFeel(): boolean
          public isNativeLookAndFeel(): boolean
          public getDescription(): java.lang.String
          public getName(): java.lang.String
          public getID(): java.lang.String
          public shouldUpdateStyleOnAncestorChanged(): boolean
          protected shouldUpdateStyleOnEvent(arg0: java.beans.PropertyChangeEvent): boolean
        }
      }
    }
  }
}
