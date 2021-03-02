declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace metal {

        class MetalLookAndFeel extends javax.swing.plaf.basic.BasicLookAndFeel {
          static queue: java.lang.ref.ReferenceQueue<javax.swing.LookAndFeel>
          public constructor()
          static isWindows(): boolean
          static useSystemFonts(): boolean
          static usingOcean(): boolean
          public getName(): java.lang.String
          public getID(): java.lang.String
          public getDescription(): java.lang.String
          public isNativeLookAndFeel(): boolean
          public isSupportedLookAndFeel(): boolean
          public getSupportsWindowDecorations(): boolean
          protected initClassDefaults(arg0: javax.swing.UIDefaults): void
          protected initSystemColorDefaults(arg0: javax.swing.UIDefaults): void
          protected initComponentDefaults(arg0: javax.swing.UIDefaults): void
          protected createDefaultTheme(): void
          public getDefaults(): javax.swing.UIDefaults
          public provideErrorFeedback(arg0: java.awt.Component): void
          public static setCurrentTheme(arg0: javax.swing.plaf.metal.MetalTheme): void
          public static getCurrentTheme(): javax.swing.plaf.metal.MetalTheme
          public getDisabledIcon(arg0: javax.swing.JComponent, arg1: javax.swing.Icon): javax.swing.Icon
          public getDisabledSelectedIcon(arg0: javax.swing.JComponent, arg1: javax.swing.Icon): javax.swing.Icon
          public static getControlTextFont(): javax.swing.plaf.FontUIResource
          public static getSystemTextFont(): javax.swing.plaf.FontUIResource
          public static getUserTextFont(): javax.swing.plaf.FontUIResource
          public static getMenuTextFont(): javax.swing.plaf.FontUIResource
          public static getWindowTitleFont(): javax.swing.plaf.FontUIResource
          public static getSubTextFont(): javax.swing.plaf.FontUIResource
          public static getDesktopColor(): javax.swing.plaf.ColorUIResource
          public static getFocusColor(): javax.swing.plaf.ColorUIResource
          public static getWhite(): javax.swing.plaf.ColorUIResource
          public static getBlack(): javax.swing.plaf.ColorUIResource
          public static getControl(): javax.swing.plaf.ColorUIResource
          public static getControlShadow(): javax.swing.plaf.ColorUIResource
          public static getControlDarkShadow(): javax.swing.plaf.ColorUIResource
          public static getControlInfo(): javax.swing.plaf.ColorUIResource
          public static getControlHighlight(): javax.swing.plaf.ColorUIResource
          public static getControlDisabled(): javax.swing.plaf.ColorUIResource
          public static getPrimaryControl(): javax.swing.plaf.ColorUIResource
          public static getPrimaryControlShadow(): javax.swing.plaf.ColorUIResource
          public static getPrimaryControlDarkShadow(): javax.swing.plaf.ColorUIResource
          public static getPrimaryControlInfo(): javax.swing.plaf.ColorUIResource
          public static getPrimaryControlHighlight(): javax.swing.plaf.ColorUIResource
          public static getSystemTextColor(): javax.swing.plaf.ColorUIResource
          public static getControlTextColor(): javax.swing.plaf.ColorUIResource
          public static getInactiveControlTextColor(): javax.swing.plaf.ColorUIResource
          public static getInactiveSystemTextColor(): javax.swing.plaf.ColorUIResource
          public static getUserTextColor(): javax.swing.plaf.ColorUIResource
          public static getTextHighlightColor(): javax.swing.plaf.ColorUIResource
          public static getHighlightedTextColor(): javax.swing.plaf.ColorUIResource
          public static getWindowBackground(): javax.swing.plaf.ColorUIResource
          public static getWindowTitleBackground(): javax.swing.plaf.ColorUIResource
          public static getWindowTitleForeground(): javax.swing.plaf.ColorUIResource
          public static getWindowTitleInactiveBackground(): javax.swing.plaf.ColorUIResource
          public static getWindowTitleInactiveForeground(): javax.swing.plaf.ColorUIResource
          public static getMenuBackground(): javax.swing.plaf.ColorUIResource
          public static getMenuForeground(): javax.swing.plaf.ColorUIResource
          public static getMenuSelectedBackground(): javax.swing.plaf.ColorUIResource
          public static getMenuSelectedForeground(): javax.swing.plaf.ColorUIResource
          public static getMenuDisabledForeground(): javax.swing.plaf.ColorUIResource
          public static getSeparatorBackground(): javax.swing.plaf.ColorUIResource
          public static getSeparatorForeground(): javax.swing.plaf.ColorUIResource
          public static getAcceleratorForeground(): javax.swing.plaf.ColorUIResource
          public static getAcceleratorSelectedForeground(): javax.swing.plaf.ColorUIResource
          public getLayoutStyle(): javax.swing.LayoutStyle
          static flushUnreferenced(): void
        }

      }
    }
  }
}
