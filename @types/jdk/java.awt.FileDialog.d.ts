declare namespace java {
  namespace awt {

    class FileDialog extends java.awt.Dialog {
      public static readonly LOAD: int
      public static readonly SAVE: int
      mode: int
      dir: java.lang.String
      file: java.lang.String
      filter: java.io.FilenameFilter
      public constructor(arg0: java.awt.Frame)
      public constructor(arg0: java.awt.Frame, arg1: java.lang.String)
      public constructor(arg0: java.awt.Frame, arg1: java.lang.String, arg2: int)
      public constructor(arg0: java.awt.Dialog)
      public constructor(arg0: java.awt.Dialog, arg1: java.lang.String)
      public constructor(arg0: java.awt.Dialog, arg1: java.lang.String, arg2: int)
      public setTitle(arg0: java.lang.String): void
      constructComponentName(): java.lang.String
      public addNotify(): void
      public getMode(): int
      public setMode(arg0: int): void
      public getDirectory(): java.lang.String
      public setDirectory(arg0: java.lang.String): void
      public getFile(): java.lang.String
      public getFiles(): java.io.File[]
      public setFile(arg0: java.lang.String): void
      public setMultipleMode(arg0: boolean): void
      public isMultipleMode(): boolean
      public getFilenameFilter(): java.io.FilenameFilter
      public setFilenameFilter(arg0: java.io.FilenameFilter): void
      protected paramString(): java.lang.String
      postsOldMouseEvents(): boolean
    }

  }
}
