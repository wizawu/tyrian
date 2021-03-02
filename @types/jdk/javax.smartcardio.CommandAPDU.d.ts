declare namespace javax {
  namespace smartcardio {

    class CommandAPDU implements java.io.Serializable {
      public constructor(arg0: byte[])
      public constructor(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
      public constructor(arg0: java.nio.ByteBuffer)
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: byte[])
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: byte[], arg5: number | java.lang.Integer, arg6: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: byte[], arg5: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: byte[], arg5: number | java.lang.Integer, arg6: number | java.lang.Integer, arg7: number | java.lang.Integer)
      public getCLA(): number
      public getINS(): number
      public getP1(): number
      public getP2(): number
      public getNc(): number
      public getData(): number[]
      public getNe(): number
      public getBytes(): number[]
      public toString(): java.lang.String
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
    }

  }
}
