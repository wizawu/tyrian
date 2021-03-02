declare namespace java {
  namespace awt {

    class Dialog extends java.awt.Window {
      resizable: boolean
      undecorated: boolean
      public static readonly DEFAULT_MODALITY_TYPE: java.awt.Dialog$ModalityType
      modal: boolean
      modalityType: java.awt.Dialog$ModalityType
      static modalDialogs: sun.awt.util.IdentityArrayList<java.awt.Dialog>
      blockedWindows: sun.awt.util.IdentityArrayList<java.awt.Window>
      title: java.lang.String
      isInHide: boolean
      isInDispose: boolean
      public constructor(arg0: java.awt.Frame)
      public constructor(arg0: java.awt.Frame, arg1: boolean)
      public constructor(arg0: java.awt.Frame, arg1: java.lang.String)
      public constructor(arg0: java.awt.Frame, arg1: java.lang.String, arg2: boolean)
      public constructor(arg0: java.awt.Frame, arg1: java.lang.String, arg2: boolean, arg3: java.awt.GraphicsConfiguration)
      public constructor(arg0: java.awt.Dialog)
      public constructor(arg0: java.awt.Dialog, arg1: java.lang.String)
      public constructor(arg0: java.awt.Dialog, arg1: java.lang.String, arg2: boolean)
      public constructor(arg0: java.awt.Dialog, arg1: java.lang.String, arg2: boolean, arg3: java.awt.GraphicsConfiguration)
      public constructor(arg0: java.awt.Window)
      public constructor(arg0: java.awt.Window, arg1: java.lang.String)
      public constructor(arg0: java.awt.Window, arg1: java.awt.Dialog$ModalityType)
      public constructor(arg0: java.awt.Window, arg1: java.lang.String, arg2: java.awt.Dialog$ModalityType)
      public constructor(arg0: java.awt.Window, arg1: java.lang.String, arg2: java.awt.Dialog$ModalityType, arg3: java.awt.GraphicsConfiguration)
      constructComponentName(): java.lang.String
      public addNotify(): void
      public isModal(): boolean
      isModal_NoClientCode(): boolean
      public setModal(arg0: boolean): void
      public getModalityType(): java.awt.Dialog$ModalityType
      public setModalityType(arg0: java.awt.Dialog$ModalityType): void
      public getTitle(): java.lang.String
      public setTitle(arg0: java.lang.String): void
      public setVisible(arg0: boolean): void
      public show(): void
      modalityPushed(): void
      modalityPopped(): void
      public hide(): void
      doDispose(): void
      public toBack(): void
      public isResizable(): boolean
      public setResizable(arg0: boolean): void
      public setUndecorated(arg0: boolean): void
      public isUndecorated(): boolean
      public setOpacity(arg0: float): void
      public setShape(arg0: java.awt.Shape): void
      public setBackground(arg0: java.awt.Color): void
      protected paramString(): java.lang.String
      modalShow(): void
      modalHide(): void
      shouldBlock(arg0: java.awt.Window): boolean
      blockWindow(arg0: java.awt.Window): void
      blockWindows(arg0: java.util.List<java.awt.Window>): void
      unblockWindow(arg0: java.awt.Window): void
      static checkShouldBeBlocked(arg0: java.awt.Window): void
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }

  }
}
