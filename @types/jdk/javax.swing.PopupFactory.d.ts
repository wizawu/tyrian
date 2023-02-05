declare namespace javax {
  namespace swing {
    class PopupFactory {
      static readonly LIGHT_WEIGHT_POPUP: int
      static readonly MEDIUM_WEIGHT_POPUP: int
      static readonly HEAVY_WEIGHT_POPUP: int
      public constructor()
      public static setSharedInstance(arg0: javax.swing.PopupFactory): void
      public static getSharedInstance(): javax.swing.PopupFactory
      setPopupType(arg0: number | java.lang.Integer): void
      getPopupType(): number
      public getPopup(
        arg0: java.awt.Component,
        arg1: java.awt.Component,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): javax.swing.Popup
      protected getPopup(
        arg0: java.awt.Component,
        arg1: java.awt.Component,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: boolean | java.lang.Boolean
      ): javax.swing.Popup
    }
  }
}
