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
      public addImage(arg0: java.awt.Image, arg1: int): void
      public addImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int): void
      public checkAll(): boolean
      public checkAll(arg0: boolean): boolean
      public isErrorAny(): boolean
      public getErrorsAny(): java.lang.Object[]
      public waitForAll(): void
      public waitForAll(arg0: long): boolean
      public statusAll(arg0: boolean): int
      public checkID(arg0: int): boolean
      public checkID(arg0: int, arg1: boolean): boolean
      public isErrorID(arg0: int): boolean
      public getErrorsID(arg0: int): java.lang.Object[]
      public waitForID(arg0: int): void
      public waitForID(arg0: int, arg1: long): boolean
      public statusID(arg0: int, arg1: boolean): int
      public removeImage(arg0: java.awt.Image): void
      public removeImage(arg0: java.awt.Image, arg1: int): void
      public removeImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int): void
      setDone(): void
    }

  }
}
