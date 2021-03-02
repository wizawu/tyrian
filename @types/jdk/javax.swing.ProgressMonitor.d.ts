declare namespace javax {
  namespace swing {

    class ProgressMonitor implements javax.accessibility.Accessible {
      protected accessibleContext: javax.accessibility.AccessibleContext
      public constructor(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: java.lang.String | string, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer)
      public setProgress(arg0: number | java.lang.Integer): void
      public close(): void
      public getMinimum(): number
      public setMinimum(arg0: number | java.lang.Integer): void
      public getMaximum(): number
      public setMaximum(arg0: number | java.lang.Integer): void
      public isCanceled(): boolean
      public setMillisToDecideToPopup(arg0: number | java.lang.Integer): void
      public getMillisToDecideToPopup(): number
      public setMillisToPopup(arg0: number | java.lang.Integer): void
      public getMillisToPopup(): number
      public setNote(arg0: java.lang.String | string): void
      public getNote(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }

  }
}
