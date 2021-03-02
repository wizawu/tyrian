declare namespace javax {
  namespace swing {

    class ProgressMonitor implements javax.accessibility.Accessible {
      protected accessibleContext: javax.accessibility.AccessibleContext
      public constructor(arg0: java.awt.Component, arg1: java.lang.Object, arg2: java.lang.String, arg3: int, arg4: int)
      public setProgress(arg0: int): void
      public close(): void
      public getMinimum(): int
      public setMinimum(arg0: int): void
      public getMaximum(): int
      public setMaximum(arg0: int): void
      public isCanceled(): boolean
      public setMillisToDecideToPopup(arg0: int): void
      public getMillisToDecideToPopup(): int
      public setMillisToPopup(arg0: int): void
      public getMillisToPopup(): int
      public setNote(arg0: java.lang.String): void
      public getNote(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }

  }
}
