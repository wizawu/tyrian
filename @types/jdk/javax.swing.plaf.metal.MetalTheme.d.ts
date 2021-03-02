declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace metal {

        abstract class MetalTheme {
          static readonly CONTROL_TEXT_FONT: int
          static readonly SYSTEM_TEXT_FONT: int
          static readonly USER_TEXT_FONT: int
          static readonly MENU_TEXT_FONT: int
          static readonly WINDOW_TITLE_FONT: int
          static readonly SUB_TEXT_FONT: int
          static white: javax.swing.plaf.ColorUIResource
          public constructor()
          public abstract getName(): java.lang.String
          protected abstract getPrimary1(): javax.swing.plaf.ColorUIResource
          protected abstract getPrimary2(): javax.swing.plaf.ColorUIResource
          protected abstract getPrimary3(): javax.swing.plaf.ColorUIResource
          protected abstract getSecondary1(): javax.swing.plaf.ColorUIResource
          protected abstract getSecondary2(): javax.swing.plaf.ColorUIResource
          protected abstract getSecondary3(): javax.swing.plaf.ColorUIResource
          public abstract getControlTextFont(): javax.swing.plaf.FontUIResource
          public abstract getSystemTextFont(): javax.swing.plaf.FontUIResource
          public abstract getUserTextFont(): javax.swing.plaf.FontUIResource
          public abstract getMenuTextFont(): javax.swing.plaf.FontUIResource
          public abstract getWindowTitleFont(): javax.swing.plaf.FontUIResource
          public abstract getSubTextFont(): javax.swing.plaf.FontUIResource
          protected getWhite(): javax.swing.plaf.ColorUIResource
          protected getBlack(): javax.swing.plaf.ColorUIResource
          public getFocusColor(): javax.swing.plaf.ColorUIResource
          public getDesktopColor(): javax.swing.plaf.ColorUIResource
          public getControl(): javax.swing.plaf.ColorUIResource
          public getControlShadow(): javax.swing.plaf.ColorUIResource
          public getControlDarkShadow(): javax.swing.plaf.ColorUIResource
          public getControlInfo(): javax.swing.plaf.ColorUIResource
          public getControlHighlight(): javax.swing.plaf.ColorUIResource
          public getControlDisabled(): javax.swing.plaf.ColorUIResource
          public getPrimaryControl(): javax.swing.plaf.ColorUIResource
          public getPrimaryControlShadow(): javax.swing.plaf.ColorUIResource
          public getPrimaryControlDarkShadow(): javax.swing.plaf.ColorUIResource
          public getPrimaryControlInfo(): javax.swing.plaf.ColorUIResource
          public getPrimaryControlHighlight(): javax.swing.plaf.ColorUIResource
          public getSystemTextColor(): javax.swing.plaf.ColorUIResource
          public getControlTextColor(): javax.swing.plaf.ColorUIResource
          public getInactiveControlTextColor(): javax.swing.plaf.ColorUIResource
          public getInactiveSystemTextColor(): javax.swing.plaf.ColorUIResource
          public getUserTextColor(): javax.swing.plaf.ColorUIResource
          public getTextHighlightColor(): javax.swing.plaf.ColorUIResource
          public getHighlightedTextColor(): javax.swing.plaf.ColorUIResource
          public getWindowBackground(): javax.swing.plaf.ColorUIResource
          public getWindowTitleBackground(): javax.swing.plaf.ColorUIResource
          public getWindowTitleForeground(): javax.swing.plaf.ColorUIResource
          public getWindowTitleInactiveBackground(): javax.swing.plaf.ColorUIResource
          public getWindowTitleInactiveForeground(): javax.swing.plaf.ColorUIResource
          public getMenuBackground(): javax.swing.plaf.ColorUIResource
          public getMenuForeground(): javax.swing.plaf.ColorUIResource
          public getMenuSelectedBackground(): javax.swing.plaf.ColorUIResource
          public getMenuSelectedForeground(): javax.swing.plaf.ColorUIResource
          public getMenuDisabledForeground(): javax.swing.plaf.ColorUIResource
          public getSeparatorBackground(): javax.swing.plaf.ColorUIResource
          public getSeparatorForeground(): javax.swing.plaf.ColorUIResource
          public getAcceleratorForeground(): javax.swing.plaf.ColorUIResource
          public getAcceleratorSelectedForeground(): javax.swing.plaf.ColorUIResource
          public addCustomEntriesToTable(arg0: javax.swing.UIDefaults): void
          install(): void
          isSystemTheme(): boolean
        }

      }
    }
  }
}
