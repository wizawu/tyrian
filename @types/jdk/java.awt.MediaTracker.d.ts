declare namespace java {
  namespace awt {

    class MediaTracker implements java.io.Serializable {
      target: java.awt.Component
      head: java.awt.MediaEntry
      public static readonly LOADING: int
      public static readonly ABORTED: int
      public static readonly ERRORED: int
      public static readonly COMPLETE: int
      static readonly DONE: int
      public constructor(arg0: java.awt.Component)
      public addImage(arg0: java.awt.Image, arg1: number | java.lang.Integer): void
      public addImage(arg0: java.awt.Image, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      public checkAll(): boolean
      public checkAll(arg0: boolean | java.lang.Boolean): boolean
      public isErrorAny(): boolean
      public getErrorsAny(): java.lang.Object[]
      public waitForAll(): void
      public waitForAll(arg0: number | java.lang.Long): boolean
      public statusAll(arg0: boolean | java.lang.Boolean): number
      public checkID(arg0: number | java.lang.Integer): boolean
      public checkID(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): boolean
      public isErrorID(arg0: number | java.lang.Integer): boolean
      public getErrorsID(arg0: number | java.lang.Integer): java.lang.Object[]
      public waitForID(arg0: number | java.lang.Integer): void
      public waitForID(arg0: number | java.lang.Integer, arg1: number | java.lang.Long): boolean
      public statusID(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): number
      public removeImage(arg0: java.awt.Image): void
      public removeImage(arg0: java.awt.Image, arg1: number | java.lang.Integer): void
      public removeImage(arg0: java.awt.Image, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      setDone(): void
    }

  }
}
