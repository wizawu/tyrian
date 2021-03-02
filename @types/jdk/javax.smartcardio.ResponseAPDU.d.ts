declare namespace javax {
  namespace smartcardio {

    class ResponseAPDU implements java.io.Serializable {
      public constructor(arg0: byte[])
      public getNr(): number
      public getData(): number[]
      public getSW1(): number
      public getSW2(): number
      public getSW(): number
      public getBytes(): number[]
      public toString(): java.lang.String
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
    }

  }
}
