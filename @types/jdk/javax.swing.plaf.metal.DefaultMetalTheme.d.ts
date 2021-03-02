declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace metal {

        class DefaultMetalTheme extends javax.swing.plaf.metal.MetalTheme {
          static getDefaultFontName(arg0: number | java.lang.Integer): java.lang.String
          static getDefaultFontSize(arg0: number | java.lang.Integer): number
          static getDefaultFontStyle(arg0: number | java.lang.Integer): number
          static getDefaultPropertyName(arg0: number | java.lang.Integer): java.lang.String
          public getName(): java.lang.String
          public constructor()
          protected getPrimary1(): javax.swing.plaf.ColorUIResource
          protected getPrimary2(): javax.swing.plaf.ColorUIResource
          protected getPrimary3(): javax.swing.plaf.ColorUIResource
          protected getSecondary1(): javax.swing.plaf.ColorUIResource
          protected getSecondary2(): javax.swing.plaf.ColorUIResource
          protected getSecondary3(): javax.swing.plaf.ColorUIResource
          public getControlTextFont(): javax.swing.plaf.FontUIResource
          public getSystemTextFont(): javax.swing.plaf.FontUIResource
          public getUserTextFont(): javax.swing.plaf.FontUIResource
          public getMenuTextFont(): javax.swing.plaf.FontUIResource
          public getWindowTitleFont(): javax.swing.plaf.FontUIResource
          public getSubTextFont(): javax.swing.plaf.FontUIResource
          install(): void
          isSystemTheme(): boolean
        }

      }
    }
  }
}
