declare namespace org {
  namespace ietf {
    namespace jgss {
      class MessageProp {
        public constructor(arg0: boolean | java.lang.Boolean)
        public constructor(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean)
        public getQOP(): number
        public getPrivacy(): boolean
        public setQOP(arg0: number | java.lang.Integer): void
        public setPrivacy(arg0: boolean | java.lang.Boolean): void
        public isDuplicateToken(): boolean
        public isOldToken(): boolean
        public isUnseqToken(): boolean
        public isGapToken(): boolean
        public getMinorStatus(): number
        public getMinorString(): java.lang.String
        public setSupplementaryStates(
          arg0: boolean | java.lang.Boolean,
          arg1: boolean | java.lang.Boolean,
          arg2: boolean | java.lang.Boolean,
          arg3: boolean | java.lang.Boolean,
          arg4: number | java.lang.Integer,
          arg5: java.lang.String | string
        ): void
      }
    }
  }
}
