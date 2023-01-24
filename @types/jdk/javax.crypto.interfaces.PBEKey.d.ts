declare namespace javax {
  namespace crypto {
    namespace interfaces {
      interface PBEKey extends javax.crypto.SecretKey {
        readonly serialVersionUID: long
        getPassword(): string[]
        getSalt(): number[]
        getIterationCount(): number
      }
    }
  }
}
